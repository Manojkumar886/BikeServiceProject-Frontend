import { useState } from "react"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CancelIcon from '@mui/icons-material/Cancel';
import Person3Icon from '@mui/icons-material/Person3';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { onSubmitLogin } from "./Connect";

export const Login=()=>
{

    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const onPerform=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onLog=async()=>{
        await onSubmitLogin(user)
        window.location.assign("/")
    }

    return(
            <>
                <div className="container bg-primary">
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow-lg">
                            <div className="form group">
                                <label><Person3Icon></Person3Icon> Username</label>
                                <input type="text" 
                                onChange={onPerform} 
                                value={user.username} 
                                name="username" 
                                placeholder="Username " 
                                className="form-control" />
                            </div>
                            <div className="form group mt-3">
                                <label><VpnKeyIcon></VpnKeyIcon> Password</label>
                                <input type="password" 
                                onChange={onPerform} 
                                value={user.password} 
                                name="password" 
                                placeholder="Password" 
                                className="form-control" />
                            </div>
                            <div className="row justify-content-around mt-3">
                                    <button className="col-3 btn btn-success" onClick={onLog} >
                                {/* <button className="col-3 btn btn-outline-primary" onClick={async()=>{
                                   if(user.username==="razak" && user.password==="mohamed"){
                                    sessionStorage.setItem("auth",user.username);
                                    window.location.assign("/")
                                   }
                                   else{
                                    alert("invaild values")
                                   }
                                }}> */}
                                    <LockOpenIcon></LockOpenIcon> Login
                                </button>
                                <button className="col-3 btn btn-dark" type="reset">
                                    <CancelIcon></CancelIcon>Cancel
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}