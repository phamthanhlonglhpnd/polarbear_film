import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });
const firebaseConfig = {
  apiKey: "AIzaSyDRtH1z3AVKT85dljrxUgjRrpDqiF5bM78",
  authDomain: "polarbear-film.firebaseapp.com",
  projectId: "polarbear-film",
  storageBucket: "moonlight-40ecf.appspot.com",
  messagingSenderId: "416300927947",
  appId: "1:1043878072437:web:0fd78f6e64f3cfbe2d283c",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
