"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-blue-900">
			<div className="relative bg-white">
				<div className="mx-auto max-w-7xl  bg-white">
					<div className="relative z-20 pt-14 lg:w-full lg:max-w-2xl ">
						<svg
							className="absolute inset-y-0 right-8 hidden h-full w-64 translate-x-1/2 transform fill-white lg:block"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="0,0 90,0 50,100 0,100" />
						</svg>

						<div className="relative px-6 py-32 sm:py-40 lg:py-56 lg:pr-4">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
								<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-nowrap text-gray-900 ">
									Nurses Honoring Nurses
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									We are a not-for-profit group of active and
									retired professional nurses who volunteer
									our time to pay tribute to our colleagues at
									their memorial services.
								</p>
								<div className="mt-4 flex items-center gap-x-6">
									<a
										href="/about"
										className="text-sm font-semibold underline underline-offset-2 leading-6 text-gray-900"
									>
										Learn more{" "}
										<span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="object-cover object-top  lg:aspect-auto lg:h-full lg:w-full"
						src="images/awaitingCopy3.jpg"
						alt="Nurses Honoring Nurses"
					/>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8 bg-blue-900">
				<div className="py-16 lg:py-24">
					<div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
						<div>
							<div className="mt-5">
								<h3 className="text-2xl font-bold text-white">
									Our Mission
								</h3>
								<p className="mt-1 text-lg leading-8 text-white">
									To honor nurse colleagues who have passed on
									and provide comfort to their families by
									providing a Nightingale Tribute ceremony.
								</p>
							</div>
							<div className="mt-10">
								<h3 className="text-2xl font-bold text-white">
									Our Vision
								</h3>
								<p className="mt-1 text-lg leading-8 text-white">
									To honor every nurse who passes in the State
									of Maryland.
								</p>
							</div>
						</div>
						<div>
							<Image
								src="/images/MDNHG-LogoNavy.png"
								alt="Maryland Nurses Honor Guard Logo"
								width={400}
								height={400}
							/>
						</div>
						<div>
							<div className="mt-5">
								<h3 className="text-2xl font-bold text-white">
									Our Purpose
								</h3>
								<p className="mt-1 text-lg leading-8 text-white">
									To recognize professional nurses and their
									contributions to society by honoring their
									life's work in a memorial service.
								</p>
							</div>
							<div className="mt-10">
								<h3 className="text-2xl font-bold text-white">
									Our Services
								</h3>
								<p className="mt-1 text-lg leading-8 text-white">
									We offer Nightingale Tributes and Living
									Tributes to honor nurses who have passed on
									or are near the end of their life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
