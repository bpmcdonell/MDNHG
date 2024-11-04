"use client";
import { useState, useEffect } from "react";
import { getUserCS } from "firebase-nextjs/client/auth";
import { donorWallEdit, donorWallDelete } from "../../actions";
import { unstable_noStore } from "next/cache";

export default function AdminDonorIndCons({ record, refreshKey, onSave }) {
    unstable_noStore();
    const [editState, setEditState] = useState(false);
    const [saveStatus, setSaveStatus] = useState(null);

    const [editProps, setEditProps] = useState({
        name: record.name,
        date: record.date,
        notePrefix: record.notePrefix,
        note: record.note,
        id: record.id,
    });

    const handleChange = async (e) => {
        setEditProps({ ...editProps, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setEditProps({
            name: record.name,
            date: record.date,
            notePrefix: record.notePrefix,
            note: record.note,
            id: record.id,
        });
    }, [editState, record]);

    const { currentUser } = getUserCS();

    function formatDate(date) {
        return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    function handleEdit(record) {
        setEditState(true);
        setEditProps(record);
    }

    async function handleSave() {
        const response = await donorWallEdit({
            name: editProps.name,
            date: editProps.date,
            notePrefix: editProps.notePrefix,
            note: editProps.note,
            AdminUID: currentUser.uid,
            id: editProps.id,
        });

        if (response.success) {
            setSaveStatus("success");
            setEditState(false);
            onSave();
        } else {
            setSaveStatus("error");
        }

        setTimeout(() => setSaveStatus(null), 3000);
    }

    async function handleDelete() {
        await donorWallDelete(editProps.id);
        onSave();
    }

    return (
        <li
            key={refreshKey}
            className="flex flex-row pt-2 pl-2 pb-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-md justify-evenly"
        >
            {editState ? (
                <div className="flex flex-row">
                    <div className="rounded-lg my-auto shrink mx-4">
                        <button
                            className="text-sm text-white sm:text-base text-nowrap flex justify-center mx-auto mt-4 bg-nhgBlue px-2 rounded"
                            onClick={() => handleSave()}
                        >
                            Save
                        </button>
                        {saveStatus === "success" && (
                            <span className="text-green-500 ml-2">✔</span>
                        )}
                        {saveStatus === "error" && (
                            <span className="text-red-500 ml-2">✘</span>
                        )}
                    </div>
                    <div className="flex-1 h-[90px]">
                        <div className="flex relative mx-2 mt-1 ">
                            <div className="w-11/12">
                                <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={editProps.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>
                                <div className="relative mx-2">
                                    <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                                        Date:
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={editProps.date}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex relative mx-2 mt-3">
                            <div>
                                <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                                    Note Prefix:
                                </label>
                                <input
                                    type="text"
                                    name="notePrefix"
                                    id="notePrefix"
                                    value={editProps.notePrefix}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <div>
                                <div className="relative mx-2">
                                    <label className="absolute -top-2 left-2 inline-block rounded-md bg-white px-1 text-xs font-medium text-gray-900">
                                        Note:
                                    </label>
                                    <input
                                        name="note"
                                        type="text"
                                        id="note"
                                        value={editProps.note}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex w-11/12">
                    <div className="flex flex-col mr-10 justify-self-start">
                        <button
                            className="text-sm text-white sm:text-base text-nowrap flex justify-center mx-auto mt-4 bg-nhgBlue px-2 rounded"
                            onClick={() => handleEdit(record)}
                        >
                            Edit
                        </button>
                        <button
                            className="text-sm text-white sm:text-base text-nowrap flex justify-center mx-auto mt-4 bg-nhgRed px-2 rounded"
                            onClick={() => handleDelete(record)}
                        >
                            Delete
                        </button>
                    </div>
                    <div className="mx-auto">
                        <p className="text-sm sm:text-base text-nowrap flex justify-center ">
                            {record.name}
                        </p>
                        <p className="text-sm sm:text-base text-nowrap flex justify-center m-2">
                            {formatDate(record.date)}
                        </p>
                        {record.notePrefix === undefined ||
                        record.notePrefix === "" ? (
                            <p className="text-sm sm:text-base text-nowrap flex justify-center">
                                In memory of: {record.note}
                            </p>
                        ) : (
                            <p className="text-sm sm:text-base text-nowrap flex justify-center">
                                {record.notePrefix} {record.note}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </li>
    );
}
