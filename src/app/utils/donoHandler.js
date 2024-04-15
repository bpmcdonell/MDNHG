import Image from "next/image";

export default function DonoHandler() {
    return (
        <div className="mt-8">
            <Image
                src="/images/placeholder.jpg"
                width={500}
                height={700}
                className="object-fill h-[700px] w-[500px]"
            />
            <div className="flex justify-center">
                <p>^ donation handler tbd ^</p>
            </div>
        </div>
    );
}
