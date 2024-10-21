"use client";

import { getUserCS } from "firebase-nextjs/client/auth";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { LogoutButton } from "firebase-nextjs/client/components";
import { unstable_noStore } from "next/cache";

export default function Page() {
    unstable_noStore();
    const { currentUser } = getUserCS();
    if (!currentUser) {
        redirect("/login");
    } else {
        return (
            <div className="">
                <div className="text-right">
                    <p>
                        Welcome to the Admin Dashboard,{" "}
                        {currentUser?.displayName}!
                    </p>
                    <p>Signed in under: {currentUser?.email}</p>
                    <p>current UID: {currentUser?.uid}</p>
                    <div>
                        <LogoutButton>
                            <button className="self-end px-6 py-2.5 mx-6 my-2 text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                                Sign Out
                            </button>
                        </LogoutButton>
                    </div>
                </div>
                <div className="flex mx-auto">
                    {/* a set of buttons directing to different pages of the dashboard, one for management of the memWall, donorWall, Gallery */}
                    <Link href="/admin/mem-wall">
                        <button className="inline-flex items-center justify-center px-6 py-2.5  m-10 text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2">
                            Memorial Wall
                        </button>
                    </Link>
                    <Link href="/admin/donor-wall">
                        <button className="inline-flex items-center justify-center px-6 py-2.5  m-10  text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2">
                            Gratitude Wall
                        </button>
                    </Link>
                    <Link href="/admin/gallery">
                        <button className="inline-flex items-center justify-center px-6 py-2.5 m-10  text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2">
                            Gallery
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
