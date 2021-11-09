import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged ,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider ,updateProfile    } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);  // loading Spinner 
    const [authError, setAuthError] = useState(''); //   Error Handaling 
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    
    
//////////////////////////// Register user

    const ragisterUser = (email, password,name,history) => {

// ////////spaner er jonno use  kortase  setLoading

        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser)
          // Send name And email to firebase after //newUser //Creation 
          updateProfile(auth.currentUser, {
            displayName: name , 
          }).then(() => {
          }).catch((error) => {
          });
          /////////////// ai jinista firebase thaika anse  manage user thaika .
          history.replace('/')
         
          
          })
          .catch((error) => {
            setAuthError(error.message);
            
          })
            .finally( ()=>{setLoading(false)});
    }


    ////////////////////// Login User 

    const loginUser = (email, password,location ,history) => {

    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

    ///////////////////// Redirect code  and opore location , history use korse jeita login.js thaika anse ///////////////////////////////
    const destination = location?.state?.from || '/';
    history.replace(destination);
    ////////////////////////////////////////////////////


        setAuthError('');
     })
  .catch((error) => {
    setAuthError(error.message);
  })
    .finally(() => { setLoading(false) });
        

    }

  // Singn In using Google 

  const signinUsingGoogle = (location ,history) => {
      setLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
    
    const user = result.user;
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => { setLoading(false) });
  }
  
  

    
  //////////////////////// LogOut User 


    const logOut = () => {

        setLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
             setAuthError(error.message);
          }).finally(() => { setLoading(false) });
    }

    // ////// Obsurb  ::
    useEffect(() => {
        const auth = getAuth();
                 const unsubscribe = onAuthStateChanged(auth, (user) => {
                            
                        if (user) {

                            setUser(user)
                            
                        } else {
                            setUser({})
                        }setLoading(false)
                 });
        
                 return () => unsubscribe;


         } ,[])

    
    return {
        user,
        ragisterUser,
        loginUser,
        logOut,
        loading,
        authError,
        signinUsingGoogle,
        
    }
};

export default useFirebase;