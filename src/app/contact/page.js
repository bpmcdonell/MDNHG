"use client";

import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
    CheckIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

import Pocketbase from "pocketbase";

export default function Contact() {
    const pb = new Pocketbase("http://127.0.0.1:8090");

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

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await pb.collection("contactForm").create(contact);
            if ((response.id !== null, response.id !== "")) {
                setSubmit(true);
            } else {
                console.log(response);
            }
        } catch (error) {
            e.preventDefault();
            console.log(error);
        }
    };

    const [submit, setSubmit] = useState(false);

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid lg:max-w-screen-2xl grid-cols-1 lg:grid-cols-2 ">
                <div className="relative px-6 mt-20 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full h-screen overflow-hidden bg-[url('/images/flowers.jpg')] bg-center ring-1 ring-gray-900/10 lg:w-1/2">
                            {/* <svg
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        x="100%"
                                        y={-1}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M130 200V.5M.5 .5H200"
                                            fill="none"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="white"
                                />
                                <svg
                                    x="100%"
                                    y={-1}
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-470.5 0h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                />
                            </svg> */}
                        </div>
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
                                            href="contact@mdnursehonorguard.com"
                                        >
                                            contact@mdnursehonorguard.com
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
                                        value-={contact.Message}
                                    />
                                </div>
                            </div>
                        </div>
                        {submit ? (
                            <div className="mt-8">
                                <div className="flex items-center justify-center gap-x-2">
                                    <CheckIcon className="h-6 w-6 text-green-500" />
                                    <p className="text-green-500">
                                        Message sent successfully!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-nhgBlue px-3.5 py-2.5 text-center text-base mx-auto text-white  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send message
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
