import { useState } from "react";
import { loginService } from "../services/loginService";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const loginData = {emailId : email, password: password}
  const handleLogin = (e) =>{
      e.preventDefault();
      console.log(email+ "    "+ password);
      loginService(loginData).then((res)=>{
        localStorage.setItem("token",res.data);
        navigate("/dashboard");
      }).catch(error => {
        alert("Please Enter Correct Information");
        console.log(error);
      });
  }
  
    return (
        <>
            <div className="flex flex-col items-center">
                <form className="w-80" onSubmit={e=>handleLogin(e)}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={e=>setEmail(e.target.value)}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={e=>setPassword(e.target.value)}
                                            autoComplete="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center  gap-x-6">
                        
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="" >
                  <Link to="/register">New User ?</Link>
                </div>
            </div>
        </>
    );
};

export default Login;
