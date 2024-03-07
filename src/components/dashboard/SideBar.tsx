const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="h-full hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60]  bg-white border-gray-200 overflow-x-hidden  overflow-y-hidden scrollbar-y  lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex h-full  ">
          <nav className="flex-none flex flex-col items-center text-center bg-blue-900 text-gray-300 border-r h-full  overflow-y-auto scrollbar-y">
            <div className="h-16 flex items-center w-full">
              <img
                className="h-6 w-6 mx-auto"
                src="/assets/img/kazifi_logo.svg"
              />
            </div>
            <ul>
              <li>
                <a
                  title="Home"
                  href="/dashboard"
                  className="h-16 px-6 flex flex-col justify-center items-center text-white is-caribbean-green hover:scale-150 w-full"
                >
                  <i className="fa-duotone fa-home text-xl"></i>
                </a>
                <span
                  className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                  role="tooltip"
                >
                  Home
                </span>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    title="Job Tracker"
                    href="/jobtracker"
                    className="h-16 px-6 flex justify-center  items-center  hover:text-green-400 hover:scale-150 w-full"
                  >
                    <i className="fa-duotone fa-chart-mixed text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Job Tracker
                  </span>
                </div>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    title="Resume Builder"
                    href="/resumebuilder"
                    className="h-16 px-6 flex items-center hover:text-green-400 hover:scale-150 w-full"
                  >
                    <i className="fa-duotone fa-typewriter text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Resume Builder
                  </span>
                </div>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    title="Templates"
                    href="/templates"
                    className="h-16 px-6 flex items-center hover:text-green-400 hover:scale-150 w-full"
                  >
                    <i className="fa-duotone fa-text-size text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Templates
                  </span>
                </div>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    title="/workinghistory"
                    href="/workinghistory"
                    className="h-16 px-6 flex items-center hover:text-green-400 hover:scale-150 w-full"
                  >
                    <i className="fa-solid fa-clock-rotate-left text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Working History
                  </span>
                </div>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    title="Interview Tests"
                    href="/interviews"
                    className="h-16 px-6 flex items-center hover:text-green-400 hover:scale-150 w-full"
                  >
                    <i className="fa-duotone fa-briefcase text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Interview Tests
                  </span>
                </div>
              </li>
              <li>
                <a
                  title="Settings"
                  href="#admin"
                  className="h-16 px-6 flex items-center hover:text-green-400 hover:scale-150 w-full"
                >
                  <i className="fa-solid fa-cog text-xl"></i>
                </a>
              </li>
              <li>
                <a
                  title="Logout"
                  href="#admin"
                  className="h-16 px-6 flex items-center hover:text-green-400 hover:scale-150 w-full"
                >
                  <i className="fa-duotone fa-right-from-bracket text-xl"></i>
                </a>
              </li>
            </ul>
            <div className="mt-auto h-16 flex items-center w-full">
              <i className="bi bi-gear-fill text-xl mx-auto"></i>
            </div>
          </nav>
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
};

export default Sidebar;
