import { useEffect, useState, useCallback } from "react";
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import {postContactsForm} from "../../api/apiConsumer";

const ContactForm = () => {

    useEffect(() => {
        document.title = 'Get In Touch';
    });

    const [gToken, setGToken] = useState('');
    
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            //console.log('Execute recaptcha not yet available');
            return;
        }

        const token = await executeRecaptcha('contact_form');

        setGToken(token);

        //console.log(token);

    }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    const initial = {
        name: '',
        email: '',
        subject: '',
        source: '',
        query: '',
        clrchck: '',
        token: '',
    };

    const [formObj, setFormObj] = useState({...initial});
    const [formErrors, setFormErrors] = useState({...initial, errors: null});

    const submitHandler = (event) => {

        event.preventDefault();
        
        const tmpObj = { ...formErrors };

        tmpObj.errors = null;

        if (Object.values(formErrors).join('')) {

            tmpObj.errors = "Check form errors, highlighted in red."
            setFormErrors(tmpObj);
            return;

        }

        setFormErrors(tmpObj);

        formObj.token = gToken;

        postContactsForm(formObj)
            .then((result) => {
                //console.log(result);
                handleReCaptchaVerify();
                resetHandler();
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const changeHandler = (event) => {

        const currentTrack = event.target.name;
        const currentVal = event.target.value;
        const newObj = { ...formObj };

        newObj[currentTrack] = currentVal;
        setFormObj(newObj);
        validateFormItem(currentTrack);
    }

    function validateFormItem(name) {

        const tmpObj = { ...formErrors };

        tmpObj.errors = null;

        if (name === 'name') {

            tmpObj.name = null;

            if (!formObj.name) {
                tmpObj.name = 'Name is required';

            } else {

                if (formObj.name.length > 0 && formObj.name.length < 4) {
                    tmpObj.name = 'Name must have more than 4 characters';
                }

                if (formObj.name.length > 255) {
                    tmpObj.name = 'Name must have less than 255 characters';
                }

                if (/[^-a-zA-Z\s]/.test(formObj.name)) {
                    tmpObj.name = 'Name can only contain letters';
                } 
            }
        }

        if (name === 'email') {

            tmpObj.email = null;

            if (!formObj.email) {
                tmpObj.email = 'Email is required';

            } else {

                if (formObj.email.length > 0 && formObj.email.length < 3) {
                    tmpObj.email = 'Email must have more than 3 characters';
                }

                if (formObj.email.length > 255) {
                    tmpObj.email = 'Email must have less than 255 characters';
                }
            }
        }

        if (name === 'subject') {

            tmpObj.subject = null;

            if (!formObj.subject) {
                tmpObj.subject = 'A subject is required';

            } else {

                if (formObj.subject.length > 0 && formObj.subject.length < 10) {
                    tmpObj.subject = 'Subject must have more than 10 characters';
                }

                if (formObj.subject.length > 255) {
                    tmpObj.subject = 'Subject must have less than 255 characters';
                }
            }
        }

        if (name === 'source') {

            tmpObj.source = null;

            if (formObj.source) {

                if (formObj.source.length > 0 && formObj.source.length < 10) {
                    tmpObj.source = 'Source must have more than 10 characters';
                }

                if (formObj.source.length > 255) {
                    tmpObj.source = 'URL must have less than 255 characters';
                }
            }
        }

        if (name === 'query') {

            tmpObj.query = null;

            if (!formObj.query) {
                tmpObj.query = 'A query is required';

            } else {

                if (formObj.query.length > 0 && formObj.query.length < 10) {
                    tmpObj.query = 'Query must have more than 10 characters';
                }

                if (formObj.query.length > 255) {
                    tmpObj.query = 'Query must have less than 255 characters';
                }
            }
        }

        setFormErrors(tmpObj);
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

                <p>Preamble and title here</p>

                <form onSubmit={submitHandler}>
                    <div className="grid gap-4 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="name">Name (full)*: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.name}</span></label>
                            <input type="text" value={formObj.name} onChange={changeHandler} name="name" id="name" placeholder="Full Name" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>

                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="email">Email*: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.email}</span></label>
                            <input type="email" value={formObj.email} onChange={changeHandler} name="email" id="email" placeholder="Email Address" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="subject">Subject*:
                                <span className="ms-2 font-normal text-sm text-red-600">
                                    {formErrors.subject}
                                </span>
                            </label>
                            <input type="text" value={formObj.subject} onChange={changeHandler} name="subject" id="subject" placeholder="Subject" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="source">Source*: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.source}</span></label>
                            <input type="text" value={formObj.source} onChange={changeHandler} name="source" id="source" placeholder="How Did You Find Me?" className="my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400" />
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <label className="font-medium ms-1" htmlFor="query">Query*: <span className="ms-2 font-normal text-sm text-red-600">{formErrors.query}</span></label>
                            <textarea name="query" value={formObj.query} onChange={changeHandler} id="query" cols="30" rows="10" placeholder="What Can I Help You With?" className=" my-1 px-3
                                                                                          border-0 border-b-2 border-gray-200
                                                                                          focus:ring-0 focus:border-stone-400">

                            </textarea>
                            <span className="ms-0.5 text-sm">Character count: {formObj.query.length} (max 1500)</span>
                        </div>
                        <input type="hidden" value={formObj.clrchck} onChange={changeHandler} name="clrchck" id="clrchck" className="" />
                        <div className="col-span-2 flex flex-row justify-end pe-2 me-3">
                            <button type="submit" className="me-4 py-1 px-3 font-semibold rounded-full" onClick={resetHandler}>
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