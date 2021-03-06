import {useState,React} from 'react'
import "./login.css"
import {
   Link,useNavigate 
} from "react-router-dom";

  
import {auth,db} from "./firebase"
function Login() {
  //taking input value from email and password field
//    const history =useHistory()
const navigate =useNavigate()
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")

 function signIn(e){
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then((auth)=>{
        if(auth){
            navigate("/")
        }
    })
    .catch(error=>alert(error.message))
 }



function signUp(e){
    e.preventDefault()
    
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=> {
        console.log(auth)
          if(auth){
            navigate('/');
          }
    })
    .catch(error =>alert(error.message))
}




    return (
        <div className="login">
        <Link to ="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="amazon logo" className="login__image" />
            </Link>
       <div className="login__container">
           <h2 className="signLabel">sign-in</h2>
           <form>
               <h5 className="label">E-mail</h5>
               <input type="text" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Enter your Email"/>
               <h5 className="label">password</h5>
               <input type="Password"  onChange={e=>setPassword(e.target.value)} value={password} placeholder="Enter your password" />

               <button type ="submit" onClick={signIn}className="login__sign__in">sign in</button>
           </form>

           <p className="privacy">
               before sign in please read the notice. we are not responsible for your data 
           </p>
           <button type="submit" onClick={signUp} className="login__create__account">
               create new account
           </button>
       </div>

        </div>
    )
}

export default Login
