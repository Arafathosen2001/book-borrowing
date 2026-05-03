"use client";
import { Button, Checkbox, Form, Input, InputGroup, TextArea } from "@heroui/react";


 
 const ContactPage = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-3xl font-semibold text-brand-secondary md:text-md">Contact us</span>
                    
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We d love to hear from you. Please fill out this form.</p>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        // console.log("Form data:", data);
                    }}
                    className="mx-auto mt-16 flex flex-col gap-8 md:mt-24 md:max-w-120"
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-x-8 gap-y-6 md:flex-row">
                            <Input isrequired="true" size="lg" name="firstName" label="First name" placeholder="First name" className="flex-1" />
                            <Input isrequired="true" size="lg" name="lastName" label="Last name" placeholder="Last name" className="flex-1" />
                        </div>
                        <Input isrequired="true" size="lg" name="email" label="Email" type="email" placeholder="you@company.com" />
                        <InputGroup
                            size="lg"
                            name="phone"
                            label="Phone number"

                        >

                        </InputGroup>
                        <TextArea isrequired="true" label="Message" placeholder="Leave us a message..." rows={5} />
                        <Checkbox
                            name="privacy"
                            size="md"
                            hint={
                                <>
                                    You agree to our friendly{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy.
                                    </a>
                                </>
                            }
                        />
                    </div>

                    <Button type="submit" size="xl">
                        Send message
                    </Button>
                </Form>
            </div>
        </section>
    );
 };
 
export default ContactPage;

