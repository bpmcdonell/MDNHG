"use client";
import React, { useState } from "react";
import { memWallAdd } from "../../actions.js";
import { getUserCS } from "firebase-nextjs/client/auth";
import { unstable_noStore } from "next/cache.js";

export default function AdminMemAdd({ onSave }) {
    unstable_noStore();
    const { currentUser } = getUserCS();

    const [newEntry, setNewEntry] = useState({
        name: "",
        title: "",
        dob: "",
        dod: "",
        AdminUID: currentUser.uid,
    });

    const [saveStatus, setSaveStatus] = useState(null); // New state for save status

    const handleChange = async (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };

    async function handleNewEntrySubmit(e) {
        e.preventDefault();
        const response = await memWallAdd({
            name: newEntry.name,
            title: newEntry.title,
            dob: newEntry.dob,
            dod: newEntry.dod,
            AdminUID: currentUser.uid,
        });

        if (response.success) {
            setSaveStatus("success");
            setNewEntry({
                name: "",
                title: "",
                dob: "",
                dod: "",
                AdminUID: currentUser.uid,
            });
            onSave(); // Call the onSave callback to trigger a re-render
        } else {
            setSaveStatus("error");
        }

        setTimeout(() => setSaveStatus(null), 3000); // Reset save status after 3 seconds
    }

    return (
        <div className="flex mx-auto bg-gray-100 w-5/6 p-3 rounded-lg mb-10 shadow-lg">
            <form className="mx-auto w-11/12" onSubmit={handleNewEntrySubmit}>
                <h4 className="text-xl font-bold flex mx-auto justify-center text-center">
                    Add a New Entry
                </h4>
                <div className="relative m-5 ">
                    <label className="absolute -top-2 left-2 inline-block rounded-md  bg-white px-1 text-xs font-medium text-gray-900">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newEntry.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="relative m-5 ">
                    <label className="absolute -top-2 left-2 inline-block rounded-md  bg-white px-1 text-xs font-medium text-gray-900">
                        Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={newEntry.title}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="relative m-5 ">
                    <label className="absolute -top-2 left-2 inline-block rounded-md  bg-white px-1 text-xs font-medium text-gray-900">
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={newEntry.dob}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="relative m-5">
                    <label className="absolute -top-2 left-2 inline-block rounded-md  bg-white px-1 text-xs font-medium text-gray-900">
                        Date of Death:
                    </label>
                    <input
                        type="date"
                        name="dod"
                        id="dod"
                        value={newEntry.dod}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <button
                    className="mx-auto flex px-6 py-2.5 mb-3 text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2"
                    type="submit"
                >
                    Submit
                </button>
                {saveStatus === "success" && (
                    <span className="text-green-500 ml-2">✔</span>
                )}
                {saveStatus === "error" && (
                    <span className="text-red-500 ml-2">✘</span>
                )}
            </form>
        </div>
    );
}
