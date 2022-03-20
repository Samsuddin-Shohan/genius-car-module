import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
initializeAuthentication();

const useFirebase = ()=>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({});
            }
            setIsLoading(false);

        })
    },[])
    const googleSignin = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
        
    }
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
          })
          .finally(setIsLoading(false))
    }
    return{
        user,
        googleSignin,
        isLoading,
        logOut
    }


}
export default useFirebase;