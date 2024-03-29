import { v2 as cloudinary } from "cloudinary";
import Image from "next/image";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function GalleryBody() {
    const { resources } = await cloudinary.search.expression().execute();

    const dimensionFinder = (width, height) => {
        if (width > height) {
            return "landscape";
        } else if (width < height) {
            return "portrait";
        } else {
            return "square";
        }
    };

    return (
        <div className="conatiner mx-auto">
            <h1 className="text-3xl my-8 flex justify-center">Gallery</h1>
            <div className="flex justify-center mx-30">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                    {resources.map((resource) => (
                        <Image
                            key={resource.public_id}
                            src={resource.url}
                            alt={resource.public_id}
                            width={450}
                            height={300}
                            priority={false}
                            className="rounded-md mb-8 shadow-lg object-contain hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
