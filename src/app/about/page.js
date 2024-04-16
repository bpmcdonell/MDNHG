import AboutBody from "./body";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="lg:contianer lg:max-w-screen-2xl lg:mx-auto">
            <div className="bg-white max-w-full lg:grid lg:grid-cols-2">
                <div className="flex justify-center">
                    <AboutBody />
                </div>
                <div className="relative m-10">
                    <Image
                        src="/images/backTurnedCropped.jpg"
                        alt="MDNHG Members at a service with their back turned"
                        width={700}
                        height={700}
                        className="
                        rounded-lg 
                        shadow-2xl 
                        mx-auto"
                        priority={true}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
}
