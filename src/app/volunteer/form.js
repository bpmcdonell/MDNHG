"use client";

import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function VolunteerForm() {
    const sheetURL =
        "https://script.google.com/macros/s/AKfycbyhlDNXQ4bgoAocuI5ZDACN0xNLDtPaH4baXUqxoAQPphao7nZwPmqhnRda9jpsjMnk/exec";
    const [volunteer, setVolunteer] = useState({
        FirstName: "",
        LastName: "",
        Address: "",
        City: "",
        ZipCode: "",
        County: "",
        CountyOther: "",
        State: "",
        Phone: "",
        Email: "",
        Designation: "",
        DesignationOther: "",
        EmploymentStatus: "",
    });

    const handleChange = async (e) => {
        setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
    };

    const [DesOtherVisible, setDesOtherVisible] = useState(false);
    useEffect(() => {
        volunteer.Designation === "Other"
            ? setDesOtherVisible(true)
            : setDesOtherVisible(false);
    }, [volunteer.Designation]);

    const [CountyOtherVisible, setCountyOtherVisible] = useState(false);
    useEffect(() => {
        volunteer.County === "Other"
            ? setCountyOtherVisible(true)
            : setCountyOtherVisible(false);
    }, [volunteer.County]);

    const [submit, setSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("FirstName", volunteer.FirstName);
        formData.append("LastName", volunteer.LastName);
        formData.append("Address", volunteer.Address);
        formData.append("City", volunteer.City);
        formData.append("ZipCode", volunteer.ZipCode);
        formData.append("County", volunteer.County);
        formData.append("CountyOther", volunteer.CountyOther);
        formData.append("State", volunteer.State);
        formData.append("Phone", volunteer.Phone);
        formData.append("Email", volunteer.Email);
        formData.append("Designation", volunteer.Designation);
        formData.append("DesignationOther", volunteer.DesignationOther);
        formData.append("EmploymentStatus", volunteer.EmploymentStatus);

        fetch(sheetURL, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .then(() => {})
            .catch((error) => {
                console.log("Error:", error);
                setSubmit(false);
            });

        try {
            const response = await addDoc(collection(db, "volunteerForm"), {
                FirstName: volunteer.FirstName,
                LastName: volunteer.LastName,
                Address: volunteer.Address,
                City: volunteer.City,
                ZipCode: volunteer.ZipCode,
                County: volunteer.County,
                CountyOther: volunteer.CountyOther,
                State: volunteer.State,
                Phone: volunteer.Phone,
                Email: volunteer.Email,
                Designation: volunteer.Designation,
                DesignationOther: volunteer.DesignationOther,
                EmploymentStatus: volunteer.EmploymentStatus,
            });
            console.log("Document written with ID: ", response.id);
            setSubmit(true);
        } catch (e) {
            console.error("Error adding document: ", e);
            setSubmit(false);
        }

        setVolunteer({
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: "",
            Address: "",
            City: "",
            ZipCode: "",
            County: "NA",
            CountyOther: "",
            State: "Maryland",
            Designation: "NA",
            DesignationOther: "",
            EmploymentStatus: "NA",
        });
        setSubmit(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="my-8 flex justify-center">
                    Volunteer Sign Up Form
                </h2>
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
                            value={volunteer.FirstName}
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
                            value={volunteer.LastName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <br />

                <div className="relative">
                    <label
                        htmlFor="Address"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Street Address
                    </label>
                    <input
                        type="text"
                        name="Address"
                        id="Address"
                        autoComplete="street-address"
                        value={volunteer.Address}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="relative">
                        <label
                            htmlFor="City"
                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            name="City"
                            id="City"
                            autoComplete="address-level2"
                            value={volunteer.City}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="ZipCode"
                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                        >
                            Zip Code
                        </label>
                        <input
                            type="text"
                            name="ZipCode"
                            id="ZipCode"
                            autoComplete="postal-code"
                            value={volunteer.ZipCode}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <br />
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="relative">
                        <label
                            htmlFor="County"
                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                        >
                            County
                        </label>
                        <select
                            name="County"
                            id="County"
                            value={volunteer.County}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option value="NA">
                                --Please choose an option--
                            </option>
                            <option value="Allegany">Allegany County</option>
                            <option value="AnneArundel">
                                Anne Arundel County
                            </option>
                            <option value="BaltimoreCity">
                                Baltimore City
                            </option>
                            <option value="BaltimoreCounty">
                                Baltimore County
                            </option>
                            <option value="Calvert">Calvert County</option>
                            <option value="Caroline">Caroline County</option>
                            <option value="Carroll">Carroll County</option>
                            <option value="Cecil">Cecil County</option>
                            <option value="Charles">Charles County</option>
                            <option value="Dorchester">
                                Dorchester County
                            </option>
                            <option value="Frederick">Frederick County</option>
                            <option value="Garrett">Garrett County</option>
                            <option value="Harford">Harford County</option>
                            <option value="Howard">Howard County</option>
                            <option value="Kent">Kent County</option>
                            <option value="Montgomery">
                                Montgomery County
                            </option>
                            <option value="PrinceGeorges">
                                Prince George's County
                            </option>
                            <option value="QueenAnnes">
                                Queen Anne's County
                            </option>
                            <option value="Somerset">Somerset County</option>
                            <option value="StMarys">St. Mary's County</option>
                            <option value="Talbot">Talbot County</option>
                            <option value="Washington">
                                Washington County
                            </option>
                            <option value="Wicomico">Wicomico County</option>
                            <option value="Worcester">Worcester County</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="State"
                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            name="State"
                            id="State"
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value="Maryland"
                        ></input>
                    </div>
                </div>
                <br />
                {CountyOtherVisible && (
                    <textarea
                        name="CountyOther"
                        id="CountyOther"
                        onChange={handleChange}
                        value={volunteer.CountyOther}
                        placeholder="If you live in a county not listed, please specify."
                        rows={1}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                )}
                {CountyOtherVisible && <br />}

                <div className="relative">
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
                        value={volunteer.Email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
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
                        value={volunteer.Phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <br />
                <div className="relative">
                    <label
                        htmlFor="Designation"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Designation
                    </label>{" "}
                    <select
                        name="Designation"
                        id="Designation"
                        value={volunteer.Designation}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="NA">--Please choose an option--</option>
                        <option value="RN">RN</option>
                        <option value="LPN">LPN</option>
                        <option value="CRNP">CRNP</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <br />
                {DesOtherVisible && (
                    <textarea
                        name="DesignationOther"
                        id="DesignationOther"
                        onChange={handleChange}
                        value={volunteer.DesignationOther}
                        placeholder="If your designation is not listed, please specify."
                        rows={1}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                )}
                {DesOtherVisible && <br />}

                <div className="relative">
                    <label
                        htmlFor="EmploymentStatus"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                        Employment Status:
                    </label>
                    <select
                        name="EmploymentStatus"
                        id="EmploymentStatus"
                        value={volunteer.EmploymentStatus}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="NA">--Please choose an option--</option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Retired">Retired</option>
                        <option value="Student">Student</option>
                    </select>
                </div>
                {submit ? (
                    <div className="mt-8">
                        <div className="flex items-center justify-center gap-x-2">
                            <CheckIcon className="h-6 w-6 text-green-500" />
                            <p className="text-green-500">
                                Success! You will be contacted by us soon.
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
            </form>
        </div>
    );
}
