import Images from "./Images.jsx";
import { unstable_noStore } from "next/cache.js";
import { Suspense } from "react";

export default async function GalleryAdmin() {
    unstable_noStore();

    return (
        <div className="border-red-500 border-8 ">
            <div className="">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="mx-6">
                        <Images />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}
