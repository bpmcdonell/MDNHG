"use server";
import AdminDonorCons from "./AdminDonorCons.jsx";
import { donorWallGet } from "../../actions.js";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache.js";

export default async function DonorWallAdmin() {
  unstable_noStore;
  const donors = await donorWallGet();

  return (
    <div className="min-h-screen  bg-[url('/images/IMG_5724.jpeg')] bg-no-repeat bg-center ">
      <div className="relative border-red-500 border-8">
        <div className="flex justify-center">
          <div className="z-10 pt-6 lg:w-full lg:max-w-4xl">
            <div className="relative px-6 lg:pr-4">
              <div className="flex mx-auto flex-col">
                <h1 className="text-3xl flex mx-auto justify-center text-center">
                  ADMIN Donor Wall
                </h1>
                <p className="font-bold text-base flex justify-center mb-5">
                  This is the Admin Donor Wall page. Here you can add, edit, and
                  delete donors.
                </p>
              </div>
              <div className="">
                {donors.length == 0 ? (
                  <div className="flex justify-center">
                    <p className="font-bold text-base flex justify-center mb-8">
                      No donors to display.
                    </p>
                  </div>
                ) : (
                  <Suspense fallback={<div>Loading...</div>}>
                    <AdminDonorCons initialDonors={donors} />
                  </Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
