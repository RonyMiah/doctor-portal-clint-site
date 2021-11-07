import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged  } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

    const[user, setUser] = useState();
    const auth = getAuth()
    

    const ragisterUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    // ////// Obsurb  ::
    useEffect(() => {
        const auth = getAuth();
                 const unsubscribe = onAuthStateChanged(auth, (user) => {
                            
                        if (user) {

                            setUser(user)
                            
                        } else {
                            setUser({})
                        }
                 });
        
                 return () => unsubscribe;


         } ,[])

    
    return {
        user,
        ragisterUser,
        logOut,

        
    }
};

export default useFirebase;