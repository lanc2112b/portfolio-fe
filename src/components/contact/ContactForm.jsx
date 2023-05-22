import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from "react-hot-toast";
import Bread from "../uiparts/Bread";
import { postContactsForm } from "../../api/apiConsumer";

const ContactForm = () => {

    const { executeRecaptcha } = useGoogleReCaptcha();

    useEffect(() => {
        document.title = 'Get In Touch';
    });

    const initial = {
        name: '',
        email: '',
        subject: '',
        source: '',
        query: '',
        clrchck: '',
        token: '',
    };

    const [formObj, setFormObj] = useState({ ...initial });
    const [formErrors, setFormErrors] = useState({ ...initial, errors: null });

    const submitHandler = (event) => {

        event.preventDefault();

        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        setFormErrors((currentObj) => { return { ...currentObj, errors: null } });

        if (!formObj.name ||
            !formObj.email ||
            !formObj.subject ||
            !formObj.query) {
            
            const msg = {
                type: 'warning',
                title: 'Empty Form',
                msg: 'Fill in the form and try again',
            }

            toast.custom(t => (<Bread msgObj={msg} t={t} />));
            return;
        }

        if (Object.values(formErrors).join('') !== '') {

            setFormErrors((currentObj) => { return { ...currentObj, errors: 'Check form errors, highlighted in red' } });
            return;

        }

        executeRecaptcha('contact_form')
            .then((result) => {
                const postObj = { ...formObj, token: result };
                return postContactsForm(postObj);
            })
            .then((result) => {
                if (result.status === 201) {
                    //console.log('posted successfully');
                    const msg = {
                        type: 'success',
                        title: 'Submitted',
                        msg: 'Message submitted, I\'ll get back to you ASAP',
                    }

                    toast.custom(t => (<Bread msgObj={msg} t={t} />));
                    resetHandler();
                }
                //console.log(result);
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    const msg = {
                        type: 'warning',
                        title: 'Bad request',
                        msg: 'Correct any form errors and try again',
                    }

                    toast.custom(t => (<Bread msgObj={msg} t={t} />));
                    
                } else {
                    const msg = {
                        type: 'error',
                        title: 'Error',
                        msg: 'Something went wrong, your message could not be submitted',
                    }

                    toast.custom(t => (<Bread msgObj={msg} t={t} />));
                }
            });
    }

    const changeHandler = (event) => {

        const { name, value } = event.target;

        validateFormItem(name, value);
        //console.log(`${name} and ${value} from change handler`);

        setFormObj((currentObj) => { return { ...currentObj, [name]: value } });

    }

    function validateFormItem(name, value) {

        if (name === 'name') {

            setFormErrors((currErrs) => { return { ...currErrs, name: '' } });

            if (!value) {
                setFormErrors((currErrs) => { return { ...currErrs, name: 'Full name is required' } });

            } else {

                if (value.length > 0 && value.length <= 4) {
                    setFormErrors((currErrs) => { return { ...currErrs, name: 'Full name needs more than 4 characters' } });
                }

                if (value.length > 255) {
                    setFormErrors((currErrs) => { return { ...currErrs, name: 'Maximum of 255 characters for full name' } });
                }

                if (/[^-a-zA-Z\s]/.test(value)) {
                    setFormErrors((currErrs) => { return { ...currErrs, name: 'Full name can only contain letters & spaces' } });
                }
            }
        }

        if (name === 'email') {

            setFormErrors((currErrs) => { return { ...currErrs, email: '' } });

            if (!value) {

                setFormErrors((currErrs) => { return { ...currErrs, email: 'Email is required' } });

            } else {

                if (value.length > 0 && value.length < 5) {
                    setFormErrors((currErrs) => { return { ...currErrs, email: 'Email must have more than 5 characters' } });
                }

                if (value.length > 255) {
                    setFormErrors((currErrs) => { return { ...currErrs, email: 'Email must have less than 255 characters' } });
                }

                // Looks like an email address. huhuh. 
                if (!/(.*)\@(.*)\.(.*)/i.test(value) || value.length > 255) {
                    setFormErrors((currErrs) => { return { ...currErrs, email: 'Valid email address required' } });
                }
            }
        }

        if (name === 'subject') {

            setFormErrors((currErrs) => { return { ...currErrs, subject: '' } });

            if (!value) { 

                setFormErrors((currErrs) => { return { ...currErrs, subject: 'A subject is required' } });

            } else {

                if (value.length > 0 && value.length < 10) {
                    setFormErrors((currErrs) => { return { ...currErrs, subject: 'Subject must have more than 10 characters' } });
                }

                if (value.length > 255) {
                    setFormErrors((currErrs) => { return { ...currErrs, subject: 'Subject must have less than 255 characters' } });
                }
            }
        }

        if (name === 'source') {

            setFormErrors((currErrs) => { return { ...currErrs, source: '' } });

            if (value) {

                if (value.length > 0 && value.length < 10) {
                    setFormErrors((currErrs) => { return { ...currErrs, source: 'Source must have more than 10 characters' } });
                }

                if (value.length > 255) {
                    setFormErrors((currErrs) => { return { ...currErrs, source: 'Source must have less than 255 characters' } });
                }
            }
        }

        if (name === 'query') {

            setFormErrors((currErrs) => { return { ...currErrs, query: '' } });

            if (!value) {
                setFormErrors((currErrs) => { return { ...currErrs, query: 'A query is required' } });

            } else {

                if (value.length > 0 && value.length < 10) {
                    setFormErrors((currErrs) => { return { ...currErrs, query: 'Query must have more than 10 characters' } });
                }

                if (value.length > 255) {
                    setFormErrors((currErrs) => { return { ...currErrs, query: 'Query must have less than 255 characters' } });
                }
            }
        }

    }

    const resetHandler = () => {

        setFormObj({ ...initial });
        setFormErrors({ ...initial });
    }

    return (
        <>
            <section className="container
                                py-10 mx-auto h-full
                                px-6 shad-hint">

                
                <div className="mb-7">
                    <h2 className="font-medium text-2xl">Find out more? </h2>
                    <p>Want to find more, have a suggestion, or just want to drop by and say hi? Use the contact form below or get in touch with LinkedIn.</p>
                </div>
                <hr className="mb-7"/>
                <form onSubmit={submitHandler}>
                    <div className="grid gap-4 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="name">*Name (fullname): <span className="ms-2 font-normal text-sm text-red-600">{formErrors.name}</span></label>
                            <input type="text" value={formObj.name} onChange={changeHandler} name="name" id="name" placeholder="Full Name" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>

                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="email">*Email: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.email}</span></label>
                            <input type="email" value={formObj.email} onChange={changeHandler} name="email" id="email" placeholder="Email Address" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="subject">*Subject:
                                <span className="ms-2 font-normal text-sm text-red-600">
                                    {formErrors.subject}
                                </span>
                            </label>
                            <input type="text" value={formObj.subject} onChange={changeHandler} name="subject" id="subject" placeholder="Subject" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="source">Source: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.source}</span></label>
                            <input type="text" value={formObj.source} onChange={changeHandler} name="source" id="source" placeholder="How Did You Find Me?" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="query">*Query: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.query}</span></label>
                            <textarea name="query" value={formObj.query} onChange={changeHandler} id="query" cols="30" rows="10" placeholder="What Can I Help You With?" className=" my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400">

                            </textarea>
                            <span className="ms-0.5 text-sm">Character count: {formObj.query.length} (max 1500)</span>
                        </div>
                        <input type="hidden" value={formObj.clrchck} onChange={changeHandler} name="clrchck" id="clrchck" className="" />
                        <div className="col-span-2 flex flex-row justify-end pe-2 me-3"><span className="ms-2 font-semibold text-red-600">{formErrors.errors}</span></div>
                        <div className="col-span-2 flex flex-row justify-end pe-2 me-3">
                            
                            <button type="button" className="me-4 py-1 px-3 font-semibold rounded-full" onClick={resetHandler}>
                                Reset
                            </button>
                            <button type="submit" className="bg-stone-400 py-1 px-3 w-full sm:w-auto hover:animate-pulse shadow-sm hover:shadow-md rounded-full font-semibold text-stone-50 hover:bg-stone-400">
                                <i className="me-3 fa-solid fa-paper-plane"></i>
                                Send
                            </button>
                        </div>

                    </div>
                </form>

            </section>
        </>
    );
}

export default ContactForm;