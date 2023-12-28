// const handleShowPassword = ()=>{
//     console.log("object");
//     setShowPassword(!showPassword)
//   }
 

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const[firstName, setFirstName] = useState("")
//   const[lastName, setLastName] = useState('')
//   const[email, setEmail] = useState('')
//   const[phone, setPhoneNo] = useState('')
//   const [error, setError] = useState({isError:false, type:'', message: ''})
//   const [loading, setLoading] = useState(false)


//   const handleSignUp = (e) =>{
//     e.preventDefault()
//     setLoading(true)
//     if(firstName === ""){
//         setError({isError:true, type:'firstName', message:'Enter name'})
//         setLoading(false)
//         console.log("First name");
//     }else if (lastName === ""){
//         setError({isError:true, type:'lastName', message:'Enter name'})
//         setLoading(false)
//         console.log("Second name");
//     }else if (!email){
//         setError({isError:true, type:'email', message:'Enter email'})
//         setLoading(false)
//     }else if (!email.includes('@')){
//         setError({isError:true, type:'email@', message:'Email must contain @'})
//         setLoading(false)
//     }else if (!phone){
//         setError({isError:true, type:'phone', message:'Enter phone'})
//         setLoading(false)
//     }else if (phone.length < 11){
//         setError({isError:true, type:'phoneLength', message:'Phone no must be 11 digits'})
//         setLoading(false)
//     }
//     else if (!password){
//         setError({isError:true, type:'password', message:'Enter password'})
//         setLoading(false)

//     } else if (confirmPassword !== password){
//         setError({isError:true, type: "passwordMatch", message: "your password must match"})
//         setLoading(false)

//     }
//     else if (!confirmPassword){
//         setError({isError:true, type:'confirmPassword', message:'Enter password again'})
//         setLoading(false)

//     }else {
//         setLoading(false)
//         setError({isError:false, type:'', message: ''})
//         alert('Yayyy!!')
//     }
//   }

// const [showPassword, setShowPassword] = useState(false)

























// import React,{useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { UserData } from '../Redux/Features';
// import './signup.css';
// import axios from 'axios';
// import {Link,useNavigate} from 'react-router-dom'
// import {SpinnerCircular} from  'spinners-react'


// const SignUp = () => {
//   const dispatch = useDispatch();

//   //const { email, password, emailError, passwordError, isSignup } = useSelector((state) => state.auth);//
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   // const [emailError, setemailError] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [Loading, setLoading] = useState(false)
// const [msg, setmsg] = useState({
//   error : false,
//   value : "",
//   msg : ""
// })
// const Url_Endpoint = "https://trippyapiv1.onrender.com/trippy/signup"
// const data = {firstName,lastName,email,password}

// const navigate = useNavigate()

// const HandleSignup = (e)=>{
//   e.preventDefault()
//   if(!firstName){
//     setmsg({
//       error: true,
//       value: "Firstname",
//       msg : "Input first Name",
//       type: "firstname",
//     })
//     setLoading(false)
//   return;
//   }else if(!lastName){
//     setmsg({
//       error: true,
//       value: "Lastname",
//       msg: "input last name",
//       type: "Lastname",
//     })
//     setLoading(false);
//     return;
//   }else if (!email){
//     setmsg({
//       error: true,
//       value: "email",
//       msg: "input email",
//       type: "email"
//     })
//     setLoading(false)
//     return;
//   }else if(!email.includes("@")){
//     setmsg({
//       error: true,
//       value: "email",
//       msg: "input valid email",
//       type: "email"
//     })
//     setLoading(false)
//     return;
//   } else if (!password){
//     setmsg({
//       error: true,
//       value: "password",
//       msg: "input password",
//       type: "password"
//     })
//     setLoading(false)
//     return;
//   }else if(!confirmPassword){
//     setmsg({
//       error: true,
//       value: "confirmPassword",
//       msg: "input confirm password",
//       type: "confirmPassword"
//     })
//     setLoading(false)
//     return;
//   }else if (password !== confirmPassword){
//     setmsg({
//       error: true,
//       value: "confirmPassword",
//       msg: "Password does not Match",
//       type: "confirmPassword"
//     })
//     setLoading(false)
//     return;
//   }else{
//     setmsg("")
//     setLoading(true)
//     axios
//     .post(Url_Endpoint,data)
//     .then((res)=>{
//       console.log(res);
//       dispatch(UserData(res.data.user))
//       console.log(res.data.token)
//       navigate('/confirm')
//     })
//     .catch((err)=>{
//       console.log("Error occured",err.response.data.error)
//       const errorMsg = err.response?.data?.error
//       setmsg({ error : true, value : "email", msg: errorMsg})
//       setLoading(false)
//     })
    
//   }
// }



//   return (
//     <div className='holder_container'>
//       <div className='img_cont'></div>
//       <div className='signup_hold'>
//         <form className='action'>
//           <h2>Sign Up</h2>
//           <label>First Name : </label>
//           <input type='text' placeholder='Firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//           {
//             msg.type === "firstname" ? <p style={{
//               color: "#ff2400",
//               fontSize: "14px",
//               marginBottom: "7px"
//             }}>
//               {msg.msg} 
//             </p> : null
//           }
//           <label>Last Name: </label>
//           <input type='text' placeholder='Lastname' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
//           {
//             msg.type === "Lastname" ? <p style={{
//               color: "#ff2400",
//               fontSize: "14px",
//               marginBottom: "7px"
//             }}>
//               {msg.msg} 
//             </p> : null
//           }
//           <label htmlFor='name'>Email:</label>
//           <input type='email'  onChange={(e) => setEmail(e.target.value)} placeholder='example@mail.com' value={email} />
//           {
//             msg.type === "email" ? <p style={{
//               color: "#ff2400",
//               fontSize: "14px",
//               marginBottom: "7px"
//             }}>
//               {msg.msg} 
//             </p> : null
//           }
//           <label>Password: </label>
//           <input type='password' onChange={(e) =>setPassword(e.target.value)}  />
//           {
//             msg.type === "password" ? <p style={{
//               color: "#ff2400",
//               fontSize: "14px",
//               marginBottom: "7px"
//             }}>
//               {msg.msg} 
//             </p> : null
//           }
//           <label>Confirm Password</label>
//           <input type='password' onChange={(e) => setConfirmPassword(e.target.value)}  value={confirmPassword}/>
//           {
//             msg.type === "confirmPassword" ? <p style={{
//               color: "#ff2400",
//               fontSize: "14px",
//               marginBottom: "7px"
//             }}>
//               {msg.msg} 
//             </p> : null
//           }
//           <button  onClick={HandleSignup}>
//             {
//               Loading? <SpinnerCircular size={50} thickness={100} speed={100} color="rgba(22, 13, 8, 1)" secondaryColor="rgba(0, 0, 0, 0.44)"/> : "Sign Up"
//             }
//           </button>
//           <div className='para_cont'>
//             <p>Already has an account? <Link to={'/login'} className='log'>Login♦</Link></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
