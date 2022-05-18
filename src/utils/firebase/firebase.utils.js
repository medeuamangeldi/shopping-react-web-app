import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtAD1OtY5tbFTgDhG1QhkLJ3T4GKyFdfw",
    authDomain: "shopping-react-web-app-db.firebaseapp.com",
    projectId: "shopping-react-web-app-db",
    storageBucket: "shopping-react-web-app-db.appspot.com",
    messagingSenderId: "915595418212",
    appId: "1:915595418212:web:17242fc8766ac28f031d71"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);