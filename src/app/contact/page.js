"use client";

import {
    EnvelopeIcon,
    PhoneIcon,
    CheckIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useCallback, useState } from "react";

import { contactFormSubmit } from "../actions";

import { unstable_noStore } from "next/cache";

import { useReCaptcha } from "next-recaptcha-v3";

export default function Contact() {
    unstable_noStore();

    const { executeRecaptcha } = useReCaptcha();

    const timestamp = new Date().toLocaleString();
    const now = timestamp.toString();

    const [submit, setSubmit] = useState(false);
    const [submitPending, setSubmitPending] = useState(false);
    const [submitFail, setSubmitFail] = useState(false);

    const [contact, setContact] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Message: "",
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setSubmitPending(true);
        const token = await executeRecaptcha("contact");

        contactFormSubmit({ ...contact }, token, now)
            .then(() => {
                setSubmitPending(false);
                setSubmitFail(false);
                setSubmit(true);

                setContact({
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Phone: "",
                    Message: "",
                });
            })
            .catch(() => {
                setSubmitPending(false);
                setSubmit(false);
                setSubmitFail(true);
            });
    });

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid lg:max-w-screen-2xl grid-cols-1 lg:grid-cols-2 ">
                <div className="relative px-6 mt-20 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full h-screen overflow-hidden bg-[url('/images/flowers.jpg')] bg-center ring-1 ring-gray-900/10 lg:w-1/2"></div>
                        <div className="bg-white p-10 rounded-3xl shadow-inner">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                We would love to hear from you!
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                If you have any questions or would like to learn
                                more about our organization, please feel free to
                                reach out to us by phone, email or by filling
                                out the form to the right.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-800">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">
                                            Telephone
                                        </span>
                                        <PhoneIcon
                                            className="h-7 w-6 text-gray-700"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            className="hover:text-gray-900"
                                            href="tel:+1 (240) 974-7554"
                                        >
                                            (240) 974-7554
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon
                                            className="h-7 w-6 text-gray-600"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            className="hover:text-gray-900"
                                            href="contact@mdnursehonorguard.org"
                                        >
                                            contact@mdnursehonorguard.org
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="px-6 pb-24 mt-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 bg-white rounded-3xl shadow-inner lg:shadow-none"
                >
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="relative">
                                <label
                                    htmlFor="FirstName"
                                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    id="FirstName"
                                    value={contact.FirstName}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="LastName"
                                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    autoComplete="family-name"
                                    value={contact.LastName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="relative sm:col-span-2">
                                <label
                                    htmlFor="Email"
                                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="Email"
                                    id="Email"
                                    autoComplete="email"
                                    value={contact.Email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="relative sm:col-span-2">
                                <label
                                    htmlFor="Phone"
                                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="Phone"
                                    id="Phone"
                                    autoComplete="tel"
                                    value={contact.Phone}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="relative sm:col-span-2">
                                <label
                                    htmlFor="Message"
                                    className="absolute top-0.5 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                >
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="Message"
                                        id="Message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange}
                                        value={contact.Message}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            {submitPending ? (
                                <button
                                    type="submit"
                                    className="flex mx-auto bg-nhgBlue text-white font-bold py-2 px-4 rounded cursor-not-allowed opacity-50"
                                    disabled
                                >
                                    Submitting...
                                </button>
                            ) : submit ? (
                                <p className="text-center text-green-600">
                                    Success! You will be contacted soon.
                                </p>
                            ) : (
                                <button
                                    type="submit"
                                    className="flex mx-auto bg-nhgBlue hover:border-nhgRed text-white font-bold py-2 px-4 rounded"
                                >
                                    Submit
                                </button>
                            )}
                            {submitFail ? (
                                <p className="text-center text-red-600">
                                    There was an error submitting your request.
                                    Please try again.
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
