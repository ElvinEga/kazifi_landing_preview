import BreadHeader from "../../components/dashboard/BreadHeader";
import MainDashboard from "../../components/dashboard/MainDashboard";

const JobTracker = () => {
  return (
    <MainDashboard>
      <div>
        <BreadHeader home="Job Tracker" title="Job Tacker" />
        <div className="flex h-screen bg-gray-100 pb-10">
          <div className="flex-1 overflow-auto">
            <div className="mx-auto p-6">
              <div className="flex justify-between">
                <div className="w-1/4 bg-white p-4 shadow-lg">
                  <h2 className="text-lg font-bold mb-4">Job Position</h2>
                  <ul className="space-y-2">
                    <li className="bg-green-100 p-2 rounded">
                      <p className="font-bold">
                        Senior Product Manager - Home and Local Services
                        (Remote)
                      </p>
                      <p className="text-sm text-gray-600">
                        Yelp - Denver, CO-Remote
                      </p>
                    </li>
                    <li className="p-2">
                      <p className="font-bold">
                        Sr. Marketing Manager, Udemy LATAM
                      </p>
                      <p className="text-sm text-gray-600">Udemy</p>
                    </li>
                    <li className="p-2">
                      <p className="font-bold">
                        EverCommerce - Senior Marketing ...
                      </p>
                      <p className="text-sm text-gray-600">EverCommerce</p>
                    </li>
                  </ul>
                </div>
                <div className="w-2/4 bg-white p-4 mx-4 shadow-lg">
                  <div className="mx-auto p-6">
                    <div className="flex justify-between">
                      <div className="flex-1 pr-4">
                        <h1 className="text-3xl font-bold">
                          Senior Product Manager - Home and Local Services
                          (Remote)
                        </h1>
                        <p className="text-sm text-gray-600">
                          Yelp — Denver, CO-Remote
                        </p>
                        <p className="text-sm text-gray-600">
                          Saved 18 minutes ago on indeed.com
                        </p>
                        <div className="flex space-x-2 my-2">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                            Bookmarked
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Applying
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Applied
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Interviewing
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Negotiating
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Accepted
                          </button>
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
                            className="text-gray-400"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                            <circle cx={5} cy={12} r={1} />
                          </svg>
                        </div>
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">
                              Description
                            </h2>
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
                              className="text-blue-500"
                            >
                              <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
                            </svg>
                          </div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                              Keywords
                            </div>
                            <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                              Emphasis Words
                            </div>
                          </div>
                          <p className="text-gray-700">
                            Millions of users depend on Yelp to research,
                            contact and vet local services professionals. If
                            you've ever tried to hire a house cleaner or a
                            plumber, chances are your experience took way longer
                            than it should have. The market for hiring is
                            enormous - $1 trillion in the US alone - but the
                            process is inefficient and largely offline. Yelp is
                            aiming to transform that.
                          </p>
                          <p className="text-gray-700 mt-2">
                            Our team is leading the way to make it easier for
                            our home and local services professionals to get
                            hired. We help small businesses get discovered by
                            high intent consumers, have a best in class
                            experience to get into by those consumers, and have
                            access to new, high value paid services on Yelp.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/4 bg-white p-4 shadow-lg">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h2 className="text-3xl font-bold">
                      $96,000 - $230,000/yr
                    </h2>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Hard Skills</h2>
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
                        className="text-gray-400"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Product Features</span>
                        <span className="text-gray-700">5</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(0%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Marketing</span>
                        <span className="text-gray-700">4</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-20%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Data Science</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Experiment</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Fully Remote</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Go To Market</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">New Product</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          New Product Features
                        </span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Product Ideas</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Recruit</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Revenue</span>
                        <span className="text-gray-700">2</span>
                      </div>
                      <div
                        aria-valuemax={100}
                        aria-valuemin={0}
                        role="progressbar"
                        data-state="indeterminate"
                        data-max={100}
                        className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
                      >
                        <div
                          data-state="indeterminate"
                          data-max={100}
                          className="h-full w-full flex-1 bg-primary transition-all"
                          style={{ transform: "translateX(-60%)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};
export default JobTracker;
