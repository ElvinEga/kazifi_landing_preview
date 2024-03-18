"use client";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="page-wrapper relative z-[1] bg-ColorOffWhite">
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Sign-in Section Start :::... */}
        <section className="section-signin">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              <div className="mx-auto max-w-[636px]">
                <div className="flex flex-col items-center justify-center text-center">
                  {/* Logo */}
                  <a className="mb-[60px] lg:mb-20 xl:mb-[100px]" href="/">
                    <img
                      src="assets/img/logo.png"
                      alt="logo-blue-dark"
                      width={109}
                      height={24}
                      className="h-16 w-full"
                    />
                  </a>
                  {/* Logo */}
                  {/* Section Wrapper */}
                  {/* Section Wrapper */}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Forgot password?
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Remember your password?
                        <Link
                          className="ml-3 text-blue-600 decoration-2 hover:underline font-medium"
                          type="reset"
                          data-hs-overlay="#hs-modal-recover-account"
                          to="/login"
                        >
                          Sign in here
                        </Link>
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
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold btn is-caribbean-green"
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
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Sign-in Section End :::... */}
      </main>
    </div>
  );
};

export default ForgotPassword;
