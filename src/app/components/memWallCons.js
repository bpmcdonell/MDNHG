"use client";
import { useState } from "react";
import Image from "next/image";
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { unstable_noStore } from "next/cache";

export default function MemWallCons({ memoriams }) {
    //TODO: implement responsive amount of memoriams per page based on screen size

    unstable_noStore();

    const paginatior = (memoriams) => {
        const itemsPerPage = 8;
        const pages = Math.ceil(memoriams.length / itemsPerPage);
        const paginatedMemoriams = Array.from({ length: pages }, (_, index) => {
            const start = index * itemsPerPage;
            return memoriams.slice(start, start + itemsPerPage);
        });
        return paginatedMemoriams;
    };

    const [paginatedMemoriams, setPaginatedMemoriams] = useState(
        paginatior(memoriams)
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(paginatedMemoriams.length);

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

    function formatDate(date) {
        const formattedDate = new Date(`${date}T00:00:00`).toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
            }
        );

        return formattedDate;
    }

    const selectedStyle =
        "inline-flex items-center border-t-2 border-nhgRed px-4 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700";
    const notSelectedStyle =
        "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700";

    return (
        console.log(paginatedMemoriams),
        (
            <div className="">
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {paginatedMemoriams[currentPage - 1].map((record) => (
                        <li
                            key={record.name}
                            className="flex flex-row pt-2 pl-2 pb-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-md justify-evenly "
                        >
                            <div>
                                <Image
                                    src="/images/nurseLamp2.jpg"
                                    width={90}
                                    height={90}
                                    alt="Candle Picture"
                                    priority={true}
                                    className="rounded-md absolute"
                                />
                            </div>
                            <div className="flex-1 ml-[90px] h-[90px]">
                                <p className=" text-sm sm:text-base text-nowrap flex justify-center mt-4">
                                    {record.name}, {record.title}
                                </p>
                                <p className="text-sm sm:text-base text-nowrap flex justify-center mt-3">
                                    {formatDate(record.dob)} -{" "}
                                    {formatDate(record.dod)}
                                </p>
                            </div>
                        </li>
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
                            {paginatedMemoriams.map((_, index) => (
                                <div
                                    key={index}
                                    className="hidden md:-mt-px md:flex"
                                >
                                    <a
                                        onClick={() => selectPage(index + 1)}
                                        className={
                                            index + 1 === currentPage
                                                ? selectedStyle
                                                : notSelectedStyle
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
        )
    );
}
