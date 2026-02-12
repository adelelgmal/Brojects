import { z } from "zod"

export const signupSchema = z.object({
    name: z.string().nonempty("Name is required").min(3, "Name must be at least 3 characters long").max(25, "Name must be at most 25 characters long"),
    email: z.string().nonempty("Email is required").pipe(z.email("Invalid email address")),
    password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long").max(20, "Password must be at most 20 characters long").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    rePassword: z.string().nonempty("Please confirm your password"),
    phone: z.string().nonempty("Phone number is required").min(10, "Phone number must be at least 10 digits long").max(15, "Phone number must be at most 15 digits long").regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    terms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions")
}).refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"]
})

export type SignupFormValues = z.infer<typeof signupSchema>;

