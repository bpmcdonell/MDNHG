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
        const itemsPerPage = 14;
        const pages = Math.ceil(memoriams.length / itemsPerPage);
        const paginatedMemoriams = Array.from({ length: pages }, (_, index) => {
            const start = index * itemsPerPage;
            return memoriams.slice(start, start + itemsPerPage);
        });
        return paginatedMemoriams;
    };

    unstable_noStore();
    const initialPaginatedMemoriams = paginatior(initialMemoriams);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(
        initialPaginatedMemoriams.length
    );
    const [memoriams, setMemoriams] = useState(initialPaginatedMemoriams);

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

    // Helper to get page numbers with ellipses
    function getPageNumbers(current, total) {
        const maxPages = 10;
        let pages = [];
        if (total <= maxPages) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            let start = Math.max(2, current - 5);
            let end = Math.min(total - 1, current + 5);
            if (current <= 6) {
                start = 2;
                end = 11;
            } else if (current >= total - 5) {
                start = total - 10;
                end = total - 1;
            }
            pages.push(1);
            if (start > 2) pages.push("...");
            for (let i = start; i <= end; i++) {
                if (i > 1 && i < total) pages.push(i);
            }
            if (end < total - 1) pages.push("...");
            pages.push(total);
        }
        return pages;
    }

    const pageNumbers = getPageNumbers(currentPage, totalPages);

    async function handleSave() {
        const updatedMemoriams = await memWallGet(); // Re-fetch the data
        const paginatedData = paginatior(updatedMemoriams); // Paginate the new data
        setMemoriams(paginatedData); // Update the state with the paginated data
        setTotalPages(paginatedData.length); // Update total pages
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
                        {pageNumbers.map((num, idx) =>
                            num === "..." ? (
                                <span
                                    key={"ellipsis-" + idx}
                                    className="inline-flex items-center px-2 pt-4 text-base font-medium text-gray-500"
                                >
                                    ...
                                </span>
                            ) : (
                                <div
                                    key={num}
                                    className="hidden md:-mt-px md:flex"
                                >
                                    <a
                                        onClick={() => selectPage(num)}
                                        className={
                                            num === currentPage
                                                ? selectedStylePagination
                                                : notSelectedStylePagination
                                        }
                                    >
                                        {num}
                                    </a>
                                </div>
                            )
                        )}
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
