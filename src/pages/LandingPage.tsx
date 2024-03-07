import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import JOS from "jos-animation/dist/jos.js";
import Navbar from "../components/landing/navbar";
import Footer from "../components/landing/Footer";

onload = () => {
  const options = {
    debugMode: true,
    animation: "flip",
    duration: 0.7,
    rootMargin: "0% 0% 0% 0%",
  };
  JOS.init(options);
  //JOS.version();
};

function LandingPage() {
  useEffect(() => {
    JOS.refresh();
  }, []);

  // function toggleSwitch() {
  //   const month = document.querySelectorAll(".month");
  //   const annual = document.querySelectorAll(".annual");
  //   const toggleElement = document.getElementById(
  //     "toggle"
  //   ) as HTMLInputElement | null;
  //   for (let i = 0; i < month.length; i++) {
  //     if (toggleElement?.checked == true) {
  //       month[i].classList.add("hidden");
  //       annual[i].classList.remove("hidden");
  //     } else {
  //       month[i].classList.remove("hidden");
  //       annual[i].classList.add("hidden");
  //     }
  //   }
  // }

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Navbar />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          {/* Section Background */}
          <div className="relative z-10 overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-[#FFFCEF] md:rounded-bl-[50px] md:rounded-br-[50px] xl:rounded-bl-[100px] xl:rounded-br-[100px]">
            {/* Hero Section Space */}
            <div className="pt-28 md:pt-36 lg:pt-[150px] xxl:pt-[185px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Hero Area */}
                <div className="flex flex-col items-center justify-center">
                  {/* Hero Content Block */}
                  <div className="text-center">
                    <div className="jos mx-auto mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-[1076px]">
                      <h1 className="mb-6 font-Kanit text-[40px] font-medium leading-none -tracking-[1px] text-[#010D09] sm:text-5xl lg:text-6xl xl:text-[76px] xxl:text-[110px]">
                        Turbocharge Your Job Search with Kazifi
                      </h1>
                    </div>
                    <div className="jos mx-auto mb-8 max-w-xl lg:mb-[50px] lg:max-w-2xl xl:max-w-3xl xxl:max-w-[896px]">
                      <p className="mb-8">
                        Elevate your job search, application process, and
                        tracking. Transform how you apply for jobs with Kazifi's
                        intelligent automation and real-time insights, now
                        enhanced with a Chrome extension.
                      </p>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-center gap-6">
                      <a
                        href="/signup"
                        className="btn is-caribbean-green is-transparent btn-animation is-large is-rounded group inline-block"
                      >
                        <span>
                          Start a 15-day free trial
                          <i className="fa-regular fa-arrow-right ml-[10px] text-2xl leading-none" />
                        </span>
                      </a>
                      {/* <a
                        href="#"
                        className="btn is-outline-midnight-moss btn-animation is-large is-rounded group inline-block"
                      >
                        <span>Watch a demo</span>
                      </a> */}
                    </div>
                    <div className="mb-10 lg:mb-[60xp] xl:mb-20">
                      <span className="text-sm text-[#7F8995]">
                        No credit card is required.
                      </span>
                    </div>
                  </div>
                  {/* Hero Content Block */}
                  {/* Hero Image Block */}
                  {/* <div className="relative mx-auto max-w-[1076px] rounded-tl-[10px] rounded-tr-[10px]">
                    <img
                      src="https://masco-tailwind.netlify.app/assets/img/th-11/hero-img.jpg"
                      alt="hero-dashboard"
                      width={1076}
                      height={563}
                      data-jos_animation="zoom-in-down"
                    />
                  </div> */}
                  {/* Hero Image Block */}
                </div>
                {/* Hero Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Hero Section Space */}
            {/* Hero Background Shape */}
            <div className="absolute left-0 top-0 -z-10 h-auto w-full">
              <img
                src="assets/img/hero-10-bg-shape.svg"
                alt="hero-10-bg-shape"
                width={1600}
                height={650}
                className="h-auto w-full"
              />
            </div>
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content" id="about">
          {/* Section Spacer */}
          <div className="section-space-bottom">
            {/* Section Container */}
            <div className="container-default">
              <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                {/* Content Area Single */}
                <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-24 xl:grid-cols-[0.8fr_minmax(0,_1fr)] xl:gap-[135px]">
                  {/* Content Block Left */}
                  <div
                    className="jos order-1 md:order-2"
                    data-jos_animation="fade-right"
                  >
                    {/* Section Wrapper */}
                    <div>
                      {/* Section Block */}
                      <div className="mb-5">
                        <h2 className="font-Kanit text-4xl font-medium leading-none -tracking-[1px] lg:text-5xl xl:text-7xl xxl:text-[80px]">
                          Personalized Job Applications with Insightful
                          Analytics
                        </h2>
                      </div>
                      {/* Section Block */}
                    </div>
                    {/* Section Wrapper */}
                    <p>
                      Revolutionize your job hunt with our platform, blending AI
                      and an intuitive Chrome extension for swift, precise
                      applications. Experience speed with smart personalization,
                      ensuring your applications are not only standout but also
                      perfectly tailored. Fast, efficient, and brilliantly
                      human—turbocharge your path to the next big opportunity.
                    </p>
                    <div className="mt-8 lg:mt-[50px]">
                      <a
                        href="#"
                        className="btn is-caribbean-green is-transparent btn-animation is-large is-rounded group inline-block"
                      >
                        <span>
                          Try Our Browser Extension
                          <i className="fa-regular fa-arrow-right ml-[10px] text-2xl leading-none" />
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* Content Block Left */}
                  {/* Content Block Right */}
                  <div
                    className="jos order-2 md:order-1"
                    data-jos_animation="fade-left"
                  >
                    <div className="relative">
                      <img
                        src="assets/img/extension.png"
                        alt="content-img-1"
                        width={586}
                        height={586}
                        className="h-full w-96 mt-10"
                      />
                    </div>
                  </div>
                  {/* Content Block Right */}
                </div>
                {/* Content Area Single */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Features Section Start :::... */}
        <section className="section-features" id="feature">
          {/* Section Background */}
          <div className="rounded-[30px] bg-ColorMidnightMoss lg:rounded-[50px]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[900px]">
                    <div className="mb-5">
                      <h2 className="text-center font-Kanit text-4xl font-medium leading-none -tracking-[1px] text-white lg:text-5xl xl:text-7xl xxl:text-[80px]">
                        Kazifi's Unique Features: Simplifying Your Job Search
                        Experience
                      </h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Feature List */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay={0}>
                    <div className="rounded-[10px] bg-white/5 p-10 h-full">
                      <div className="mb-[30px] h-[70px] w-auto">
                        <img
                          src="assets/img/icons/icon-black-home-11-feature-1.svg"
                          alt="icon-black-home-11-feature-1"
                          width={79}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          Smart CV Tailoring
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          Use our browser plugin to seamlessly customize your
                          applications for each job, ensuring a perfect fit and
                          ATS compatibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.3">
                    <div className="rounded-[10px] bg-white/5 p-10 h-full">
                      <div className="mb-[30px] h-[70px] w-auto">
                        <img
                          src="assets/img/icons/icon-black-home-11-feature-2.svg"
                          alt="icon-black-home-11-feature-2"
                          width={78}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          Quick CV Download
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          Download your tailored CV and cover letter directly
                          from the plugin, streamlining your application process
                          without tab switching.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.6">
                    <div className="rounded-[10px] bg-white/5 p-10 h-full">
                      <div className="mb-[30px] h-[70px] w-auto">
                        <img
                          src="assets/img/icons/icon-black-home-11-feature-3.svg"
                          alt="icon-black-home-11-feature-3"
                          width={95}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          Match Score Feedback
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          Receive detailed feedback and actionable tips to
                          enhance your job application's match to requirements,
                          improving interview chances.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                  {/* Feature Item */}
                  <div className="jos" data-jos_delay="0.9">
                    <div className="rounded-[10px] bg-white/5 p-10 h-full">
                      <div className="mb-[30px] h-[70px] w-auto">
                        <img
                          src="assets/img/icons/icon-black-home-11-feature-4.svg"
                          alt="icon-black-home-11-feature-4"
                          width={67}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          CV Cover Variety
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          Choose from a vast collection of CV designs to express
                          your professional identity and stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Feature Item */}
                </div>
                {/* Feature List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Features Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className="section-faq">
          {/* Section Space */}
          <div className="section-space-bottom section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* FAQ Area */}
              <div className="grid items-center gap-y-10 lg:grid-cols-[1fr_minmax(0,_0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-32">
                {/* FAQ Block */}
                <div
                  className="jos relative z-10 flex justify-center"
                  data-jos_animation="fade-left"
                >
                  {/* Accordion List */}
                  <ul className="grid gap-6 rounded-[10px]">
                    {/* Accordion Item */}
                    <li className="accordion-item active overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-5">
                      {/* Accordion Header */}
                      <div className="accordion-header relative pr-8 font-Kanit text-[28px] font-medium leading-[1.28] -tracking-[0.5px] text-ColorMidnightMoss">
                        <button className="flex flex-1 gap-x-6 text-left">
                          <span className="inline-block h-10 w-auto">
                            <img
                              src="assets/img/icons/icon-green-black-duotone-faq-1.svg"
                              alt="icon-green-black-duotone-faq-1"
                              width={41}
                              height={40}
                            />
                          </span>
                          <span className="flex-1">Create a Free Account</span>
                        </button>
                        <span className="accordion-icon-4 absolute right-0 top-0 text-xl">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body ml-16 text-xl leading-[1.6] -tracking-[0.5px] text-ColorMidnightMoss">
                        <p className="pt-5">
                          Sign up for free, no credit card required. Start
                          transforming your job search on any device.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-5">
                      {/* Accordion Header */}
                      <div className="accordion-header relative pr-8 font-Kanit text-[28px] font-medium leading-[1.28] -tracking-[0.5px] text-ColorMidnightMoss">
                        <button className="flex flex-1 gap-x-6 text-left">
                          <span className="inline-block h-10 w-auto">
                            <img
                              src="assets/img/icons/icon-green-black-duotone-faq-2.svg"
                              alt="icon-green-black-duotone-faq-2"
                              width={45}
                              height={40}
                            />
                          </span>
                          <span className="flex-1">Customize with Ease</span>
                        </button>
                        <span className="accordion-icon-4 absolute right-0 top-0 text-xl">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body ml-16 text-xl leading-[1.6] -tracking-[0.5px] text-ColorMidnightMoss">
                        <p className="pt-5">
                          Personalize your job applications using our
                          drag-and-drop feature. No technical skills necessary.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-5">
                      {/* Accordion Header */}
                      <div className="accordion-header relative pr-8 font-Kanit text-[28px] font-medium leading-[1.28] -tracking-[0.5px] text-ColorMidnightMoss">
                        <button className="flex flex-1 gap-x-6 text-left">
                          <span className="inline-block h-10 w-auto">
                            <img
                              src="assets/img/icons/icon-green-black-duotone-faq-3.svg"
                              alt="icon-green-black-duotone-faq-3"
                              width={35}
                              height={40}
                            />
                          </span>
                          <span className="flex-1"> Launch Your Career </span>
                        </button>
                        <span className="accordion-icon-4 absolute right-0 top-0 text-xl">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body ml-16 text-xl leading-[1.6] -tracking-[0.5px] text-ColorMidnightMoss">
                        <p className="pt-5">
                          Submit applications and track their progress with
                          real-time insights. You're not just applying; you're
                          advancing.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                  </ul>
                  {/* Accordion List */}
                </div>
                {/* FAQ Block */}
                {/* Content Block */}
                <div className="jos" data-jos_animation="fade-right">
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-Kanit text-4xl font-medium leading-none -tracking-[1px] lg:text-5xl xl:text-7xl xxl:text-[80px]">
                        Start Your Journey with Kazifi
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    Kazifi makes creating standout job applications quick and
                    easy, designed for all skill levels. Tailor and track your
                    applications effortlessly with our intuitive interface,
                    drag-and-drop functionality, and pre-designed templates.
                  </p>
                </div>
                {/* Content Block */}
              </div>
              {/* FAQ Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: FAQ Section End :::... */}

        {/*...::: FAQ Section Start :::... */}
        <section className="section-faq" id="faq">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div className="jos mb-[60px] xl:mb-20">
                {/* Section Content Block */}
                <div className="mx-auto max-w-[746px]">
                  <div className="mb-5">
                    <h2 className="text-center font-Kanit text-4xl font-medium leading-none -tracking-[1px] text-ColorMidnightMoss lg:text-5xl xl:text-7xl xxl:text-[80px]">
                      Frequently Asked Questions (FAQs)
                    </h2>
                  </div>
                </div>
                {/* Section Content Block */}
              </div>
              {/* Section Content Wrapper */}
              {/* Accordion List */}
              <ul className="jos grid grid-cols-1 gap-6">
                {/* Accordion Item */}
                <li className="accordion-item active overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-[30px]">
                  {/* Accordion Header */}
                  <div className="accordion-header flex justify-between gap-6 font-Kanit text-xl font-medium leading-[1.28] -tracking-[1px] text-ColorMidnightMoss lg:text-2xl xl:text-[28px]">
                    <button className="flex-1 text-left">
                      How does Kazifi ensure my application passes ATS checks?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Kazifi optimizes your CV and cover letters for ATS, using
                      targeted keywords and formats to enhance visibility to
                      employers.
                    </p>
                  </div>
                  {/* Accordion Body */}
                </li>
                {/* Accordion Item */}
                {/* Accordion Item */}
                <li className="accordion-item overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-[30px]">
                  {/* Accordion Header */}
                  <div className="accordion-header flex justify-between gap-6 font-Kanit text-xl font-medium leading-[1.28] -tracking-[1px] text-ColorMidnightMoss lg:text-2xl xl:text-[28px]">
                    <button className="flex-1 text-left">
                      Can I apply directly to jobs on platforms like LinkedIn
                      and Indeed with Kazifi?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Yes, our Chrome extension allows for direct applications
                      on platforms such as LinkedIn and Indeed, integrating
                      Kazifi’s features into your browser for a seamless
                      process.
                    </p>
                  </div>
                  {/* Accordion Body */}
                </li>
                {/* Accordion Item */}
                {/* Accordion Item */}
                <li className="accordion-item overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-[30px]">
                  {/* Accordion Header */}
                  <div className="accordion-header flex justify-between gap-6 font-Kanit text-xl font-medium leading-[1.28] -tracking-[1px] text-ColorMidnightMoss lg:text-2xl xl:text-[28px]">
                    <button className="flex-1 text-left">
                      What makes Kazifi's job suitability scoring unique
                      regarding ATS compatibility?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Our scoring assesses both job requirement match and ATS
                      compatibility, offering insights to boost your
                      application's recruiter visibility.
                    </p>
                  </div>
                  {/* Accordion Body */}
                </li>
                {/* Accordion Item */}
                {/* Accordion Item */}
                <li className="accordion-item overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-[30px]">
                  {/* Accordion Header */}
                  <div className="accordion-header flex justify-between gap-6 font-Kanit text-xl font-medium leading-[1.28] -tracking-[1px] text-ColorMidnightMoss lg:text-2xl xl:text-[28px]">
                    <button className="flex-1 text-left">
                      Do I need technical expertise to use Kazifi and its Chrome
                      plugin?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      No, Kazifi and its Chrome plugin are designed for all
                      users, offering an intuitive interface and easy
                      drag-and-drop functionality for creating ATS-friendly
                      applications.
                    </p>
                  </div>
                  {/* Accordion Body */}
                </li>
                {/* Accordion Item */}
                {/* Accordion Item */}
                <li className="accordion-item overflow-hidden rounded-[10px] border border-ColorMidnightMoss p-[30px]">
                  {/* Accordion Header */}
                  <div className="accordion-header flex justify-between gap-6 font-Kanit text-xl font-medium leading-[1.28] -tracking-[1px] text-ColorMidnightMoss lg:text-2xl xl:text-[28px]">
                    <button className="flex-1 text-left">
                      How does the Quick CV Download feature work with the
                      Chrome plugin?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      This feature lets you instantly download your
                      ATS-optimized CV and cover letter while browsing job
                      listings, making your application process efficient.
                    </p>
                  </div>
                  {/* Accordion Body */}
                </li>
                {/* Accordion Item */}
              </ul>
              {/* Accordion List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: FAQ Section End :::... */}
      </main>
      <Footer />
    </div>
  );
}
export default LandingPage;
