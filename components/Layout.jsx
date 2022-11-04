import Link from "next/link";
import NavigationBar from "./NavationBar";

function Layout({ children }) {
  return (
    <div className="container flex flex-col items-center my-0 mx-auto w-screen min-h-screen px-5 pt-5">
      <h1 className="font-bold text-5xl mt-8">GitCoSearch</h1>
      <p className="text-gray-700">Search peoples by their username.</p>

      <NavigationBar />
      {children}
    </div>
  );
}

export default Layout;
