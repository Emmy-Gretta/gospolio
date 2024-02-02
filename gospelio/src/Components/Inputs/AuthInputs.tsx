"use client"

import React, { useEffect, useState } from "react"

interface AuthProp{
   labelName: string;
   type: string;
   placeholder: string;
   value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  errorMessage?:string
}

const AuthInputs:React.FC<AuthProp> = ({ labelName, type, placeholder, value, onChange, errorMessage}) => {
   const [showPassword, setShowPassword] = useState(false);
   const [isEdge, setIsEdge] = useState(false);


   const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

   useEffect(() => {
      const isEdgeBrowser = /Edge\//.test(navigator.userAgent);
      setIsEdge(isEdgeBrowser);
    }, []);

    return(
      <section className="flex items-center justify-center relative my-10 text-[12.8px] form">
         <input 
          type={type === "password" && !isEdge ? (showPassword ? "text" : "password") : type} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border fieldset w-[380px] h-[50px] rounded-lg pl-10 "
         />
          <label htmlFor={labelName} className="-top-3 left-[255px] absolute label text-[14px]">{labelName}</label>
          {/* {type === "password" && !isEdge && (
          <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash className="text-[#D9D9D9]" /> : <FaEye className="text-[#D9D9D9]" />}
          </div>
        )} */}
      {/* {errorMessage && (
        <p className="text-red-500 text-sm mt-1 ml-1">
          {errorMessage}
        </p>
      )} */}
      </section>
    )
}

export default AuthInputs