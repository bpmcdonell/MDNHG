"use client";
import Image from "next/image";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import { galleryImageDelete, galleryImageGet } from "../../actions";
import { useEffect } from "react";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UploadButton from "./UploadButton";

export default function Images(initialImages) {
    unstable_noStore();

    const [resources, setResources] = useState([initialImages]);

    async function deleteImage(public_id) {
        const response = await galleryImageDelete(public_id);
        if (response.result === "ok") {
            console.log("Image deleted successfully");
            setResources((oldResources) =>
                oldResources.filter(
                    (resource) => resource.public_id !== public_id
                )
            );
        } else {
            console.log("Image deletion failed");
        }
    }

    async function handleSave(newImage) {
        setResources((oldResources) => [newImage.info, ...oldResources]);
    }

    useEffect(() => {
        async function fetchImages() {
            const images = await galleryImageGet();
            setResources(images);
        }
        fetchImages();
    }, []);

    return (
        <div className="flex flex-col justify-center border-red-600 ">
            <div className="mx-auto justify-center mt-10">
                <UploadButton handleSave={handleSave} />
            </div>

            <div className="grid grid-cols-3 gap-8">
                <Suspense fallback={<div>Loading...</div>}>
                    {resources.map((resource) => (
                        <div key={resource.public_id}>
                            <button
                                onClick={deleteImage.bind(
                                    this,
                                    resource.public_id
                                )}
                                className="relative top-6 right-3 bg-red-600 rounded-md shadow-lg p-1 "
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>

                            <Image
                                key={resource.public_id}
                                src={resource.url}
                                alt={resource.public_id}
                                width={resource.width}
                                height={resource.height}
                                priority={false}
                                className="md:rounded-md mb-8 shadow-lg object-contain"
                            />
                        </div>
                    ))}
                </Suspense>
            </div>
        </div>
    );
}
