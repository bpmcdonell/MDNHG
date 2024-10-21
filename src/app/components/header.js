"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Donate", href: "/donate" },
    { name: "Memorial Wall", href: "/memorial-wall" },
    { name: "Gratitude Wall", href: "/gratitude-wall" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 py-1 bg-white border-b-[1px] shadow-sm border-gray-100">
            <nav
                className="mx-10 flex min-w-screen-full justify-between items-center p-1"
                aria-label="Global"
            >
                <div>
                    <a
                        href="/"
                        className="flex flex-row items-center -m-1.5 p-1.5"
                    >
                        <Image
                            src="/images/MDNHG-LogoT-BG.png"
                            className=""
                            height={80}
                            width={80}
                            alt="Maryland Nurse Honor Guard Logo"
                        />
                        <span className="text-black text-sm md:text-xl lg:text-2xl font-bold m-3">
                            Maryland Nurse Honor Guard
                        </span>
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:space-x-4 xl:flex xl:space-x-6 2xl:flex 2xl:space-x-10 justify-end">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-base leading-6 font-medium text-black text-nowrap"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg my-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
