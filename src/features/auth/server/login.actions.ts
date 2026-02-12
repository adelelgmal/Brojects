'use server';

import { da, tr } from "zod/v4/locales";
import { LoginFormValues, loginSchema } from "../schemas/login.schema";
import axios, { AxiosError } from "axios";

export default async function loginAction(values:LoginFormValues) {

 const validationResult= loginSchema.safeParse(values);
    if(!validationResult.success){

        const errors: Record<string, string> ={};
        validationResult.error.issues.forEach((issue)=>{
            const key= issue.path[0] as string;
            const message= issue.message;

            if(!errors[key]){
                errors[key]= message;
            }
        });







        return{
            success:false,
            message:"Validation error",
            errors

        }




    }


    const { rememberMe, ...requestData }= values;


    try{

        const options= {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
            method:"POST",
            data:requestData,

        };

        const {data} = await axios.request(options);
        if(data.message==="success"){
            return{
                success:true,
                message:"Login successful",
                data
            }
        }
        return{
            success:false,
            message:data.message || "Login failed"
        }

    } catch(error){
        return{
           success:false,
           message:"An unexpected error occurred while logging in.",
           errors: error instanceof AxiosError ? error.response?.data?.message || "Login failed" : "Unknown error"
        }
    }

}