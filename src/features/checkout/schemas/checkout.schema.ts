import z from "zod";

export const shippingAdressSchema= z.object({
    details:z.string().nonempty().min(10,"address last be 10 characters").max(200,"address must be 200 characters"),
    phone:z.string().nonempty().regex(/^(\+2)?01[0125][0-9]{8}$/,'invalid egyption phone number'),
    city:z.string().nonempty().min(2,"city must to last 2 chatacter").max(50,"city at mest be 50 character")
})

export type shippingAdressValues= z.infer<typeof shippingAdressSchema>