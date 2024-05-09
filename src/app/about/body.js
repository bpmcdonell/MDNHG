import React from "react";
import Image from "next/image";

export default function AboutBody() {
	return (
		<aside className="px-10 flex flex-col">
			<h2 className="py-7 mx-auto">Who We Are:</h2>

			<div>
				<p className="p-1 text-base">
					The Maryland Nurse Honor Guard considers it a privilege to
					participate in the memorial services of fellow nurses to
					celebrate and recognize those who have dedicated their lives
					to the profession of nursing.
				</p>
				<p className="p-1 text-base">
					We are a group of active and retired professional nurses who
					volunteer our time to pay tribute to our fallen colleagues
					at their funeral or memorial service.
				</p>
				<div className="m-10 ">
					<img
						src="/images/MDNHGLogoWhite.png"
						alt="MDNHG Logo with a white background"
						className="hidden lg:flex lg:justify-center lg:mx-auto h-auto w-[400px]"
						quality={100}
					/>
				</div>
				<div className="flex justify-center lg:hidden">
					<Image
						src="/images/backTurnedCropped.jpg"
						alt="MDNHG Members at a service with their back turned"
						width={600}
						height={600}
						className="rounded-lg mb-10 shadow-md mx-auto"
						priority={true}
						quality={100}
					/>
				</div>
				<p className="p-1 text-base">
					Our service is steeped in nursing tradition and embraces the
					symbolism of our nursing uniform and presentation of a
					nursing lamp to the family after a Nightingale Tribute and
					Last Roll Call releasing the nurse from their duties with
					honor.
				</p>
				<p className="p-1 text-base">
					It is similar to a military tribute, and it is our mission
					to be able to provide this service free of charge to any
					Maryland resident who was a Registered Nurse, Licensed
					Practical Nurse, Nurse Practitioner or other nurse
					specialist in our state. The presence of the Nurse Honor
					Guard hopes to be a source of comfort to the family and a
					celebration of the nurse's service.
				</p>
				<p className="p-1 text-base">
					Also we offer Living Tributes to any nurse that may be near
					the end of their life so we may honor them in person and
					thank them for their service.
				</p>
			</div>
			<div className="flex flex-col">
				<h2 className="py-7 mx-auto">Get Involved!</h2>
				<p className="text-base">
					If you are a nurse and would like to join the Maryland
					Nurses Honor Guard, please sumbit your information on our{" "}
					<a
						href="/volunteer"
						className="text-nhgBlue underline hover:text-nhgRed"
					>
						Volunteer Page
					</a>{" "}
					and join our community on our{" "}
					<a
						href="https://www.facebook.com/groups/891383095941572"
						className="text-nhgBlue underline hover:text-nhgRed"
					>
						Facebook Group
					</a>
					.
				</p>
			</div>
		</aside>
	);
}
