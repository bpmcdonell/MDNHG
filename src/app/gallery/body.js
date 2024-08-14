import Image from "next/image";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import { galleryImageGet } from "../actions";

export default async function GalleryBody() {
    unstable_noStore();

    const resources = await galleryImageGet();
    // can we add a modal popout for the images?
    return (
        <div className="conatiner mx-8">
            <h1 className="text-3xl my-8 flex justify-center">Gallery</h1>
            <div className="flex justify-center">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                    <Suspense fallback={<div>Loading...</div>}>
                        {resources.map((resource) => (
                            <Image
                                key={resource.public_id}
                                src={resource.url}
                                alt={resource.public_id}
                                width={450}
                                height={300}
                                priority={false}
                                className="md:rounded-md mb-8 shadow-lg object-contain hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
                            />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
