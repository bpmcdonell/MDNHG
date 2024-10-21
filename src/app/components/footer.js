const navigation = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/groups/891383095941572",
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/groups/12991441/",
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
                <path
                    fillRule="evenodd"
                    d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="absolute bottom-0 min-w-full bg-white ">
            <div className="mx-auto max-w-full grid grid-cols-2 px-1 py-8 items-center lg:px-8">
                <div className="flex mr-16 md:mr-20 space-x-4 justify-self-end md:space-x-12 order-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon
                                className="h-12 w-12"
                                aria-hidden="true"
                            />
                        </a>
                    ))}
                </div>

                <div className="-order-1 md:mt-0">
                    <p className="text-[8px] md:text-xs leading-tight text-black">
                        &copy; 2024 Maryland Nurse Honor Guard
                    </p>
                    <p className="text-[8px] md:text-xs leading-tight text-black">
                        All rights reserved
                    </p>
                    <p className="text-[8px] md:text-xs leading-tight text-black">
                        Website by{" "}
                        <a
                            href="https://github.com/bpmcdonell"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Brian McDonell
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
