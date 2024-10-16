"use client"
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function classNames(...classes: string[])  {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 sm:flex-initial">
          <a href="#" className="-m-1.5 p-1.5" onClick={handleNavClick}>
            <span className="sr-only">Your Company</span>
            <Image src="/image/newLogophysio.jpeg" alt="logo" height={200} width={200} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          <a href="#home" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#howitworks" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#content" className="text-sm font-semibold leading-6 text-gray-900">
            PhysioTherapy
          </a>
          <a href="#src/app/blogs" className="text-sm font-semibold leading-6 text-gray-900">
            Blogs
            </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#booking" className="text-sm font-semibold leading-6 text-gray-900">
            Book Now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5" onClick={handleNavClick}>
              <span className="sr-only">Your Company</span>
            </a>
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
                <a href="#home" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleNavClick}>
                  Home
                </a>
                <a href="#howitworks" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleNavClick}>
                  Features
                </a>
                <a href="#content" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleNavClick}>
                  Physiotherapy
                </a>
                <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleNavClick}>
                  Contact
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                {/* www.google.com */}
            </ul>
        </nav>
    );
};  
                </a>
              </div>
              <div className="py-6">
                <a href="#booking" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleNavClick}>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

