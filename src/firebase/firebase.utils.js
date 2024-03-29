import firebase from 'firebase/app';

// include the specific features we want to use.
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAIJL23OV9-Dcf0HOvuW9Nk3eB5GsVL7LA",
	authDomain: "pasar-malam-ee4e7.firebaseapp.com",
	databaseURL: "https://pasar-malam-ee4e7.firebaseio.com",
	projectId: "pasar-malam-ee4e7",
	storageBucket: "pasar-malam-ee4e7.appspot.com",
	messagingSenderId: "1055346882910",
	appId: "1:1055346882910:web:16f2ede947781390"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// if sign out ignore.
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	// if no data at the snapshot, we create the data in firestore.
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	})

	return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(docSnapshot => {
		const { title, items } = docSnapshot.data();

		// encodeURI - since routeName is going to be a URL, we encode any characters like spaces to be its encoding, %20.
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: docSnapshot.id,
			title,
			items
		}
	});

	// array to map.
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
}

// auth is then used to make our app aware of authentication changes, i.e. new user signed in, user signed out.
export const auth = firebase.auth();

export const firestore = firebase.firestore();

// trigger a google pop up whenever we use google auth provider for authentication and sign in.
// NOTE: need to configure firebase project to allow for google sign in via the web console.
//
// now signInWithGoogle can be used with a button during onClick, onClick={signInWithGoogle}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// in case we want access to the whole library.
export default firebase;