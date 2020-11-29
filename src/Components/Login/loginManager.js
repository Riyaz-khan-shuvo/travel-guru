import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName: displayName,
                email: email,
            };
            return signedInUser;
        })
        .catch((error) => {
            return error.message;
        });
};

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName: displayName,
                email: email,
            };
            return signedInUser;
        })
        .catch((error) => {
            return error.message;
        });
};

export const createUserWithEmailAndPassword = (
    firstName,
    lastName,
    email,
    password
) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            updateUserName(firstName, lastName);
            newUserInfo.isSignedIn = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.isSignedIn = true;
            return newUserInfo;
        })
        .catch(function (error) {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
};

export const signOutFromAccount = () => {
    return firebase
        .auth()
        .signOut()
        .then((res) => {
            const signedOutUser = {
                isSignedIn: false,
                name: "",
                email: "",
            };
            return signedOutUser;
        })
        .catch((error) => {});
};

const updateUserName = (firstName, lastName) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: firstName + " " + lastName,
    })
        .then((res) => {
            console.log(res);
        })
        .catch(function (error) {});
};
