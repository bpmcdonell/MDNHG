"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = {
	Services: [
		{
			question: "How much does it cost to have a tribute?",
			answer: "Our services are free of charge to honor any professional nurse in Maryland.",
		},
		{
			question: "What is your service area?",
			answer: "We serve the entire state of Maryland, however our ability to attend a service depends on our availability of volunteers in the area on the date requested.",
		},
		{
			question: "Is this a religious ceremony?",
			answer: "We provide a tribute to the nurse which is non-denominational yet appropriate for a variety of reverent settings.",
		},
		{
			question:
				"Can you attend a Celebration of Life that is not a funeral service?",
			answer: "Yes, in addition to funerals we can attend any kind of memorial service or get-together in honor of a nurse.",
		},
		{
			question: "Can you go to the graveside?",
			answer: "Yes, we can attend graveside services, and can perform the tribute at graveside if you prefer.",
		},
		{
			question:
				"Can you perform a tribute sometime even if the funeral was last year?",
			answer: "Yes, please contact us to ask how we can serve you.",
		},
		{
			question: "Where in the service do you perform the tribute?",
			answer: "We can place the tribute anywhere in the service of your choice that seems fitting. We have performed the service at both the beginning of a service before the eulogy, and at the end of a service as a final tribute.",
		},
		{
			question: "What is a living tribute?",
			answer: "The service honors nurses who are still living with a ceremony showing appreciation of their nursing career. This may be in a home, nursing center, or hospice setting.",
		},
		{
			question:
				"If we already had a living tribute for our mother can we still have the Honor Guard come to her funeral?",
			answer: "Yes, our living tributes are to honor the nurse while alive, and our service at funerals is a different tribute to honor them after they pass.",
		},
		{
			question:
				"What if we are not having a memorial service or a funeral but would like a tribute for our loved one?",
			answer: "Please contact us for more information about providing you with a live or recorded video tribute.",
		},
		{
			question:
				"Can the Nurse Honor Guard attend organ donation walk at a hospital?",
			answer: "Yes, please ask us.",
		},
		{
			question: "Besides going to funerals what else does the NHG do?",
			answer: "The MDNHG is available for community events wherever we can support nurses and our mission. Please inquire if you are interested in requesting our attendance for hospital nursing week, nursing pinning, lamp lighting or graduation ceremonies, parades or holiday activities.",
		},
	],
	Donations: [
		{
			question: "Do I have to donate to request a service?",
			answer: "No, our services are free of charge, however we do appreciate considering donations for us to continue to provide this free service to all nurses in Maryland.",
		},
		{
			question: "What are donated funds used for?",
			answer: "All donations go back into our not-for-profit organization to cover our costs for tributes including for example supplies of flowers, candles, lamps, displays, and printing costs. Our volunteers provide their services for free and never accept payment or tips for their services.",
		},
		{
			question: "Can I donate in someone's memory?",
			answer: "Yes, We will place a marker on our Memorial Wall for your loved one if they were a nurse, and note your generosity on our Gratitude Wall.",
		},
		{
			question:
				"Is there something else that I can do for the MDNHG besides giving money?",
			answer: "Yes, Please find our Amazon gift registry ",
			linkText: "here",
			link: "https://www.amazon.com/registries/gl/guest-view/1YGEJMFIDWJSU",
			punctuation: ".",
		},
		{
			question: "Are you a non-profit organization?",
			answer: "We are currently a not-for-profit group but are applying for non-profit 501(c)(3) status in our future. If accepted our non-profit status will be retroactive to our initial organization date of 1/1/2024.",
		},
		{
			question: "Can I use my donation as a tax deduction?",
			answer: "Yes likely, but until we are a full non-profit 501(c)(3) organization please contact your tax advisor to inquire for certainty. We can provide you with a receipt.",
		},
	],
	Volunteer: [
		{
			question: "Do I have to be a nurse to volunteer?",
			answer: "Yes and no. To be a uniformed Nurse Honor Guard you must be an active or retired LPN, RN, NP or other advanced practice nurse specialty in good standing. However, if you are a non-nurse you may volunteer with us to support our programs or donate your talents like fundraising, communication, graphic design, marketing, social media, or join our Board of Directors.",
		},
		{
			question: "Would I have to attend meetings?",
			answer: "We have a monthly virtual meeting and hope to have good attendance but also offer communications and connectedness to our group through private group updates and news.",
		},
		{
			question: "Do I have to pay dues?",
			answer: "No. Many Nurse Honor Guard groups are self-funded by their volunteers. So far we do not charge dues, and hope that we will be able to use our donations to fund our costs without additional expense to our volunteers. Currently we appreciate that our nurse volunteers are purchasing their own uniforms and give of their time and transportation costs.",
		},
		{
			question: "How do I get a uniform?",
			answer: "Volunteers supply their own professional white nursing uniform dress or pants and shoes. Capes and caps are available for purchase from our MDNHG once you join.",
		},
		{
			question: "How much time does this take? What is the commitment?",
			answer: "There is no specific time commitment to be a volunteer, however we hope that nurses will be able to help us meet our mission to provide nurse presence for all requests to attend services of nurses that pass away. We hope to have enough volunteers across the state to share the ability to attend services when called upon.",
		},
		{
			question:
				"I would like to volunteer but I already work full time, nights, and have a family. I might not be able to do much.",
			answer: "We have lots of opportunities for volunteers to contribute in small ways in their own time and at their own pace without feeling that they are extending themselves too much. We understand nurses already give so much. Volunteering with us should feel like value added in your life by being connected to other nurses in a meaningful and enriching way.",
		},
		{
			question:
				"What are the physical requirements to perform tributes or other volunteer activities?",
			answer: "Volunteers must be able to  walk, stand for periods of time, climb several steps, and be able to help carry some items to participate in services.  However, we have other volunteer opportunities such as  coordinating services and fundraising activities which are not limited by physical abilities.",
		},
	],
};

export default function Example() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8 lg:py-10">
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<h2 className="flex text-3xl font-bold leading-10 justify-center tracking-tight text-gray-900">
						Frequently asked questions
					</h2>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						{Object.keys(faqs).map((section) => (
							<div key={section} className="pt-6">
								<h3 className="text-2xl font-semibold leading-7">
									{section}
								</h3>
								{faqs[section].map((faq) => (
									<Disclosure
										as="div"
										key={faq.question}
										className="pt-6"
									>
										{({ open }) => (
											<>
												<dt>
													<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
														<span className="text-base font-semibold leading-7">
															{faq.question}
														</span>
														<span className="ml-6 flex h-7 items-center">
															{open ? (
																<MinusSmallIcon
																	className="h-6 w-6"
																	aria-hidden="true"
																/>
															) : (
																<PlusSmallIcon
																	className="h-6 w-6"
																	aria-hidden="true"
																/>
															)}
														</span>
													</Disclosure.Button>
												</dt>
												<Disclosure.Panel
													as="dd"
													className="mt-2 pr-12"
												>
													<p className="text-base leading-7 text-gray-600">
														{faq.answer}
														{faq.link && (
															<a
																href={faq.link}
																className="text-blue-700 underline underline-offset-2 leading-6"
															>
																{faq.linkText}
															</a>
														)}
														{faq.punctuation}
													</p>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								))}
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
