"use-client";

import Image from "next/image";

import {
    MagnifyingGlassIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

function Header() {
    return (
        <header>
            <div className="flex flex-col md:flex-row bg-gray-500/10 rounded-b-2xl items-center p-5 ">
                {/* logo */}
                <div
                    className="
                absolute
                top-0
                left-0
                w-full
                h-96
                bg-gradient-to-br
                from-pink-400
                to-[#0055D1]
                rounded-md
                filter
                blur-3xl
                opacity-50
                -z-50
                "/>
                <Image
                    src="https://links.papareact.com/c2cdd5"
                    alt="trello-logo"
                    width={300}
                    height={100}
                    className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
                />
                <div className="flex items-center space-x-5 flex-1 justify-end w-full">
                    {/* searchbox */}
                    <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 " />
                        <input
                            type="text"
                            className="flex-1  outline-none p-2"
                            placeholder="Search.."
                        />
                        <button type="submit" hidden>
                            Submit
                        </button>
                    </form>

                    <UserCircleIcon className="h-10 w-10 " />
                </div>
            </div>

            <div className="flex items-center justify-center px-5 py-2 md:py-5">
                <p className="flex items-center justify-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
                    <UserCircleIcon className="text-[#005DD1] inline-block h-10 w-10 mr-1" />
                    GPT is summarising your tasks for the day...
                </p>
            </div>

            {/* avatar */}
        </header>
    );
}

export default Header;
