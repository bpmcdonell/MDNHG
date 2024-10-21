"use client";
import React, { useState } from "react";
import { donorWallAdd } from "../../actions.js";
import { getUserCS } from "firebase-nextjs/client/auth";

export default function AdminDonorAdd({ onSave }) {
    const { currentUser } = getUserCS();

    const [newEntry, setNewEntry] = useState({
        name: "",
        date: "",
        notePrefix: "",
        note: "",
        AdminUID: currentUser.uid,
    });

    const [saveStatus, setSaveStatus] = useState(null);

    const handleChange = async (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };

    async function handleNewEntrySubmit(e) {
        e.preventDefault();
        const response = await donorWallAdd({
            name: newEntry.name,
            date: newEntry.date,
            notePrefix: newEntry.notePrefix,
            note: newEntry.note,
            AdminUID: currentUser.uid,
        });

        if (response.success) {
            setSaveStatus("success");
            setNewEntry({
                name: "",
                date: "",
                notePrefix: "",
                note: "",
                AdminUID: currentUser.uid,
            });
            onSave();
        } else {
            setSaveStatus("error");
        }

        setTimeout(() => setSaveStatus(null), 3000);
    }

    return (
        <div className="flex mx-auto bg-gray-100 w-5/6 p-3 rounded-lg mb-10 shadow-lg">
            <form className="mx-auto w-11/12" onSubmit={handleNewEntrySubmit}>
                <h4 className="text-xl font-bold flex mx-auto justify-center text-center">
                    Add a New Donor
                </h4>
                <div className="relative m-5 ">
                    <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
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
                    <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                        Date:
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={newEntry.date}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="grid grid-cols-1 m-5 gap-2 sm:grid-cols-2">
                    <div className="relative">
                        <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                            Note Prefix:
                        </label>
                        <input
                            type="text"
                            name="notePrefix"
                            id="notePrefix"
                            value={newEntry.notePrefix}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                            Note:
                        </label>
                        <input
                            name="note"
                            id="note"
                            value={newEntry.note}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button
                    className="mx-auto flex px-6 py-2.5 mb-3 text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
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
