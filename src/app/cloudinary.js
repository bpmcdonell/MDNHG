import cloudinaryLib from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloudinary = cloudinaryLib.v2;

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    secure: true,
});

export default cloudinary;