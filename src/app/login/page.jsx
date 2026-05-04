"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { CgGoogle } from "react-icons/cg";
import { toast } from "react-toastify";

const LoginPage = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data)
       
        const { data: { user }, error,status } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            // alert(error.message);
            toast.error(error.message);
            return;
        } else {
            toast.success("Login Successfully");
            // alert('Login Successful');
        }
        
    };
    const handelButton = async() => {
        const {data,error} = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data)
        if (error) {
            // alert(error.message);
            toast.error(error.message);
            return;
        } else {
            toast.success("Login Successfully");
            // alert('Login Successful');
        }
    }
    return (
        <div className="container py-10">
            <div className="">
                <Form className="flex w-11/12 md:w-3/6 lg:w-96 flex-col gap-4 mx-auto border border-gray-300 p-3 md:p-10 pt-2 shadow-md rounded-md" onSubmit={onSubmit}>
                <h1 className="text-center font-semibold text-4xl">Log In</h1>
                   
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input name="email" placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={4}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length <= 4) {
                                return "Password must be at least 4 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input name="password" placeholder="Enter your password" />
                        <Description>Must be at least 4 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="">
                        <p>Dont have an account? <Link className="btn btn-soft btn-info" href={'/signup'}>Register</Link></p>
                    </div>
                    <div className="flex gap-2">
                        <Button fullWidth type="submit">
                            Submit
                        </Button>
                    </div>
                    <div className="divider">OR</div>
                    <Button className="w-full bg-yellow-500 text-black" onClick={handelButton} >
                        <CgGoogle></CgGoogle>
                        Sign in with Google
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;