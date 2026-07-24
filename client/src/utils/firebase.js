
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e809c.firebaseapp.com",
  projectId: "interviewiq-e809c",
  storageBucket: "interviewiq-e809c.firebasestorage.app",
  messagingSenderId: "441591096799",
  appId: "1:441591096799:web:c71b02740f43840881906a"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider();

export {auth,provider};