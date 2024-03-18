"use client";

const Footer = () => {
  return (
    <>
      {" "}
      {/*...::: Footer Section Start :::... */}
      <footer className="section-footer">
        <div className="bg-ColorBlack">
          {/* Footer Area Top */}
          <div className="relative z-10">
            {/* Footer Top Spacing */}
            <div className="pb-[60px] pt-20 lg:pb-20 lg:pt-[100px] xl:pt-[120px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Wrapper */}
                <div className="flex flex-wrap items-center justify-center text-center lg:text-left lg:justify-between gap-8">
                  {/* Section Block */}
                  <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
                    <h2 className="text-white font-bold  text-5xl">
                      Ready to Revolutionize Your Job Search?
                    </h2>
                  </div>
                  {/* Section Block */}
                  <a
                    className="btn is-blue is-rounded btn-animation is-large group"
                    href="/signup"
                  >
                    <span>Begin Your Journey Here</span>
                  </a>
                </div>
                {/* Section Wrapper */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Top Spacing */}
            {/* CTA Shape */}
            <div className="absolute right-[9%] top-8 -z-10  xxl:block">
              <img
                src="assets/img/icons/cta-1-shape-1.svg"
                alt="cta-1-shape-1"
                width={115}
                height={130}
              />
            </div>
          </div>
          {/* Footer Area Top */}
          {/* Horizontal Line Separator */}
          <div className="horizontal-line bg-white" />
          {/* Horizontal Line Separator */}
          {/* Footer Area Center */}
          <div className="text-white">
            {/* Footer Center Spacing */}
            <div className="py-[60px] lg:py-20">
              {/* Section Container */}
              <div className="container-default">
                {/* Footer Widget List */}
                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                    {/* Footer Logo */}
                    <a href="/">
                      <img
                        src="assets/img/logo-light.svg"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </a>
                    {/* Footer Content */}
                    <div>
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px] mb-6">
                        Kazifi is a forward-thinking digital platform dedicated
                        to transforming the job application process. We
                        specialize in leveraging AI, intuitive Chrome
                        extensions, and insightful analytics to enhance user
                        experience, streamline applications, and maximize your
                        career opportunities with smart data utilization and
                        personalized application strategies.
                      </div>
                      {/* Footer Mail */}
                      {/* <a
                        href="mailto:yourdemo@email.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        info@kazifi.com
                      </a> */}
                      {/* Footer Social Link */}
                      <div className="flex flex-wrap gap-5">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                          aria-label="twitter"
                        >
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                          aria-label="facebook"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                          aria-label="instagram"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a
                          href="https://www.github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                          aria-label="github"
                        >
                          <i className="fa-brands fa-github" />
                        </a>
                      </div>
                    </div>
                    {/* Footer Content */}
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize">
                      Primary Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/about"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/services"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/pricing"
                        >
                          pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/signup"
                        >
                          Signup
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/login"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/404page"
                        >
                          404 Not found
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/lostpassword"
                        >
                          Password Reset
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item*/}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Resources
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          href="/legal"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Legal
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policy"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/terms"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                </div>
                {/* Footer Widget List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Center Spacing */}
          </div>
          {/* Footer Area Center */}
          {/* Footer Bottom */}
          <div className="bg-white bg-opacity-5">
            {/* Footer Bottom Spacing */}
            <div className="py-[18px]">
              {/* Section Container */}
              <div className="container-default">
                <div className="text-center text-white text-opacity-80">
                  © Copyright 2024, All Rights Reserved by Kazifi
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Bottom Spacing */}
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
      {/*...::: Footer Section End :::... */}
    </>
  );
};

export default Footer;
