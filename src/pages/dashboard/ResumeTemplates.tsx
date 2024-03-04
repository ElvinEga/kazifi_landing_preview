import BreadHeader from "../../components/dashboard/BreadHeader";
import MainDashboard from "../../components/dashboard/MainDashboard";

const ResumeTemplates = () => {
  return (
    <MainDashboard>
      <div>
        <BreadHeader home="Templates" title="Choose Template" />
        <div className="flex h-screen bg-gray-100 pb-10">
          <aside className="w-64 bg-slate-500 p-5 text-white rounded-xl ">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <circle cx={12} cy={12} r={10} />
                <circle cx={12} cy={10} r={3} />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
              <span className="font-bold">John Doe</span>
            </div>
            <div className="mt-10">
              <p className="text-lg font-semibold">Templates</p>
              <p className="mt-2 text-sm">
                Select a template to update your resume
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <img
                  src="/assets/img/templates/template1.png"
                  alt="Resume Template 1"
                  width={170}
                  height={240}
                  style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                />
                <img
                  src="/assets/img/templates/template2.png"
                  alt="Resume Template 2"
                  width={170}
                  height={240}
                  style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                />
                <img
                  src="/assets/img/templates/template3.png"
                  alt="Resume Template 3"
                  width={170}
                  height={240}
                  style={{ aspectRatio: "170 / 240", objectFit: "cover" }}
                />
              </div>
              <div className="mt-10">
                <p className="text-lg font-semibold">Template Settings</p>
                <div className="mt-4">
                  <label htmlFor="font" className="block text-sm font-medium">
                    Font
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r9g:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="font"
                  >
                    <span style={{ pointerEvents: "none" }}>Poppins</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <select
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      position: "absolute",
                      border: 0,
                      width: 1,
                      height: 1,
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      overflowWrap: "normal",
                    }}
                  >
                    <option value="" />
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="accent-colors"
                    className="block text-sm font-medium"
                  >
                    Accent Colors
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r9h:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="accent-colors"
                  >
                    <span style={{ pointerEvents: "none" }}>Black</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <select
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      position: "absolute",
                      border: 0,
                      width: 1,
                      height: 1,
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      overflowWrap: "normal",
                    }}
                  >
                    <option value="" />
                  </select>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1 overflow-auto">
            <div className="bg-white p-10">
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1={2} x2={5} y1={12} y2={12} />
                    <line x1={19} x2={22} y1={12} y2={12} />
                    <line x1={12} x2={12} y1={2} y2={5} />
                    <line x1={12} x2={12} y1={19} y2={22} />
                    <circle cx={12} cy={12} r={7} />
                  </svg>
                  <span>
                    Miami, Florida - tina.miller@gmail.com -
                    linkedin.com/in/tina-miller-nyc
                  </span>
                </div>
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width={12} height={8} x={6} y={14} />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1={12} x2={12} y1={2} y2={15} />
                  </svg>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200">
                    Export As
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gray-200">
                    Menu
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl font-bold">Marketing Manager</h1>
                <p className="mt-4 text-sm">
                  Results-driven Brand Marketing Product Specialist with 13+
                  years of experience in multi-channel campaigns, global
                  campaign roadmaps, and website optimization strategies.
                  Notable achievements include driving 25% growth in lead
                  generation, boosting brand awareness by 25%, and increasing
                  conversion rates by 20%. Expertise in SEO, content marketing,
                  growth marketing, and SQL. Adept in campaign management, email
                  marketing, and customer engagement. Master's degree in
                  Marketing Management and a Bachelor's in Communications.
                </p>
                <div className="mt-10">
                  <h2 className="text-xl font-semibold">WORK EXPERIENCE</h2>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      Senior Marketing Manager - New York, United States
                    </h3>
                    <p className="text-sm">07/2020 – Present</p>
                    <ul className="mt-2 list-disc list-inside text-sm">
                      <li>
                        Boosted brand awareness by 25% and led the team to
                        increase customer engagement by 30% through strategic
                        digital campaigns.
                      </li>
                      <li>
                        Increased the company's online presence by 25%, driving
                        a 40% increase in website traffic and generating $2M in
                        revenue through successful digital campaigns.
                      </li>
                      <li>
                        Increased brand recognition by 25% through the
                        successful execution of integrated marketing campaigns,
                        resulting in a 15% rise in sales YoY.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      Marketing Manager - San Francisco, California, United
                      States
                    </h3>
                    <p className="text-sm">03/2010 – 03/2016</p>
                    <ul className="mt-2 list-disc list-inside text-sm">
                      <li>
                        Developed and implemented a comprehensive SEO strategy
                        that resulted in a 30% increase in organic traffic and
                        25% increase in online sales.
                      </li>
                      <li>
                        Led the development and execution of a content marketing
                        strategy that resulted in a 25% increase in engagement
                        and a 15x increase in website traffic.
                      </li>
                      <li>
                        Utilized growth marketing techniques to drive a 20%
                        increase in website conversions and a 10% increase in
                        revenue.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      Brand Marketing Product Specialist
                    </h3>
                    <p className="text-sm">Facebook</p>
                  </div>
                </div>
                <div className="mt-10">
                  <h2 className="text-xl font-semibold">EDUCATION</h2>
                  <p className="mt-4 text-sm">
                    Master of Arts - MA in Marketing Management
                  </p>
                  <p className="text-sm">
                    Georgia Institute of Technology Scheller College of Business
                  </p>
                  <p className="mt-2 text-sm">
                    Bachelor of Science - BS in Communications
                  </p>
                  <p className="text-sm">
                    Columbia University in the City of New York
                  </p>
                </div>
                <div className="mt-10">
                  <h2 className="text-xl font-semibold">SKILLS</h2>
                  <p className="mt-4 text-sm">
                    Campaigns, Email Marketing, Management, Strategy, Marketing,
                    Social Media, Ad Serving, Customer Engagement
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainDashboard>
  );
};
export default ResumeTemplates;
