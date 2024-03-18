import Navbar from "../components/landing/navbar";
import Footer from "../components/landing/Footer";

function Pricing() {
  function toggleSwitch() {
    const month = document.querySelectorAll(".month");
    const annual = document.querySelectorAll(".annual");
    const toggleElement = document.getElementById(
      "toggle"
    ) as HTMLInputElement | null;
    for (let i = 0; i < month.length; i++) {
      if (toggleElement?.checked == true) {
        month[i].classList.add("hidden");
        annual[i].classList.remove("hidden");
      } else {
        month[i].classList.remove("hidden");
        annual[i].classList.add("hidden");
      }
    }
  }
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Navbar />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section className="section-breadcrumb  bg-[#FFFCEF]">
          {/* Breadcrumb Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="container-default">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Pricing</h1>
              </div>
            </div>
            {/* Section Container */}
            <div className="absolute left-0 top-0 -z-10 h-auto w-full">
              <img
                src="assets/img/hero-10-bg-shape.svg"
                alt="hero-10-bg-shape"
                width={1600}
                height={650}
                className="h-96 w-full"
              />
            </div>
          </div>
          {/* Breadcrumb Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Service Details Section Start :::... */}
        <section className="section-pricing" id="section-pricing">
          {/* Section Space */}
          <div className="section-space-bottom">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div className="jos mb-[60px] xl:mb-20">
                {/* Section Content Block */}
                <div className="mx-auto max-w-[746px]">
                  <div className="mb-5">
                    <h2 className="text-center font-Kanit text-4xl font-medium leading-none -tracking-[1px] text-ColorMidnightMoss lg:text-5xl xl:text-7xl xxl:text-[80px]">
                      Affordable plans to suit your needs
                    </h2>
                  </div>
                </div>
                {/* Section Content Block */}
              </div>
              {/* Section Content Wrapper */}
              {/* Pricing Area */}
              <div>
                {/* Pricing Button Block */}
                <div className="my-[50px] flex flex-row items-center justify-center gap-6">
                  <span className="text-base font-bold text-ColorMidnightMoss">
                    Monthly Billing
                  </span>
                  {/* Toggle Button */}
                  <label
                    htmlFor="toggle"
                    className="flex cursor-pointer items-center"
                  >
                    {/* toggle */}
                    <span className="relative h-[35px] w-[70px] rounded-[35px] bg-ColorMidnightMoss">
                      {/* hidden input */}
                      <input
                        id="toggle"
                        type="checkbox"
                        className="hidden"
                        onClick={toggleSwitch}
                      />
                      {/* dot */}
                      <span className="toggle_dot absolute h-[35px] w-[35px] rounded-full bg-ColorCaribbeanGreen transition-all duration-300" />
                    </span>
                  </label>
                  {/* Toggle Button */}
                  <span className="text-base font-bold text-ColorMidnightMoss">
                    Annual Billing
                  </span>
                </div>
                {/* Pricing Button Block */}
                {/* Pricing List */}
                <div className="grid items-center gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                  {/* Pricing Item */}
                  <div className="jos" data-jos_animation="flip-left">
                    <div className="rounded-[10px] bg-[#FFFCEF] p-7 xl:p-10">
                      {/* Pricing Content Top */}
                      <div className="text-center">
                        <span className="text-2xl font-bold text-ColorBlack">
                          Limited Plan
                        </span>
                        <div className="month text-[28px] font-normal leading-[2.85] text-ColorBlack">
                          $
                          <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">
                            15
                          </span>
                          /month
                        </div>
                        <div className="annual hidden text-[28px] font-normal leading-[2.85] text-ColorBlack">
                          $
                          <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">
                            120
                          </span>
                          /yearly
                        </div>
                        <span className="text-sm text-ColorBlack/70">
                          No credit card required
                        </span>
                      </div>
                      {/* Pricing Content Top */}
                      {/* Horizontal Line Separator */}
                      <div className="my-10 h-px w-full bg-ColorBlack/10" />
                      {/* Horizontal Line Separator */}
                      {/* Pricing Data list */}
                      <ul className="flex flex-col gap-y-4 font-semibold text-ColorMidnightMoss/80 xl:px-[18px]">
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          2 Limited sites available
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          1 GB storage per site
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Up to 5 pages per site
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Free SSL for custom domain
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Connect custom domain
                        </li>
                      </ul>
                      {/* Pricing Data list */}
                      <div className="mt-10 flex justify-center">
                        <button className="btn is-outline-midnight-moss is-transparent is-rounded is-large group flex w-full items-center justify-center border-2">
                          Purchase now
                          <i className="fa-regular fa-arrow-right ml-[10px] text-2xl leading-none" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Pricing Item */}
                  {/* Pricing Item */}
                  <div className="jos" data-jos_animation="flip-left">
                    <div className="rounded-[10px] bg-ColorMidnightMoss p-7 xl:p-10">
                      {/* Pricing Content Top */}
                      <div className="text-center">
                        <span className="text-2xl font-bold text-white">
                          Pro Plan
                        </span>
                        <div className="month text-[28px] font-normal leading-[2.85] text-white">
                          $
                          <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">
                            29
                          </span>
                          /month
                        </div>
                        <div className="annual hidden text-[28px] font-normal leading-[2.85] text-white">
                          $
                          <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">
                            300
                          </span>
                          /yearly
                        </div>
                        <span className="text-sm text-white/70">
                          No credit card required
                        </span>
                      </div>
                      {/* Pricing Content Top */}
                      {/* Horizontal Line Separator */}
                      <div className="my-10 h-px w-full bg-white/10" />
                      {/* Horizontal Line Separator */}
                      {/* Pricing Data list */}
                      <ul className="flex flex-col gap-y-4 font-semibold text-white/80 xl:px-[18px]">
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          2 Limited sites available
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          20 GB storage per site
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Up to 100 pages per site
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Free SSL for custom domain
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Connect custom domain
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Store Product Reviews
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Restore historical version
                        </li>
                      </ul>
                      {/* Pricing Data list */}
                      <div className="mt-10 flex justify-center">
                        <button className="btn is-caribbean-green is-transparent is-rounded is-large group flex w-full items-center justify-center border-2">
                          Purchase now
                          <i className="fa-regular fa-arrow-right ml-[10px] text-2xl leading-none" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Pricing Item */}
                  {/* Pricing Item */}
                  <div className="jos" data-jos_animation="flip-left">
                    <div className="rounded-[10px] bg-[#FFFCEF] p-7 xl:p-10">
                      {/* Pricing Content Top */}
                      <div className="text-center">
                        <span className="text-2xl font-bold text-ColorBlack">
                          VIP Plan
                        </span>
                        <div className="month text-[28px] font-normal leading-[2.85] text-ColorBlack">
                          $
                          <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">
                            59
                          </span>
                          /month
                        </div>
                        <div className="annual hidden text-[28px] font-normal leading-[2.85] text-ColorBlack">
                          $
                          <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">
                            660
                          </span>
                          /yearly
                        </div>
                        <span className="text-sm text-ColorBlack/70">
                          No credit card required
                        </span>
                      </div>
                      {/* Pricing Content Top */}
                      {/* Horizontal Line Separator */}
                      <div className="my-10 h-px w-full bg-ColorBlack/10" />
                      {/* Horizontal Line Separator */}
                      {/* Pricing Data list */}
                      <ul className="flex flex-col gap-y-4 font-semibold text-ColorMidnightMoss/80 xl:px-[18px]">
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Unlimited sites create
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          100 GB storage per site
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Unlimited pages per site
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Free SSL for custom domain
                        </li>
                        <li className="flex gap-x-3">
                          <span className="text-xl text-ColorCaribbeanGreen">
                            <i className="fa-solid fa-check" />
                          </span>
                          Unlimited bandwidth
                        </li>
                      </ul>
                      {/* Pricing Data list */}
                      <div className="mt-10 flex justify-center">
                        <button className="btn is-outline-midnight-moss is-transparent is-rounded is-large group flex w-full items-center justify-center border-2">
                          Purchase now
                          <i className="fa-regular fa-arrow-right ml-[10px] text-2xl leading-none" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Pricing Item */}
                </div>
                {/* Pricing List */}
              </div>
              {/* Pricing Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Service Details Section End :::... */}
      </main>

      <Footer />
    </div>
  );
}
export default Pricing;
