"use client";
import { useState, useEffect } from "react";
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

import AdminMemIndCons from "./AdminMemIndCons.jsx";
import { memWallGet } from "../../actions.js"; // Import the fetch function
import AdminMemAdd from "./AdminMemAdd.jsx"; // Import AdminMemAdd
import { unstable_noStore } from "next/cache.js";

export default function AdminMemWallCons({ initialMemoriams }) {
    const paginatior = (memoriams) => {
        const itemsPerPage = 8;
        const pages = Math.ceil(memoriams.length / itemsPerPage);
        const paginatedMemoriams = Array.from({ length: pages }, (_, index) => {
            const start = index * itemsPerPage;
            return memoriams.slice(start, start + itemsPerPage);
        });
        return paginatedMemoriams;
    };

    unstable_noStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(initialMemoriams.length);
    const [memoriams, setMemoriams] = useState(paginatior(initialMemoriams)); // Use state for memoriams

    useEffect(() => {
        setTotalPages(memoriams.length);
    }, [memoriams]);

    function pageIncrement() {
        if (currentPage === totalPages) {
            setCurrentPage(totalPages);
            return;
        } else {
            setCurrentPage(currentPage + 1);
        }
    }
    function pageDecrement() {
        if (currentPage === 1) {
            setCurrentPage(1);
            return;
        }
        setCurrentPage(currentPage - 1);
    }
    function selectPage(page) {
        setCurrentPage(page);
    }

    const selectedStylePagination =
        "inline-flex items-center border-t-2 border-nhgRed px-4 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700";
    const notSelectedStylePagination =
        "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700";

    async function handleSave() {
        const updatedMemoriams = await memWallGet(); // Re-fetch the data
        setMemoriams(updatedMemoriams); // Update the state with the new data
    }

    return (
        <div className="">
            <AdminMemAdd onSave={handleSave} />{" "}
            {/* Add AdminMemAdd component */}
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {memoriams[currentPage - 1].map((record) => (
                    <AdminMemIndCons
                        key={record.id}
                        record={record}
                        onSave={handleSave}
                    />
                ))}
            </ul>
            <div className="bg-gray-200 pb-4 my-6 rounded-lg px-4 shadow-md">
                <nav className="flex items-center justify-between border-t border-white px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <a
                            onClick={pageDecrement}
                            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700"
                        >
                            <ArrowLongLeftIcon
                                aria-hidden="true"
                                className="mr-3 h-5 w-5 text-gray-900 hover:text-gray-700"
                            />
                            Previous
                        </a>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        {memoriams.map((_, index) => (
                            <div
                                className="hidden md:-mt-px md:flex"
                                key={index}
                            >
                                <a
                                    onClick={() => selectPage(index + 1)}
                                    className={
                                        index + 1 === currentPage
                                            ? selectedStylePagination
                                            : notSelectedStylePagination
                                    }
                                >
                                    {index + 1}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <a
                            onClick={pageIncrement}
                            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700"
                        >
                            Next
                            <ArrowLongRightIcon
                                aria-hidden="true"
                                className="ml-3 h-5 w-5 text-gray-900 hover:text-gray-700"
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}
