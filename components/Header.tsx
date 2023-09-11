import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
    return (
        <header>
            {/* Logo */}
            <div className="flex flex-col md:flex-row items-center p-2">
                <div className="md:w-1/3 mt-3 ml-5" >
                    <Image
                        src="https://sublimedatasys.com/wp-content/uploads/2019/08/wihte-logo.png"
                        alt="sublime-logo"
                        width={300}
                        height={100}
                        className="w-44 md:w-56 pb-4 md:pb-0 object-contain hover:scale-110 transform transition-transform duration-300"
                    />
                </div>

                {/* Navbar */}
                <div className="md:flex items-center mt-5 space-x-5 flex-1 justify-end w-full md:w-2/3 mr-4">
                    {/* list items */}
                    <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-5 md:space-y-0 text-center md:text-left">
                        <li className="nav-list_items text-lg">
                            <Link href="/">Services</Link>
                        </li>
                        <li className="nav-list_items text-lg">
                            <Link href="/blogs">Industries</Link>
                        </li>
                        <li className="nav-list_items text-lg">
                            <Link href="/contact">Company</Link>
                        </li>
                        <li className="nav-list_items text-lg">
                            <Link href="/faq">Blogs</Link>
                        </li>
                        <li className="nav-list_items text-lg">
                            <Link href="/faq">Contacts</Link>
                        </li>
                        <li className="nav-list_items text-lg">
                            <Link href="/faq">Free Consultation</Link>
                        </li>
                    </ul>
                </div>
            </div>


        </header>
    );
}

export default Header;
