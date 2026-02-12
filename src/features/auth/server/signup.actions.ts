"use server";

import axios, { AxiosRequestConfig } from "axios";
import { SignupFormValues, signupSchema } from "../schemas/signup.schema";

export default async function signupAction(values: SignupFormValues) {
  const validationResult = signupSchema.safeParse(values); //await validateCaptcha(values.captchaToken);
  if (!validationResult.success) {
    const errors: Record<string, string> = {};
    if (validationResult.error) {
      validationResult.error.issues.forEach((issue) => {
        const filed = issue.path[0] as string;
        const message = issue.message;
        if (!errors[filed]) {
          errors[filed] = message;
        }
      });
    }

    return { success: false, message: "Validation errors", errors };
  }

  const { terms, ...requestBody } = values;

  try {
    const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
      method: "POST",
      data: requestBody,
    };
    const { data } = await axios.request(options);
    console.log("Signup API Response:", data);
    if (data.message === "success") {
      return { success: true, message: "Signup successful", errors: {} };
    }

    return {
      success: false,
      message: JSON.stringify(data),
      errors: {},
    };
  } catch (error) {
    if (error instanceof axios.AxiosError) {
      console.log("Signup Axios Error Response:", error.response?.data);
      const errorMessage = error.response?.data.message || "Signup failed";
      if (errorMessage === "Account already exists") {
        return {
          success: false,
          message: " Account already exists",
          errors: { email: "Account with this email already exists" },
        }
      }

      return { success: false, message: JSON.stringify(error.response?.data) || errorMessage, errors: {} };
    }
    console.log("Unexpected Signup Error:", error);
    return { success: false, message: "An unexpected error occurred", errors: {} };
  }
}
