import { Link } from "react-router-dom";
import Footer from "../../components/sections/Footer";
import Navbar from "../../components/sections/navbar";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-2xl border border-solid shadow-sm border-stone-20 w-[393px]">
        <Navbar />
        <div className=" flex flex-col items-center w-full p-8 ">
          <div className="text-2xl font-semibold text-center whitespace-nowrap text-slate-950">
            Scan Linkedin Job
          </div>
          <div className="mt-3 text-sm leading-4 text-center text-slate-600">
            Open the Linkedin tab of the job post you want to scan
          </div>
          <img
            loading="lazy"
            src="/assets/img/icons/illust_home.svg"
            className="mt-7 w-full aspect-[1.49]"
          />
          <Link
            to="/extension/scan"
            className=" px-16 py-4 w-full inline-flex justify-center items-center gap-5 mt-12 text-base font-semibold text-center text-gray-900 shadow-sm is-caribbean-green rounded-full"
          >
            Scan Job
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
