function LandingPage() {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <header
        className="site-header site-header--sticky mobile-sticky-enable is--white py-3"
        id="sticky-menu"
      >
        <div className="container-default">
          <div className="flex items-center justify-between gap-x-8">
            {/* Header Logo */}
            <a className="" href="/">
              <img
                src="assets/img/logo.png"
                alt="Masco"
                width={109}
                height={24}
              />
            </a>
            {/* Header Logo */}
            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className="menu-overlay" />
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item nav-item-has-children">
                    <a className="nav-link-item drop-trigger" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a
                      href="#section-about"
                      className="nav-link-item drop-trigger"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a
                      href="#section-feature"
                      className="nav-link-item drop-trigger"
                    >
                      Feature
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a
                      href="#section-pricing"
                      className="nav-link-item drop-trigger"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a
                      href="#section-testimonial"
                      className="nav-link-item drop-trigger"
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Navigation */}
            {/* Header User Event */}
            <div className="flex items-center gap-6">
              <a
                className="btn-text hidden hover:text-ColorCaribbeanGreen sm:inline-block"
                href="/login"
              >
                Login
              </a>
              <a
                className="btn is-caribbean-green is-transparent is-rounded btn-animation group hidden sm:inline-block"
                href="/signup"
              >
                <span>Sign up free</span>
              </a>
              {/* Responsive Offcanvas Menu Button */}
              <div className="block lg:hidden">
                <button
                  id="openBtn"
                  className="hamburger-menu mobile-menu-trigger"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
            {/* Header User Event */}
          </div>
        </div>
      </header>
      {/*...::: Header End :::... */}
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
                        Create a stunning website in minutes
                      </h1>
                    </div>
                    <div className="jos mx-auto mb-8 max-w-xl lg:mb-[50px] lg:max-w-2xl xl:max-w-3xl xxl:max-w-[896px]">
                      <p className="mb-8">
                        Masco is a simple, easy, and powerful website editor
                        software with all the elements you need to create a
                        stunning website in just a few minutes. Everyone can
                        create a website with no special skills required.
                      </p>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-center gap-6">
                      <a
                        href="#"
                        className="btn is-caribbean-green is-transparent btn-animation is-large is-rounded group inline-block"
                      >
                        <span>
                          Start a 15-day free trial
                          <i className="fa-regular fa-arrow-right ml-[10px] text-2xl leading-none" />
                        </span>
                      </a>
                      <a
                        href="#"
                        className="btn is-outline-midnight-moss btn-animation is-large is-rounded group inline-block"
                      >
                        <span>Watch a demo</span>
                      </a>
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
                src="https://masco-tailwind.netlify.app/assets/img/elements/hero-10-bg-shape.svg"
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
        {/*...::: Brand Section Start :::... */}
        <div className="section-brand">
          <div className="jos">
            {/* Section Space */}
            <div className="py-[60px] md:py-20 lg:py-[100px]">
              {/* Section Container */}
              <div className="container-default">
                <div className="mx-auto mb-10 max-w-[80%] text-center text-xl font-semibold leading-[1.4] opacity-70 md:mb-16 lg:mb-20 lg:max-w-2xl">
                  From start-ups to Fortune 500, we partner with brands of all
                  sizes
                </div>
                {/* Brand Slider */}
                <div className="swiper brand-slider">
                  {/* Additional required wrapper */}
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6">
                    {/* Slides */}
                    <div className="swiper-slide">
                      <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/brand-1.png"
                        alt="brand-1"
                        width={186}
                        height={46}
                        className="h-auto w-fit"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/brand-2.png"
                        alt="brand-2"
                        width={186}
                        height={46}
                        className="h-auto w-fit"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/brand-3.png"
                        alt="brand-3"
                        width={186}
                        height={46}
                        className="h-auto w-fit"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/brand-4.png"
                        alt="brand-4"
                        width={186}
                        height={46}
                        className="h-auto w-fit"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/brand-5.png"
                        alt="brand-5"
                        width={186}
                        height={46}
                        className="h-auto w-fit"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/brand-1.png"
                        alt="brand-1"
                        width={186}
                        height={46}
                        className="h-auto w-fit"
                      />
                    </div>
                  </div>
                </div>
                {/* Brand Slider */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
        </div>
        {/*...::: Brand Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content" id="section-about">
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
                          Speed up your workflow with us
                        </h2>
                      </div>
                      {/* Section Block */}
                    </div>
                    {/* Section Wrapper */}
                    <p>
                      This tool offers pre-designed templates &amp; also
                      provides a wide range of customization options. You can
                      personalize your websites by changing colors, fonts
                      &amp;layouts and easily adding your own content and
                      images.
                    </p>
                    <p>
                      This tool will help you create your own website. Bring
                      your ideas to life &amp; create something beautiful and
                      visually stunning.
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
                        className="h-full w-full"
                      />
                      {/* <img
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/content-img-1-card.png"
                        alt="content-img-1-card"
                        width={353}
                        height={243}
                        className="absolute -right-[110px] bottom-12 hidden lg:inline-block"
                      /> */}
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
        <section className="section-features" id="section-feature">
          {/* Section Background */}
          <div className="rounded-[30px] bg-ColorMidnightMoss lg:rounded-[50px]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[746px]">
                    <div className="mb-5">
                      <h2 className="text-center font-Kanit text-4xl font-medium leading-none -tracking-[1px] text-white lg:text-5xl xl:text-7xl xxl:text-[80px]">
                        Unique features for innovative websites
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
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-black-home-11-feature-1.svg"
                          alt="icon-black-home-11-feature-1"
                          width={79}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          One click to export
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          While you are thinking, Masco is written and design
                          begins. Just move the website to your server and
                          create the design.
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
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-black-home-11-feature-2.svg"
                          alt="icon-black-home-11-feature-2"
                          width={78}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          Pre-made pages
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          We offer a huge collection of pre-made template design
                          templates. All you need is to add your content and
                          context.
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
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-black-home-11-feature-3.svg"
                          alt="icon-black-home-11-feature-3"
                          width={95}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          Fast customization
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          The major benefits of Design-Build construction
                          include streamlined communication and faster project
                          completion.
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
                          src="https://masco-tailwind.netlify.app/assets/img/icons/icon-black-home-11-feature-4.svg"
                          alt="icon-black-home-11-feature-4"
                          width={67}
                          height={70}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 font-Kanit text-2xl font-medium leading-[1.28] tracking-[-0.5px] text-white">
                          100% proper result
                        </div>
                        <p className="text-xl tracking-[-0.5px] text-white/80">
                          Our software ensures a qualified result at every step
                          of your work. You can definitely get the job done
                          without any hassle.
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
        {/*...::: Content Section Start :::... */}
        <section className="section-content">
          {/* Section Spacer */}
          <div className="section-space">
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
                          You can design every type of site
                        </h2>
                      </div>
                      {/* Section Block */}
                    </div>
                    {/* Section Wrapper */}
                    <p>
                      Our website builder software offers pre-designed
                      templates, we also provide various customization options
                      like a blog site, business site, e-commerce, and more.
                    </p>
                    <p>
                      They can changing colors, fonts, layout, adding content
                      &amp; images. Create professional-looking websites without
                      writing a single line of code.
                    </p>
                    <div className="mt-8 lg:mt-[50px]">
                      <a
                        href="#"
                        className="btn is-caribbean-green is-transparent btn-animation is-large is-rounded group inline-block"
                      >
                        <span>
                          Let's try it now
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
                        src="https://masco-tailwind.netlify.app/assets/img/th-11/content-img-2.png"
                        alt="content-img-1"
                        width={586}
                        height={586}
                        className="h-full w-full"
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
        {/*...::: FAQ Section Start :::... */}
        <section className="section-faq">
          {/* Section Space */}
          <div className="section-space-bottom">
            {/* Section Container */}
            <div className="container-default">
              {/* FAQ Area */}
              <div className="grid items-center gap-y-10 lg:grid-cols-[1fr_minmax(0,_0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-32">
                {/* Content Block */}
                <div className="jos" data-jos_animation="fade-right">
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-Kanit text-4xl font-medium leading-none -tracking-[1px] lg:text-5xl xl:text-7xl xxl:text-[80px]">
                        Get a website fast in just a few steps
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    Our website builder tools are designed to be user-friendly,
                    allowing people with little or no technical skills to create
                    and manage your own website.
                  </p>
                  <p>
                    We offer intuitive interfaces, drag-and-drop functionality,
                    &amp; pre-designed templates that simplify the process. With
                    website builder tool, individuals can create and maintain
                    your websites at a fraction of the cost.
                  </p>
                </div>
                {/* Content Block */}
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
                              src="https://masco-tailwind.netlify.app/assets/img/icons/icon-green-black-duotone-faq-1.svg"
                              alt="icon-green-black-duotone-faq-1"
                              width={41}
                              height={40}
                            />
                          </span>
                          <span className="flex-1">
                            {" "}
                            Create a free account{" "}
                          </span>
                        </button>
                        <span className="accordion-icon-4 absolute right-0 top-0 text-xl">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body ml-16 text-xl leading-[1.6] -tracking-[0.5px] text-ColorMidnightMoss">
                        <p className="pt-5">
                          Open a free account with no credit card. Easy to use
                          anytime on any device.
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
                              src="https://masco-tailwind.netlify.app/assets/img/icons/icon-green-black-duotone-faq-2.svg"
                              alt="icon-green-black-duotone-faq-2"
                              width={45}
                              height={40}
                            />
                          </span>
                          <span className="flex-1">
                            {" "}
                            Design by drag and drop{" "}
                          </span>
                        </button>
                        <span className="accordion-icon-4 absolute right-0 top-0 text-xl">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body ml-16 text-xl leading-[1.6] -tracking-[0.5px] text-ColorMidnightMoss">
                        <p className="pt-5">
                          Open a free account with no credit card. Easy to use
                          anytime on any device.
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
                              src="https://masco-tailwind.netlify.app/assets/img/icons/icon-green-black-duotone-faq-3.svg"
                              alt="icon-green-black-duotone-faq-3"
                              width={35}
                              height={40}
                            />
                          </span>
                          <span className="flex-1"> Launch your website </span>
                        </button>
                        <span className="accordion-icon-4 absolute right-0 top-0 text-xl">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body ml-16 text-xl leading-[1.6] -tracking-[0.5px] text-ColorMidnightMoss">
                        <p className="pt-5">
                          Open a free account with no credit card. Easy to use
                          anytime on any device.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                  </ul>
                  {/* Accordion List */}
                </div>
                {/* FAQ Block */}
              </div>
              {/* FAQ Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: FAQ Section End :::... */}
        {/*...::: Pricing Section Start :::... */}
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
                        // onClick="toggleSwitch()"
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
        {/*...::: Pricing Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <section className="section-testimonial" id="section-testimonial">
          {/* Section Background */}
          <div className="rounded-[30px] bg-ColorCaribbeanGreen lg:rounded-[50px]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="max-w-[746px]">
                    <div className="mb-5">
                      <h2 className="font-Kanit text-4xl font-medium leading-none -tracking-[1px] text-ColorMidnightMoss lg:text-5xl xl:text-7xl xxl:text-[80px]">
                        Users share their experiences with us
                      </h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Testimonial Slider */}
                <div className="jos swiper testimonial-one">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-[90px] xl:gap-[134px]">
                        <div className="h-64 w-64 overflow-hidden rounded-[10px] lg:h-[431px] lg:w-[416px]">
                          <img
                            src="https://masco-tailwind.netlify.app/assets/img/th-11/testimonial-img.png"
                            alt="testimonial-img"
                            width={416}
                            height={431}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-ColorMidnightMoss">
                          <blockquote className="mb-10 text-xl font-semibold -tracking-[1px] lg:text-2xl xl:text-3xl">
                            More than just a website builder. The options are
                            great for building a website and have lots of
                            features. When I got stuck which was a lot I was
                            always supported and helped very quickly. Even
                            offered to join a tutorial with Masco which was very
                            informative. Masco was amazing like an
                            accountability partner.
                          </blockquote>
                          <div className="">
                            <span className="block text-xl font-semibold">
                              Robertson Paul
                            </span>
                            <span className="block">
                              Co-founder@ xyz company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-[90px] xl:gap-[134px]">
                        <div className="h-64 w-64 overflow-hidden rounded-[10px] lg:h-[431px] lg:w-[416px]">
                          <img
                            src="https://masco-tailwind.netlify.app/assets/img/th-11/testimonial-img.png"
                            alt="testimonial-img"
                            width={416}
                            height={431}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-ColorMidnightMoss">
                          <blockquote className="mb-10 text-xl font-semibold -tracking-[1px] lg:text-2xl xl:text-3xl">
                            More than just a website builder. The options are
                            great for building a website and have lots of
                            features. When I got stuck which was a lot I was
                            always supported and helped very quickly. Even
                            offered to join a tutorial with Masco which was very
                            informative. Masco was amazing like an
                            accountability partner.
                          </blockquote>
                          <div className="">
                            <span className="block text-xl font-semibold">
                              Robertson Paul
                            </span>
                            <span className="block">
                              Co-founder@ xyz company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-[90px] xl:gap-[134px]">
                        <div className="h-64 w-64 overflow-hidden rounded-[10px] lg:h-[431px] lg:w-[416px]">
                          <img
                            src="https://masco-tailwind.netlify.app/assets/img/th-11/testimonial-img.png"
                            alt="testimonial-img"
                            width={416}
                            height={431}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-ColorMidnightMoss">
                          <blockquote className="mb-10 text-xl font-semibold -tracking-[1px] lg:text-2xl xl:text-3xl">
                            More than just a website builder. The options are
                            great for building a website and have lots of
                            features. When I got stuck which was a lot I was
                            always supported and helped very quickly. Even
                            offered to join a tutorial with Masco which was very
                            informative. Masco was amazing like an
                            accountability partner.
                          </blockquote>
                          <div className="">
                            <span className="block text-xl font-semibold">
                              Robertson Paul
                            </span>
                            <span className="block">
                              Co-founder@ xyz company
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* SLider Navigation */}
                  <div className="relative z-10 mt-[50px] flex flex-row-reverse justify-center gap-6 lg:-mt-[50px] lg:justify-start">
                    <div className="slider-nav-btn-next flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border border-ColorMidnightMoss bg-transparent text-ColorMidnightMoss transition-all duration-300 hover:bg-ColorMidnightMoss hover:text-ColorCaribbeanGreen">
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                    <div className="slider-nav-btn-prev flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border border-ColorMidnightMoss bg-transparent text-ColorMidnightMoss transition-all duration-300 hover:bg-ColorMidnightMoss hover:text-ColorCaribbeanGreen">
                      <i className="fa-solid fa-chevron-left" />
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Testimonial Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className="section-faq">
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
                      Affordable plans to suit your needs
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
                      Can I connect my domain with my new create website site?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Yes! Custom domain is a feature in paid plans. Masco
                      provides detailed instructions to help you connect your
                      site with a domain already my own. Don't have a domain?
                      Can I buy one from right within Masco!
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
                      How often does my team upload new templates?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Yes! Custom domain is a feature in paid plans. Masco
                      provides detailed instructions to help you connect your
                      site with a domain already my own. Don't have a domain?
                      Can I buy one from right within Masco!
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
                      Can I create more sites than my plan allows?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Yes! Custom domain is a feature in paid plans. Masco
                      provides detailed instructions to help you connect your
                      site with a domain already my own. Don't have a domain?
                      Can I buy one from right within Masco!
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
                      How do I cancel the service?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Yes! Custom domain is a feature in paid plans. Masco
                      provides detailed instructions to help you connect your
                      site with a domain already my own. Don't have a domain?
                      Can I buy one from right within Masco!
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
                      Can I pay in other currencies?
                    </button>
                    <div className="accordion-icon-5 relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-2 border-ColorMidnightMoss text-2xl text-ColorMidnightMoss">
                      <i className="fa-regular fa-plus" />
                    </div>
                  </div>
                  {/* Accordion Header */}
                  {/* Accordion Body */}
                  <div className="accordion-body max-w-[1156px] text-xl text-[#2c2c2c] opacity-80">
                    <p className="pt-4 lg:pt-2 xl:pt-1">
                      Yes! Custom domain is a feature in paid plans. Masco
                      provides detailed instructions to help you connect your
                      site with a domain already my own. Don't have a domain?
                      Can I buy one from right within Masco!
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
                      Ready to grow your business digitally?
                    </h2>
                  </div>
                  {/* Section Block */}
                  <a
                    className="btn is-blue is-rounded btn-animation is-large group"
                    href="/portfolio"
                  >
                    <span>Let's start here</span>
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
                src="https://masco-tailwind.netlify.app/assets/img/elements/cta-1-shape-1.svg"
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
                        src="assets/img/logo-light.png"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </a>
                    {/* Footer Content */}
                    <div>
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px]">
                        We are strategic &amp; creative digital agency who are
                        focused on user experience, mobile, social, data
                        gathering and promotional offerings.
                      </div>
                      {/* Footer Mail */}
                      <a
                        href="mailto:yourdemo@email.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        info@kazifi.com
                      </a>
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
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/contact"
                        >
                          Contact
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
                          href="/error-404"
                        >
                          404 Not found
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/reset-password"
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
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Strategic finance
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Video guide
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
    </div>
  );
}
export default LandingPage;
