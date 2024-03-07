function SignupPage() {
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
                  <div>
                    {/* Section Block */}
                    <div>
                      {/* Section Title */}
                      <h2 className="mb-[15px] text-7xl font-bold">
                        Create an account
                      </h2>
                      {/* Section Title */}
                      <p className="text-ColorBlack/80">
                        Enter the information below to create your account
                      </p>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                </div>
                {/* Sign-in Form Block */}
                <div className="jos xm:p-10 mt-10 rounded-[10px] border-2 border-ColorBlack bg-white p-[30px] lg:mt-[60px]">
                  <form action="https://formspree.io/f/mlqvzkyx" method="post">
                    {/* From Group List */}
                    <div className="flex flex-col gap-6">
                      {/* Form Group Item*/}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-[10px] block text-left font-semibold text-ColorBlack"
                        >
                          Enter your full name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your email"
                          className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          // required=""
                        />
                      </div>
                      {/* Form Group Item*/}
                      {/* Form Group Item*/}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-[10px] block text-left font-semibold text-ColorBlack"
                        >
                          Email address*
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          // required=""
                        />
                      </div>
                      {/* Form Group Item*/}
                      {/* Form Group Item*/}
                      <div>
                        <label
                          htmlFor="password"
                          className="mb-[10px] block text-left font-semibold text-ColorBlack"
                        >
                          Password*
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="**********"
                          className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          // required=""
                        />
                      </div>
                      {/* Form Group Item*/}
                      {/* Form Group Item*/}
                      <div className="flex flex-wrap items-center justify-between text-base text-ColorBlack/80">
                        <label
                          htmlFor="check"
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            name="check"
                            id="check"
                            className="h-5 w-5 rounded-[10px] border border-ColorBlack accent-ColorBlue"
                          />
                          <span>
                            I agree to the Terms and Conditions of Privacy
                          </span>
                        </label>
                      </div>
                      {/* Form Group Item*/}
                    </div>
                    {/* From Group List */}
                    <button
                      type="submit"
                      className="btn is-blue is-rounded is-large mt-8 w-full"
                    >
                      Create Account
                    </button>
                  </form>

                  <p className="mt-[15px] text-center text-base text-ColorBlack/80">
                    Already have an account?
                    <a
                      className="font-semibold text-ColorBlue/80 hover:text-ColorBlue"
                      href="/login"
                    >
                      Sign in now
                    </a>
                  </p>

                  <div className="flex w-full items-center gap-2 py-10 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                  </div>
                  <div className="flex flex-col gap-2 space-y-4">
                    <button
                      className="group h-16 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <img
                          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                          className="absolute left-0 w-8"
                          alt="google logo"
                        />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Google
                        </span>
                      </div>
                    </button>

                    <button
                      className="group h-16 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                               hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                          className="absolute left-0 w-8"
                          alt="Facebook logo"
                        />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Linkedin
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                {/* Sign-in Form Block */}
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
}
export default SignupPage;
