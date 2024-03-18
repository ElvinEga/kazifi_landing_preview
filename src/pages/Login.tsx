"use client";

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-white dark:bg-gray-800 shadow flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <Link to="/">
                <img
                  alt="Kazifi"
                  className="w-56 mx-auto"
                  src="/assets/img/logo.png"
                />
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h5 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h5>
              <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                Welcome back! Please enter your details.
              </p>
              <div className="w-full flex-1 mt-5">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 justify-center focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-6">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Continue with Google</span>
                  </button>
                  <button className="w-full max-w-xs text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 justify-center focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-6">
                    <div className="bg-white p-2 rounded-full">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                        className="left-0 w-5"
                        alt="linkedin"
                      />
                    </div>
                    <span className="ml-4">Continue with LinkedIn</span>
                  </button>
                </div>
                <div className="mb-6 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or
                  </div>
                </div>
                <div className="mx-auto max-w-xs">
                  <form className="mt-8 space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmpassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <button className="w-full px-5 py-3 text-base font-medium text-center btn is-caribbean-green is-rounded is-large mt-8 ">
                      Login to your account
                    </button>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          aria-describedby="remember"
                          name="remember"
                          type="checkbox"
                          id="persist"
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="persist"
                          className="font-medium text-gray-500 dark:text-gray-400"
                        >
                          Remember this device
                        </label>
                      </div>
                      <button
                        data-hs-overlay="#hs-modal-recover-account"
                        className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        type="reset"
                      >
                        Lost Password?
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Create your account
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="hs-modal-recover-account"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Forgot password?
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Remember your password?
                        <button
                          className="ml-3 text-blue-600 decoration-2 hover:underline font-medium"
                          type="reset"
                          data-hs-overlay="#hs-modal-recover-account"
                        >
                          Sign in here
                        </button>
                      </p>
                    </div>
                    <div className="mt-5">
                      {/* Form */}
                      <form>
                        <div className="grid gap-y-4">
                          {/* Form Group */}
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm mb-2 dark:text-white"
                            >
                              Email address
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                              />
                            </div>
                            <p
                              className="text-xs text-red-600 mt-2"
                              id="email-error"
                            ></p>
                          </div>
                          {/* End Form Group */}
                          <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            data-hs-overlay="#hs-modal-recover-account"
                          >
                            Reset password
                          </button>
                        </div>
                      </form>
                      {/* End Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:flex hidden bg-[#FFFCEF]">
            <div className="mx-auto flex flex-col  py-24 justify-center items-center">
              <img
                className=" w-full object-cover object-center rounded"
                alt="hero"
                src="assets/img/hero-10-bg-shape.svg"
              />
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <h1 className="mb-6 font-Kanit text-[40px] font-medium leading-none -tracking-[1px] text-[#010D09] sm:text-5xl lg:text-6xl xl:text-[76px] xxl:text-[110px]">
                  Turbocharge Your Job Search with Kazifi
                </h1>
                <p className="mb-8 leading-relaxed text-gray-500 dark:text-grey-200">
                  Elevate your job search, application process, and tracking.
                  Transform how you apply for jobs with Kazifi's intelligent
                  automation and real-time insights, now enhanced with a Chrome
                  extension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
