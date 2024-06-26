import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const [loading,setLoading]=useState(true)
  
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    setUser(null);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true)
    setUser(null);
    return signOut(auth);
  };
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider);
  };

  const updateUserProfile =(name,image)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:image
    })
    
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const values = { createUser, logOut, signIn, user, googleLogin, gitHubLogin,loading,updateUserProfile };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
