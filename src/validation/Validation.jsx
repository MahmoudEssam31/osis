import * as Yup from "yup";

export const CheckoutValidation = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    countryCode: Yup.string().required("Required"),
    phoneNumber: Yup.string()
        .required("Required")
        .min(10, "Please enter a valid phone number"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    // password:Yup.string().required("Required")
});
export const PaymentValidation = Yup.object({
    cardNumber: Yup.string().required("Required").min(10, "Please enter a valid phone number"),
    expirationDate: Yup.string().required("Required"),
    cvv: Yup.string().required("Required"),
    NameOnCard: Yup.string().required("Required"),
});
export const LoginValidation = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    password:Yup.string().required("Required")
});
export const CreateValidation = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string().required("Required"),
    checkbox: Yup.boolean().oneOf([true], "Required"),
});
export const resetPassword = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
});