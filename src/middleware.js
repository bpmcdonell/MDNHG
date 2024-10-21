import FirebaseNextJSMiddleware from "firebase-nextjs/middleware/firebase-nextjs-middleware";

const options = {
    gateMode: "allowByDefault",
    privatePaths: [
        "/admin",
        "/admin/mem-wall",
        "/admin/donor-wall",
        "/admin/gallery",
    ],
};

export default function middleware(req) {
    return FirebaseNextJSMiddleware({ req, options });
}
