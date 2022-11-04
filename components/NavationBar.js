import Link from "next/link";

const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-center my-5 mb-10">
        <Link
          href="/"
          className="decoration-none text-white font-bold no-underline hover:underline text-lg"
        >
          <h6 className="w-32 mx-1 bg-indigo-500 py-2 rounded-lg text-center pl-0">
            &larr; Home
          </h6>
        </Link>
        <Link
          href="/codeforces"
          className="decoration-none text-white font-bold no-underline hover:underline text-lg"
        >
          <h6 className="w-32 mx-1 bg-indigo-500 py-2 rounded-lg text-center pl-0">
            Codeforces
          </h6>
        </Link>
        <Link
          href="/github"
          className="decoration-none text-white font-bold no-underline hover:underline text-lg"
        >
          <h6 className="w-32 mx-1 bg-gradient-to-r from-blue-400  to-red-500 py-2 rounded-lg text-center pl-0">
            Github
          </h6>
        </Link>
        {/* <Link
          href="/github"
          className="decoration-none text-white font-bold no-underline hover:underline"
        >
          <h6 className="w-28 mx-1 bg-gray-800 py-2 rounded-lg text-center">
            Github
          </h6>
        </Link> */}
      </div>
    </>

    // </nav>
  );
};

export default NavigationBar;
