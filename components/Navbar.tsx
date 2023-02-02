import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import GetTheAppModal from "./GetTheAppModal";

interface NavBarProps {
  logo?: any;
}

const NavBar = ({ logo }: NavBarProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [getTheApp, setGetTheApp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      if (isNavOpen) {
        sidebar.classList.add("translate-x-0");
        sidebar.classList.remove("translate-x-full");
      } else {
        sidebar.classList.remove("translate-x-0");
        sidebar.classList.add("translate-x-full");
      }
    }
  }, [isNavOpen]);

  console.log("Pathname", router.pathname);

  return (
    <>
      <nav className="fixed top-0 z-20 flex flex-col w-full bg-white border sm:flex-row border-t-1 border-secondary6">
        <div className="w-full sm:h-[88px] h-[64px] px-6 sm:container mx-auto flex items-center sm:border-b-0 border-b border-secondary7">
          <div className="flex justify-center mr-0 font-extrabold text-white border sm:hidden md:block md:justify-start border-1 sm:mr-20 bold">
            <a
              className="text-white no-underline hover:text-white hover:no-underline"
              href="/"
            >
              <img
                width="198"
                height="35"
                src="/logo.png"
                alt="logo"
                className="object-cover"
              />
            </a>
          </div>
          <div className="content-center justify-between flex-grow w-full md:w-1/2">
            {isNavOpen && (
              <div
                className="fixed top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform bg-opacity-20 bg-primary"
                onClick={() => setIsNavOpen(false)}
              ></div>
            )}
            <div
              className={`sidebar right-0 sm:w-full sm:translate-x-0 translate-x-full w-[80%] ${
                isNavOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div
                className="flex justify-end px-4 pt-10 pb-8 sm:hidden"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-6.10352e-05"
                    y="1.51733"
                    width="2.1457"
                    height="28.9669"
                    rx="1.07285"
                    transform="rotate(-45 -6.10352e-05 1.51733)"
                    fill="#0D132F"
                  />
                  <rect
                    x="20.4827"
                    width="2.1457"
                    height="28.9669"
                    rx="1.07285"
                    transform="rotate(45 20.4827 0)"
                    fill="#0D132F"
                  />
                </svg>
              </div>
              <ul className="flex flex-col items-center flex-1 text-xl font-black list-reset sm:flex-row sm:text-base text-textIcon sm:items-start">
                <li
                  className="mb-4 sm:mb-0"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Link href="/seller">
                    <a
                      className={`inline-block ${
                        router.pathname === "/seller"
                          ? "text-primary font-bold "
                          : "border-white font-medium"
                      } py-2 px-4`}
                    >
                      Seller
                    </a>
                  </Link>
                </li>
                <li
                  className="mb-4 sm:mb-0"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Link href="/consumer">
                    <a
                      className={`inline-block ${
                        router.pathname === "/consumer"
                          ? "text-primary font-bold "
                          : "border-white font-medium"
                      } py-2 px-4`}
                    >
                      Consumer
                    </a>
                  </Link>
                </li>

                <li
                  className="mb-4 sm:ml-auto sm:mb-0"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Link href="/">
                    <a
                      className={`inline-block ${
                        router.pathname === "/"
                          ? "text-primary font-bold "
                          : "border-white font-medium"
                      } py-2 px-4`}
                    >
                      About us
                    </a>
                  </Link>
                </li>

                <li
                  className="mb-4 sm:hidden sm:ml-auto sm:mb-0"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Link href="/">
                    <a
                      className={`inline-block ${
                        router.pathname === "/contact-us"
                          ? "text-primary font-bold "
                          : "border-white font-medium"
                      } py-2 px-4`}
                    >
                      Contact us
                    </a>
                  </Link>
                </li>

                <li
                  className="mb-4 sm:hidden sm:ml-auto sm:mb-0"
                  onClick={() => setIsNavOpen(false)}
                >
                  <Link href="/">
                    <a
                      className={`inline-block ${
                        router.pathname === "/how-it-works"
                          ? "text-primary font-bold "
                          : "border-white font-medium"
                      } py-2 px-4`}
                    >
                      How it works
                    </a>
                  </Link>
                </li>

                <li
                  className="w-full px-4 mt-4 sm:w-auto sm:ml-6 sm:mt-0 sm:px-0"
                  onClick={() => setIsNavOpen(false)}
                >
                  <button
                    className="text-sm sm:w-[172px] w-full py-3 bg-primary text-textIcon7 rounded-full font-bold"
                    onClick={() => setGetTheApp(true)}
                  >
                    Get the App
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex justify-end sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                onClick={() => setIsNavOpen(true)}
              >
                <path
                  d="M2.37037 25.3333C1.79792 25.3333 1.33333 24.8687 1.33333 24.2963C1.33333 23.7238 1.79792 23.2592 2.37037 23.2592H29.3333C29.9058 23.2592 30.3704 23.7238 30.3704 24.2963C30.3704 24.8687 29.9058 25.3333 29.3333 25.3333H2.37037Z"
                  fill="#0D132F"
                />
                <path
                  d="M2.37037 17.037C1.79792 17.037 1.33333 16.5724 1.33333 16C1.33333 15.4275 1.79792 14.963 2.37037 14.963H29.3333C29.9058 14.963 30.3704 15.4275 30.3704 16C30.3704 16.5724 29.9058 17.037 29.3333 17.037H2.37037Z"
                  fill="#0D132F"
                />
                <path
                  d="M2.37037 8.74073C1.79792 8.74073 1.33333 8.27614 1.33333 7.70369C1.33333 7.13125 1.79792 6.66666 2.37037 6.66666H29.3333C29.9058 6.66666 30.3704 7.13125 30.3704 7.70369C30.3704 8.27614 29.9058 8.74073 29.3333 8.74073H2.37037Z"
                  fill="#0D132F"
                />
              </svg>
            </div>
          </div>
        </div>

        <ul className="flex justify-center w-full gap-10 py-5 bg-white border-b sm:hidden border-b-secondary7">
          <li>
            <Link href="/seller">
              <a
                className={`inline-block ${
                  router.pathname === "/seller"
                    ? "text-primary font-bold "
                    : "border-white font-medium"
                } border-b-4`}
              >
                Seller
              </a>
            </Link>
          </li>
          <li>
            <Link href="/consumer">
              <a
                className={`inline-block ${
                  router.pathname === "/consumer"
                    ? "text-primary font-bold "
                    : "border-white font-medium"
                } border-b-4`}
              >
                Consumer
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      {getTheApp && (
        <GetTheAppModal onClose={() => setGetTheApp(false)}>
            <div className='flex flex-col items-center justify-center w-full gap-4 px-6 text-center sm:px-10'>
                <h1 className="w-full text-3xl font-bold xl:text-4xl sm:text-2xl">Get Started with Der Lokal</h1>
                <div className='flex flex-col items-center gap-4'>
                    <p className="w-full text-sm">We'll send you a message with a link to download the app.</p>
                    <input className='w-full px-2 py-2 border border-primary focus:border-primary' placeholder='Enter your email or mobile number' />
                    <button className='w-full px-10 py-2 font-bold rounded-full bg-primary text-textIcon7'>Sign up for free</button>
                </div>
            </div>
        </GetTheAppModal>
      )}
    </>
  );
};

export default NavBar;
