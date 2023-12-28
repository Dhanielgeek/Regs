import React,{useState} from 'react'
import './style.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import axios from 'axios';
import {Oval} from 'react-loader-spinner'
import Flag from '../assets/flag.png'
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

const handleShowPassword = ()=>{
    console.log("show");
    setShowPassword(!showPassword)
  }


  const [password, setPassword] = useState("");
  const[fullName, setfullName] = useState("")
  const[state, setState] = useState('')
  const[email, setEmail] = useState('')
  const[phoneNumber, setPhoneNo] = useState('')
  const [error, setError] = useState({isError:false, type:'', message: ''})
 const [loading, setLoading] = useState(false)
 const[address , setAddress] = useState('')
 const [dateOfBirth, setdateOfBirth] = useState('')
  


 const handleSignUp = async (e) =>{


        e.preventDefault()
        setLoading(true)

        
const Url_Endpoint = 'http://localhost:3025/api/v1/createuser'

const data = {fullName,email,state,phoneNumber,address,password,dateOfBirth}
        if(fullName === ""){
            setError({isError:true, type:'Name', message:'Enter name'})
            setLoading(true)
            console.log("First name");
        }else if (!email){
            setError({isError:true, type:'email', message:'Enter email'})
            setLoading(true)
        }else if (!email.includes('@')){
            setError({isError:true, type:'email@', message:'Email must contain @'})
               setLoading(true)
           }else if(address === ""){
            setError({isError : true, type: "AddRess", message: "ENTER ADDRESS"})
            setLoading(true)
            console.log("Enter Address");
        }else if(state === ""){
            setError({isError : true, type: "STATE", message: "Enter State"})
            setLoading(true)
        } else if (!phoneNumber){
               setError({isError:true, type:'phone', message:'Enter phone'})
                setLoading(true)
            }else if (phoneNumber.length < 11){
               setError({isError:true, type:'phoneLength', message:'Phone no must be 11 digits'})
                setLoading(true)
            }else if (!password){
                setError({isError:true, type:'password', message:'Enter password'})
             setLoading(true)
            }else if(dateOfBirth === ""){
                setError({isError:true, type:'DOB', message:'Enter DOB'})
            }else{
            setLoading(true)
    setError({isError:false, type:'', message: ''})
    try {
        // Make the API request
        const response = await axios.post(Url_Endpoint, data, { timeout: 5000 });
       alert("Registration Complete ✔✔")
        console.log('Response:', response.data);
      } catch (error) {
        
        console.log('Error occurred:', error.response);
        const errorMsg = error.response?.data?.error;
        // setError({ isError: true, type: 'email', message: errorMsg || 'An error occurred' });
      } finally {
        // Regardless of success or failure, stop the loading state
        setLoading(false);
      }
      
}
 }

  return (
    <div className='bodySIGN'>
    <div className="SignUpContentDownWrap">
    <div className="SignUpContentDownInitials">
        <h1>Register Here</h1>
        <p>Create an account to get started.</p>
    </div>
    <div className="SignUpContentDownForm">
        <div className="SignUpContentDownFormNames">
            <div className="SignUpContentDownFormFName">
                <div className="SignUpContentDownFormFNameLabels">
                    <label htmlFor="">Name</label>
                    {error.isError && error.type === "Name" ? (<p className='errorText'>Input YOUR Name</p>) : null }
                </div>
                <div className="SignUpContentDownFormFNameInputs">
                    <input
                        type="text"
                        placeholder="Input First Name"
                        value={fullName}
                        onChange={(e)=> setfullName(e.target.value)}
                    />
                </div>
            </div>
            <div className="SignUpContentDownFormLName">
                <div className="SignUpContentDownFormLNameLabels">
                    <label htmlFor="">Email</label>
                    {
                        error.isError && error.type === 'email'?  <p className='errorText'>{error.message}</p> : null
                    }
                {
                        error.isError && error.type === 'email@'?  <p className='errorText'>{error.message}</p> : null
                    }

                </div>
                <div className="SignUpContentDownFormLNameInputs">
                    <input
                        type="text"
                        placeholder="Email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="SignUpContentDownFormMail">
            <div className="SignUpContentDownFormMailLabels">
                <label htmlFor="">Address</label>
                {
                    error.isError && error.type === "AddRess" ? <p className='errorText'>{error.message}</p> : null
                }
            </div>
            <div className="SignUpContentDownFormMailInputs">
                <input
                    type="text"
                    placeholder="Address"
                   value={address}
                   onChange={(e)=> setAddress(e.target.value)}
                />
            </div>
        </div>
        <div className="SignUpContentDownFormMail">
            <div className="SignUpContentDownFormMailLabels">
                <label htmlFor=""> State</label>
                {
                    error.isError && error.type === "STATE" ? <p className='errorText'>{error.message}</p> : null
                }

            </div>
            <div className="SignUpContentDownFormMailInputs">
                <input
                    type="text"
                    placeholder="State of Origin"
                    value={state}
                    onChange={(e) => setState(e.target.value)} />
            </div>
        </div>
        <div className="SignUpContentDownFormMail">
            <div className="SignUpContentDownFormMailLabels">
                <label htmlFor="">DOB</label>
                {
                    error.isError && error.type === "DOB" ? <p className='errorText'>{error.message}</p> : null
                }
            </div>
            <div className="SignUpContentDownFormMailInputs">
                <input
                    type="date"
                    placeholder=""
                    value={dateOfBirth}
                    onChange={(e)=> setdateOfBirth(e.target.value)} />
            </div>
        </div>
        <div className="SignUpContentDownFormPhone">
            <div className="SignUpContentDownFormPhoneLabels">
                <label htmlFor="">Phone Number</label>
                {error.isError && error.type === "phone" ? <p className='errorText'>{error.message}</p> : null}
            </div>
            <div className="SignUpContentDownFormPhoneInputs">
                <div className="SignUpContentDownFormPhoneFlag">
                    <img src={Flag} alt="" /> <span>+234</span>
                </div>
                {error.isError && error.type === "phoneLength" ? <p className='errorText'>{error.message}</p> : null}
                <input
                    type="tel"
                    maxLength={11}
                    placeholder="Input Number"
                   value={phoneNumber}
                   onChange={(e)=> setPhoneNo(e.target.value)}
                />
            </div>
        </div>
        <div className="SignUpContentDownFormPwd">
            <div className="SignUpContentDownFormPwdLabels">
                <label htmlFor="">Password</label>
                {error.isError && error.type === "password" ? <p className='errorText'>{error.message}</p> : null}
            </div>
            <div
                className="SignUpContentDownFormPwdInputs"
            >
                <input
                    type={showPassword? "text" : "password"}
                    placeholder="Input Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <div
                    className="SignUpContentDownFormPwdEyes"
                >

                   {
                    showPassword ?  (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye'/>) :( <AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword}/>) 
                   }
                </div>
            </div>
        </div>
      
    </div>
    <div className="SignUpContentDownBtn">
        <button  onClick={handleSignUp}>
            {loading === true ? (<div className='loader'>
            <Oval
                height={40}
                width={40}
                color="#fff"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#030303"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>) : (<p>Register</p>)}
        </button>
       
    </div>
    <p className="signup-link">
            Already have an account?<Link to={'/'} className='INK╝'>Login</Link>
          </p>
</div>
</div>
  )
}

export default Register


