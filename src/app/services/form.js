"use client";

// if user selects "Living Tribute" from the dropdown, the form should change to the applicalbe fields

import { useState } from "react";

export default function ServiceForm() {
    const [request, setRequest] = useState({
        ServiceType: "",
        RequestorName: "",
        HonName: "",
        Email: "",
        Phone: "",
        Relation: "",
        DateOfDeath: "",
        DateOfService: "",
        TimeOfService: "",
        LocationOfService: "",
        FuneralHome: "",
    });

    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(request);
    };

    return (
        <div className="">
            <form
                className=""
                onSubmit={handleSubmit}
            >
                <h2 className="my-8 flex justify-center">Request a Service</h2>
                <div className="relative">
                    <label
                        htmlFor="ServiceType"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Service Type
                    </label>
                    <select
                        name="ServiceType"
                        id="ServiceType"
                        onChange={handleChange}
                        value={request.ServiceType}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="Funeral">Memorial Tribute</option>
                        <option value="Memorial">Living Tribute</option>
                    </select>
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="RequestorName"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Requestor Name
                    </label>
                    <input
                        type="text"
                        name="RequestorName"
                        id="RequestorName"
                        onChange={handleChange}
                        value={request.RequestorName}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <br />
                <div className="relative">
                    <label
                        htmlFor="Email"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        onChange={handleChange}
                        value={request.Email}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="Phone"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="Phone"
                        id="Phone"
                        onChange={handleChange}
                        value={request.Phone}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="HonFirstName"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Honoree's Name
                    </label>
                    <input
                        type="text"
                        name="HonName"
                        id="HonName"
                        onChange={handleChange}
                        value={request.HonName}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="Relation"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Relation
                    </label>
                    <input
                        type="text"
                        name="Relation"
                        id="Relation"
                        onChange={handleChange}
                        value={request.Relation}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="DateOfDeath"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Date of Death
                    </label>
                    <input
                        type="date"
                        name="DateOfDeath"
                        id="DateOfDeath"
                        onChange={handleChange}
                        value={request.DateOfDeath}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="DateOfService"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Date of Service
                    </label>
                    <input
                        type="date"
                        name="DateOfService"
                        id="DateOfService"
                        onChange={handleChange}
                        value={request.DateOfService}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="TimeOfService"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Time of Service
                    </label>
                    <input
                        type="time"
                        name="TimeOfService"
                        id="TimeOfService"
                        onChange={handleChange}
                        value={request.TimeOfService}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="LocationOfService"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Location of Service
                    </label>
                    <input
                        type="text"
                        name="LocationOfService"
                        id="LocationOfService"
                        onChange={handleChange}
                        value={request.LocationOfService}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="FuneralHome"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Funeral Home
                    </label>
                    <input
                        type="text"
                        name="FuneralHome"
                        id="FuneralHome"
                        onChange={handleChange}
                        value={request.FuneralHome}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="flex justify-center container mx-auto">
                    <button
                        type="submit"
                        className="rounded-md bg-nhgBlue px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
