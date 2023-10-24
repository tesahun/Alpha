"use client";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

import MyForm from "./MyForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-0 w-screen z-50 overflow-hidden">
      <nav className="bg-gray-800">
        <div className="max-w-7xl px-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex-shrink-0">
                  <div className="bg-logo-bg bg-cover bg-center h-14 w-14 text-white text-lg font-semibold"></div>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/" className="navbarLi">
                  Home
                </Link>
                <Link href="/destiny" className="navbarLi">
                  Our-service
                </Link>
                <Link href="/about" className="navbarLi">
                  About
                </Link>
                <Link href="/faq" className="navbarLi">
                  FAQ
                </Link>

                <button
                  onClick={openModal}
                  className=" py-2 px-4 hover:bg-yellow-300 hover:border-transparent rounded border border-slate-200 text-slate-100 font-semibold hover:text-black"
                >
                  Applay now!
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {isOpen ? (
                  <AiOutlineClose size={25} />
                ) : (
                  <AiOutlineMenuUnfold size={25} />
                )}
              </button>
            </div>
          </div>
          <MyForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="navbarMo">
                Home
              </Link>
              <Link href="/destiny" className="navbarMo">
                Our-service
              </Link>
              <Link href="/about" className="navbarMo">
                About
              </Link>
              <Link href="/faq" className="navbarMo">
                faq
              </Link>
              <button
                onClick={openModal}
                className="py-2 px-4 hover:bg-yellow-300 hover:border-transparent rounded border border-slate-200 text-slate-100 font-semibold hover:text-black"
              >
                Applay now!
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
