import { v2 as cloudinary } from "cloudinary";
import Image from "next/image";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function GalleryBody() {
    const { resources } = await cloudinary.search.expression().execute();

    return (
        <div>
            <h1>Gallery</h1>
            <div>
                {resources.map((resource) => (
                    <Image
                        key={resource.public_id}
                        src={resource.url}
                        alt={resource.public_id}
                        width={300}
                        height={300}
                    />
                ))}
            </div>
        </div>
    );
}
