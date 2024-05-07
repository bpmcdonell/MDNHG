"use client";

import { useState, useEffect } from "react";
import Pocketbase from "pocketbase";

export default function ServiceForm() {
    const pb = new Pocketbase("http://127.0.0.1:8090");

    const [data, setData] = useState({
        serviceType: "memorialTribute",
        otherService: "",
        dateOfService: "",
        honoredName: "",
        reqName: "",
        reqPhone: "",
        reqEmail: "",
        reqRelation: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(data);
            const response = await pb.collection("serviceRequest").create(data);
            console.log(response);
        } catch (error) {
            e.preventDefault();
            console.log(error);
        }
        setSubmit(true);
    };

    const [otherVisible, setOtherVisible] = useState(false);
    useEffect(() => {
        data.serviceType === "otherService"
            ? setOtherVisible(true)
            : setOtherVisible(false);
    }, [data.serviceType]);

    const [submit, setSubmit] = useState(false);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="my-8 flex justify-center">Request a Service</h2>
                <div className="relative">
                    <label
                        htmlFor="serviceType"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Service Type
                    </label>
                    <select
                        name="serviceType"
                        id="serviceType"
                        onChange={handleChange}
                        value={setData.serviceType}
                        defaultValue={"memorialTribute"}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="memorialTribute">
                            Memorial Tribute
                        </option>
                        <option value="livingTribute">Living Tribute</option>
                        <option value="otherService">Other</option>
                    </select>
                </div>

                <br />
                {otherVisible && (
                    <textarea
                        name="otherService"
                        id="otherService"
                        onChange={handleChange}
                        value={setData.otherService}
                        placeholder="Please describe the service you would like to request."
                        rows={2}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                )}
                {otherVisible && <br />}
                <div className="relative">
                    <label
                        htmlFor="dateOfService"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Date of Service
                    </label>
                    <input
                        type="date"
                        name="dateOfService"
                        id="dateOfService"
                        onChange={handleChange}
                        value={setData.dateOfService}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <br />
                <div className="relative">
                    <label
                        htmlFor="honoredName"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Name of Honored Person
                    </label>
                    <input
                        type="text"
                        name="honoredName"
                        id="honoredName"
                        onChange={handleChange}
                        value={setData.honoredName}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="reqName"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Requester's Name
                    </label>
                    <input
                        type="text"
                        name="reqName"
                        id="reqName"
                        onChange={handleChange}
                        value={setData.reqName}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="reqPhone"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Requester's Phone Number
                    </label>
                    <input
                        type="tel"
                        name="reqPhone"
                        id="reqPhone"
                        onChange={handleChange}
                        value={setData.reqPhone}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="reqEmail"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Requester's Email
                    </label>
                    <input
                        type="email"
                        name="reqEmail"
                        id="reqEmail"
                        onChange={handleChange}
                        value={setData.reqEmail}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="reqRelation"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Requester's Relationship to Honored Person
                    </label>
                    <input
                        type="text"
                        name="reqRelation"
                        id="reqRelation"
                        onChange={handleChange}
                        value={setData.reqRelation}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                {submit ? (
                    <p className="text-center text-green-600">
                        Your request has been submitted.
                    </p>
                ) : (
                    <button
                        type="submit"
                        className="w-full bg-nhgBlue hover:border-nhgRed text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
}
