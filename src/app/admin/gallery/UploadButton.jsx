"use client";

import { CldUploadWidget } from "next-cloudinary";
import { unstable_noStore } from "next/cache";

export default function UploadButton({ handleSave }) {
    unstable_noStore();
    return (
        <div>
            <CldUploadWidget
                uploadPreset="WidgetTest"
                onSuccess={(result) => {
                    console.log("Upload success", result);

                    handleSave(result);
                }}
            >
                {({ open }) => {
                    return (
                        <button
                            className="inline-flex items-center justify-center px-6 py-2.5  mx-10 text-base font-medium text-white bg-nhgBlue border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={() => open()}
                        >
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
}
