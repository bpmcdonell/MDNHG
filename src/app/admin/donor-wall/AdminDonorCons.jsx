"use client";
import { useState, useEffect } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

import AdminDonorIndCons from "./AdminDonorIndCons.jsx";
import { donorWallGet } from "../../actions.js";
import AdminDonorAdd from "./AdminDonorAdd.jsx";

export default function AdminDonorCons({ initialDonors }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialDonors.length);
  const [donors, setDonors] = useState(initialDonors);

  useEffect(() => {
    setTotalPages(donors.length);
  }, [donors]);

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
    const updatedDonors = await donorWallGet();
    setDonors(updatedDonors);
  }

  return (
    <div className="">
      <AdminDonorAdd onSave={handleSave} />
      <p className="font-bold text-xl flex justify-center text-center mb-8 mx-auto bg-gray-200 shadow-md rounded-lg p-2">
        NOTE: When adding or editing a donor, the "Note Prefix" field can be
        left blank. When this is done, the wall will display the default
        message: "In memory of: (Message)". If the donation is in honor of
        someone, the "Message" field should be filled out with the title of the
        person being honored.
      </p>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {donors[currentPage - 1].map((record) => (
          <AdminDonorIndCons
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
            {donors.map((_, index) => (
              <div className="hidden md:-mt-px md:flex" key={index}>
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
