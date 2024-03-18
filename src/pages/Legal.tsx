import Navbar from "../components/landing/navbar";
import Footer from "../components/landing/Footer";

function LegalPage() {
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
                <h1 className="breadcrumb-title">Legal</h1>
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
        <section className="section-service-details">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Service Details Area */}
              <div className="mx-auto max-w-[1080px]">
                <div className="rich-text">
                  <h5>What is Digital Brand Strategy?</h5>
                  <p>
                    A comprehensive plan that helps you communicate your
                    company's identity to consumers online to increase customer
                    loyalty and sales. A digital brand strategy also defines how
                    your organization wishes to be perceived by consumers.
                  </p>
                  <p>
                    What makes it unique? What do you want people to think about
                    your product or service? By creating guidelines for your
                    brand, you can ensure every interaction with consumers
                    remains consistent.
                  </p>
                  <h5>
                    How Do You Create an Effective Digital Brand Strategy?
                  </h5>
                  <p>
                    Creating an effective digital brand takes time, effort, and
                    due diligence. It's not as simple as making a logo, showing
                    up with a few dozen hashtags, and calling. Let's dive into
                    the roadmap for building a digital brand strategy with a few
                    detailed examples.
                  </p>
                </div>
              </div>
              {/* Service Details Area */}
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
export default LegalPage;
