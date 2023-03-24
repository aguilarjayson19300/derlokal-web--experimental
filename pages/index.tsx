import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { hasCookie, setCookie } from "cookies-next";
import 'animate.css'

import Layout from "../components/Layout";
import Modal from "../components/Modal";
import CookiesConsentModal from "../components/CookiesConsentModal";
import { candidCollection, customerPromises, team } from "./data";

const About = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(
    hasCookie("localConsent")
  );

  const acceptCookie = () => {
    setShowCookieConsent(true);
    setCookie("localConsent", "true", {});
  };

  return (
    <Layout>
      <section className="flex flex-col items-center px-6 py-16 mx-auto border-b sm:container sm:py-28 border-secondary4">
        <h1 className="text-3xl font-bold text-center sm:text-4xl animate__animated animate__fadeInDown">
          A platform to support our local economy.
        </h1>
        <p className="mt-6 text-lg text-center sm:w-2/3 animate__animated animate__fadeInUp">
          We believe that everyone should have the opportunity to become
          self-employed, achieve financial success and enjoy fresh home-cooked
          food and products.
        </p>

        <div className="flex flex-col justify-between gap-10 sm:flex-row pt-14">
          <div className="p-8 bg-secondary7 sm:p-14 rounded-md animate__animated animate__fadeInDown">
            <div className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6175_3918)">
                  <path
                    d="M36.25 40.0017C35.56 40.0017 35 39.4417 35 38.7517V27.5017H5V38.7517C5 39.4417 4.44 40.0017 3.75 40.0017C3.06 40.0017 2.5 39.4417 2.5 38.7517V27.5017H1.25C0.56 27.5017 0 26.9417 0 26.2517C0 25.5617 0.56 25.0017 1.25 25.0017H2.5V14.3367C0.906667 12.9117 0 10.8917 0 8.75167C0 8.72833 0.00166667 8.69667 0.005 8.67C0.00666667 8.64333 0.01 8.61833 0.0133333 8.59333C0.0216667 8.53667 0.03 8.48667 0.0433333 8.43667C0.0483333 8.41167 0.055 8.38333 0.0616667 8.36333L1.99667 2.565C2.50667 1.03167 3.93667 0 5.55333 0H34.4483C36.065 0 37.495 1.03167 38.0067 2.565L39.9367 8.355C39.945 8.37833 39.9517 8.40667 39.9567 8.43333C39.97 8.48 39.98 8.53333 39.9867 8.58667C39.99 8.61167 39.9933 8.64 39.995 8.67C39.9983 8.69833 40 8.73 40 8.75167C40 10.8933 39.0933 12.9117 37.5 14.3367V25.0017H38.75C39.44 25.0017 40 25.5617 40 26.2517C40 26.9417 39.44 27.5017 38.75 27.5017H37.5V38.7517C37.5 39.44 36.94 40.0017 36.25 40.0017ZM35 25.0017V15.8183C34.1983 16.105 33.36 16.2517 32.5 16.2517C29.9717 16.2517 27.6267 14.96 26.25 12.8817C24.8733 14.96 22.5283 16.2517 20 16.2517C17.4717 16.2517 15.1267 14.96 13.75 12.8817C12.3733 14.96 10.0283 16.2517 7.5 16.2517C6.64 16.2517 5.80167 16.1067 5 15.8183V25.0017H35ZM27.66 10.0017C28.2183 12.1817 30.1883 13.7517 32.5 13.7517C34.8117 13.7517 36.7817 12.1817 37.34 10.0017H27.66ZM15.16 10.0017C15.7183 12.1817 17.6883 13.7517 20 13.7517C22.3117 13.7517 24.2817 12.1817 24.84 10.0017H15.16ZM2.66 10.0017C3.21833 12.1817 5.18833 13.7517 7.5 13.7517C9.81167 13.7517 11.7817 12.1817 12.34 10.0017H2.66ZM37.015 7.50167L35.6333 3.35667C35.4633 2.845 34.9867 2.50167 34.4467 2.50167H27.5V7.50167H37.015ZM25 7.50167V2.50167H15V7.50167H25ZM12.5 7.50167V2.50167H5.55333C5.015 2.50167 4.53833 2.845 4.36833 3.35667L2.985 7.50167H12.5Z"
                    fill="#0D132F"
                  />
                  <path
                    d="M11.2517 40.0017C11.1167 40.0017 10.9817 39.98 10.8533 39.935C10.5383 39.83 10.2817 39.6083 10.1333 39.31C9.985 39.0117 9.96 38.6717 10.065 38.355L12.0167 32.5H10C9.31 32.5 8.75 31.94 8.75 31.25C8.75 30.56 9.31 30 10 30H17.5C18.19 30 18.75 30.56 18.75 31.25C18.75 31.94 18.19 32.5 17.5 32.5H15.485L17.4367 38.355C17.5417 38.6717 17.5183 39.0117 17.3683 39.31C17.2183 39.6083 16.9617 39.8317 16.645 39.9367C16.5183 39.98 16.385 40.0017 16.25 40.0017C15.7117 40.0017 15.235 39.6583 15.065 39.1467L13.75 35.2033L12.435 39.1467C12.265 39.6583 11.79 40.0017 11.2517 40.0017Z"
                    fill="#C8353E"
                  />
                  <path
                    d="M25 40.0015C24.865 40.0015 24.7333 39.9798 24.605 39.9365C24.2883 39.8315 24.0317 39.6081 23.8817 39.3098C23.7333 39.0115 23.7083 38.6731 23.8133 38.3565L25.765 32.5015H23.75C23.06 32.5015 22.5 31.9415 22.5 31.2515C22.5 30.5615 23.06 30.0015 23.75 30.0015H31.25C31.94 30.0015 32.5 30.5615 32.5 31.2515C32.5 31.9415 31.94 32.5015 31.25 32.5015H29.235L31.1867 38.3565C31.2917 38.6731 31.2683 39.0131 31.1183 39.3115C30.9683 39.6098 30.7117 39.8331 30.395 39.9381C30.2683 39.9815 30.135 40.0031 30 40.0031C29.4617 40.0031 28.985 39.6598 28.815 39.1481L27.5 35.2031L26.185 39.1465C26.015 39.6581 25.5383 40.0015 25 40.0015Z"
                    fill="#C8353E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6175_3918">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h4 className="mb-6 ml-6 text-xl font-bold">Vendors</h4>
            </div>
            <p>
              Our partners create an amazing experience that customers come back
              for time and time again. As a key part of platform, our sellers
              drive and add creativity to our platforms. We work closely with
              our partners to support their small business.
            </p>
          </div>

          <div className="p-8 bg-secondary7 sm:p-14 rounded-md animate__animated animate__fadeInUp">
            <div className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6175_3925)">
                  <path
                    d="M18.75 29.998C18.4117 29.998 18.0833 29.858 17.8483 29.6146L12.515 24.058C11.19 22.7263 10.865 20.688 11.7167 18.993C12.465 17.4947 13.9767 16.563 15.6583 16.563C16.3433 16.563 17.0033 16.718 17.6183 17.0263C18.0367 17.2363 18.4183 17.5097 18.7517 17.8397C19.58 17.018 20.6783 16.5647 21.8483 16.563C23.025 16.563 24.13 17.0197 24.96 17.8497C25.295 18.183 25.5733 18.5697 25.7867 18.9963C26.635 20.693 26.3033 22.7363 24.9617 24.078L19.6533 29.6163C19.4167 29.858 19.0883 29.998 18.75 29.998ZM15.655 19.0613C14.9283 19.0613 14.275 19.4647 13.9517 20.1113C13.5833 20.8463 13.725 21.728 14.3033 22.3097L18.75 26.943L23.175 22.3263C23.7683 21.7313 23.9167 20.8463 23.55 20.1113C23.4583 19.928 23.3383 19.7613 23.1933 19.6163C22.8333 19.258 22.3567 19.0597 21.85 19.0597C21.3417 19.0597 20.865 19.258 20.5067 19.6163L19.6367 20.4863C19.4 20.723 19.0867 20.853 18.7533 20.853C18.42 20.853 18.105 20.723 17.87 20.4863L17 19.6163C16.8533 19.4713 16.6867 19.3497 16.5033 19.258C16.235 19.128 15.95 19.0613 15.655 19.0613Z"
                    fill="#C8353E"
                  />
                  <path
                    d="M33.7468 38.7482C33.0568 38.7482 32.4968 38.1883 32.4968 37.4982V25.0632C32.4951 25.0416 32.4951 25.0199 32.4951 24.9982C32.4951 24.9766 32.4951 24.9549 32.4968 24.9332V3.74825C32.4951 2.73325 33.1018 1.82658 34.0418 1.43825C34.3484 1.31158 34.6684 1.24658 34.9968 1.24658C35.3251 1.24658 35.6485 1.31158 35.9551 1.43825C36.5718 1.69325 37.0518 2.17492 37.3068 2.79158C40.0301 9.36658 40.0135 17.2749 40.0001 23.6299V23.7566C39.9968 25.1316 38.8751 26.2499 37.5001 26.2499H34.9968V37.4999C34.9968 38.1882 34.4368 38.7482 33.7468 38.7482ZM37.5001 23.7482V23.6266C37.5135 17.4949 37.5285 9.86491 34.9985 3.75158L34.9968 23.7482H37.5001Z"
                    fill="#0D132F"
                  />
                  <path
                    d="M3.75 38.749C3.06 38.749 2.5 38.189 2.5 37.499V16.0357C1.025 15.5124 0 14.099 0 12.499V2.49902C0 1.80902 0.56 1.24902 1.25 1.24902C1.94 1.24902 2.5 1.81069 2.5 2.49902V12.499C2.5 13.189 3.06 13.749 3.75 13.749C4.44 13.749 5 13.189 5 12.499V2.49902C5 1.80902 5.56 1.24902 6.25 1.24902C6.94 1.24902 7.5 1.81069 7.5 2.49902V12.499C7.5 14.099 6.475 15.5124 5 16.034V37.499C5 38.189 4.44 38.749 3.75 38.749Z"
                    fill="#0D132F"
                  />
                  <path
                    d="M10.0001 15.5229C9.6834 15.5229 9.38007 15.4029 9.1484 15.1879C8.9034 14.9612 8.7634 14.6512 8.75174 14.3179C8.7384 13.9829 8.8584 13.6662 9.08507 13.4212C9.29507 13.1962 9.51674 12.9729 9.7434 12.7612C12.1917 10.4795 15.3884 9.22119 18.7451 9.22119C22.4034 9.22119 25.9284 10.7512 28.4151 13.4195C28.6417 13.6645 28.7617 13.9829 28.7501 14.3162C28.7384 14.6495 28.5967 14.9595 28.3517 15.1862C28.1201 15.4029 27.8167 15.5212 27.5001 15.5212C27.1551 15.5212 26.8217 15.3762 26.5851 15.1229C24.5701 12.9595 21.7117 11.7195 18.7451 11.7195C16.0251 11.7195 13.4334 12.7379 11.4467 14.5879C11.2684 14.7595 11.0884 14.9395 10.9151 15.1262C10.6784 15.3779 10.3451 15.5229 10.0001 15.5229Z"
                    fill="#0D132F"
                  />
                  <path
                    d="M18.7617 35.78C18.6033 35.78 18.445 35.7767 18.285 35.7717C14.7583 35.6483 11.4917 34.1567 9.08666 31.575C8.61666 31.0717 8.64499 30.2783 9.14832 29.8083C9.37999 29.5917 9.68166 29.4717 9.99999 29.4717C10.345 29.4717 10.6783 29.6167 10.915 29.87C12.865 31.9633 15.515 33.1717 18.3733 33.2733C18.505 33.2783 18.6367 33.28 18.7683 33.28C21.4767 33.28 24.0633 32.2583 26.0517 30.405C26.235 30.2333 26.415 30.055 26.585 29.8717C26.8217 29.6183 27.155 29.4733 27.5 29.4733C27.8167 29.4733 28.12 29.5933 28.3517 29.8083C28.855 30.2783 28.8833 31.07 28.415 31.575C28.2033 31.8017 27.9817 32.0233 27.755 32.235C25.3017 34.5217 22.1083 35.78 18.7617 35.78Z"
                    fill="#0D132F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6175_3925">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h4 className="mb-6 ml-6 text-xl font-bold">Consumers</h4>
            </div>
            <p>
              Our next generation of e-commerce, delivering small quantities of
              goods to customers’ doors almost instantly. As speed and
              convenience becomes ever more important to customers, Der Lokal is
              pioneering fresh home-cooked delivery.
            </p>
          </div>
        </div>
      </section>

      {showTeam && (
        <Modal onClose={() => setShowTeam(false)}>
          <div className="flex flex-col items-center justify-center w-full px-6 sm:px-32">
            <h2 className="text-2xl font-bold">
              Our passionate & dedicated team
            </h2>

            <div className="grid w-full grid-cols-2 gap-8 mt-12 lg:grid-cols-3 justify-items-center sm:mt-16">
              {team.map((member, i) => (
                <div key={i}>
                  <img
                    src={member.photo}
                    alt="me"
                    className="object-cover mb-4 rounded-lg"
                  />
                  <div className="text-base font-bold">{member.name}</div>
                  <div className="text-xs">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}

      <section className="flex flex-col items-center px-6 py-16 mx-auto border-b sm:container sm:py-28 border-secondary4">
        <h1 className="text-3xl font-bold text-center sm:text-4xl">
          We aim higher
        </h1>
        <p className="mt-6 text-lg text-center sm:w-2/3">
          We’re a team of designers, and engineers, but share one mission. Our
          strong values connect and drive us forward every day to deliver great
          solutions and amazing experience to our sellers and consumers.
        </p>
        <button
          className="px-8 py-3 mt-8 bg-white border rounded-full text-primary border-primary hover:bg-primary hover:text-white"
          onClick={() => setShowTeam(true)}
        >
          Meet the team
        </button>
        <div className="grid w-full grid-cols-2 gap-10 mt-12 lg:grid-cols-3 justify-items-center sm:mt-16">
          {candidCollection.map((candid, i) => (
            <img
              key={i}
              src={candid}
              alt="me"
              className="object-cover mb-4 rounded-lg sm:mb-6 w-"
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-10 md:py-16 mx-auto sm:container sm:py-28">
        <h1 className="text-2xl font-bold text-center sm:text-4xl">
          Our commitment to you
        </h1>

        <div className="flex flex-col justify-between md:gap-20 sm:flex-row text-center">
          {customerPromises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center justify-center mt-14"
            >
              <div dangerouslySetInnerHTML={{ __html: promise.icon }}></div>
              <div className="mt-2 mb-4 text-xl font-bold text-textIcon">
                {promise.title}
              </div>
              <ReactMarkdown className="text-textIcon">
                {promise.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-16 sm:py-28 bg-primary">
        <h1 className="text-2xl font-bold text-center text-white sm:text-3xl">
          Sign up for free with Der Lokal in seconds.
        </h1>
        <p className="mt-6 text-lg text-center text-white sm:w-2/3">
          Join us empower and support local communities
        </p>

        <div className="flex flex-col justify-center w-full gap-2 mt-8 sm:flex-row">
          <button className="px-8 py-3 bg-white rounded-full text-primary hover:bg-success2 hover:text-white">
            I'm a Vendor
          </button>
          <button className="px-8 py-3 bg-white rounded-full text-primary hover:bg-success2 hover:text-white">
            I'm a Customer
          </button>
        </div>
      </section>

      {showTeam && (
        <Modal onClose={() => setShowTeam(false)}>
          <div className="flex flex-col items-center justify-center w-full px-6 sm:px-32">
            <h2 className="text-2xl font-bold">
              Our passionate & dedicated team
            </h2>

            <div className="grid w-full grid-cols-2 gap-8 mt-12 lg:grid-cols-3 justify-items-center sm:mt-12">
              {team.map((member) => (
                <div key={member.id}>
                  <img
                    src={member.photo}
                    alt="me"
                    className="object-cover mb-4 rounded-lg"
                  />
                  <div className="text-base font-bold">{member.name}</div>
                  <div className="text-xs">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}

      {!showCookieConsent && (
        <CookiesConsentModal>
          <div className="flex flex-col gap-3 text-wrap">
            <h1 className="text-xl font-bold xl:text-2xl sm:text-xl">
              Cookies
            </h1>
            <p className="text-xs">
              We use cookies to ensure you get the best experience on our
              website.{" "}
              <Link href="/learn-more">
                <a className="text-primary">Learn more</a>
              </Link>
            </p>
            <div className="flex justify-end">
              <button
                className="justify-end px-8 py-3 text-white rounded-full bg-primary text-2xs"
                onClick={() => acceptCookie()}
              >
                Accept
              </button>
            </div>
          </div>
        </CookiesConsentModal>
      )}
    </Layout>
  );
};

export default About;
