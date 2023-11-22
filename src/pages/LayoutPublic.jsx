import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header className="w-full h-[80px]">
        <Navbar />
      </header>
      <main className="pt-16 px-16">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
