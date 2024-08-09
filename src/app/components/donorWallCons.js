"use client";
import { useState } from "react";
import Image from "next/image";
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function DonorWallCons({ donors }) {
    console.log(donors);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(donors.length);

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
            return;
        } else {
            setCurrentPage(currentPage - 1);
        }
    }
    function selectPage(page) {
        setCurrentPage(page);
    }

    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    const selectedStyle =
        "inline-flex items-center border-t-2 border-nhgRed px-4 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700";
    const notSelectedStyle =
        "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-base font-medium text-black hover:border-nhgRed hover:text-gray-700";

    return (
        <div className="">
            <ul className="grid grid-flow-row grid-cols-2 gap-6">
                {donors[currentPage - 1].map((donor) => (
                    <li
                        key={donor.name}
                        className="flex flex-row  pt-2 pl-2 pb-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-md justify-evenly "
                    >
                        <Image
                            src="/images/1337267copy.png"
                            width={90}
                            height={90}
                            className="aspect-square rounded-md"
                            priority={true}
                            alt="Flower Picture"
                        />
                        <div className="flex-1 justify-center">
                            <p className="text-base text-nowrap flex justify-center ">
                                {donor.name}
                            </p>

                            <p className="text-base text-nowrap flex justify-center m-2">
                                {formatDate(donor.date)}
                            </p>
                            {donor.notePrefix == undefined ? (
                                <p className="text-base text-nowrap flex justify-center">
                                    In memory of: {donor.note}
                                </p>
                            ) : (
                                <p className="text-base text-nowrap flex justify-center">
                                    {donor.notePrefix} {donor.note}
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="bg-gray-200 pb-4 mt-6 mb-14 rounded-lg px-4 shadow-md">
                <nav className="flex items-center justify-between border-t px-4 sm:px-0">
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
                        {donors.map((_, index) => (
                            <div className="hidden md:-mt-px md:flex">
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
    );
}
