import { memWallGet } from "../actions";
import Image from "next/image";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export default async function MemConstructor() {
	unstable_noStore();

	//for future:: This needs pagination

	const memoriams = await memWallGet();

	return (
		<div className="">
			<Suspense fallback={<div>Loading...</div>}>
				<ul className="grid grid-cols-1 lg:grid-cols-2">
					{memoriams.map((record) => (
						<li className="flex flex-row  pt-2 pl-2 pb-2 py-2 mb-6 w-auto bg-gray-200 rounded-lg shadow-md justify-evenly ">
							<div>
								<Image
									src="/images/nurseLamp2.jpg"
									width={90}
									height={90}
									alt="Candle Picture"
									priority={true}
									className="rounded-md absolute"
								/>
							</div>
							<div className="flex-1 ml-[90px] h-[90px]">
								<p className="text-base text-nowrap flex justify-center mt-4">
									{record.name}, {record.title}
								</p>
								<p className="text-base text-nowrap flex justify-center mt-3">
									{record.dob} - {record.dod}
								</p>
							</div>
						</li>
					))}
				</ul>
			</Suspense>
		</div>
	);
}
