import Navbar from "./NavBar";
import Sidebar from "./SideBar";

type contentProps = {
  children: JSX.Element;
};

const MainDashboard = ({ children }: contentProps) => {
  return (
    <>
      <Navbar />
      {/* ========== MAIN CONTENT ========== */}
      <Sidebar />
      {/* Content */}
      <div className="w-full pt-4 px-4 sm:px-6 md:px-8 lg:pl-72">
        {children}
      </div>
      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default MainDashboard;
