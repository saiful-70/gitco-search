import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import UserSearch from "../components/Forms/UserSearch";
import ProfileCard from "../components/Cards/ProfileCard";
import { useDataContext } from "../context/DataContext";
import { useEffect } from "react";
import NavigationBar from "../components/NavationBar";
import Link from "next/link";

export default function Home() {
  // const { user, handle } = useDataContext();
  const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     // window.onload((e) => {
  //     router.push("/my-profile");
  //     // });
  //   }
  // }, [router, user]);

  return (
    <div className="container flex flex-col items-center my-0 mx-auto w-screen min-h-screen justify-center">
      {/* <div className="h-64 w-64 relative">
        <Image fill src="/search.svg" alt="search" />
      </div> */}
      <div className="border-4 border-gray-500 w-5/6 md:w-2/3 lg:w-1/2 px-10 py-16 rounded-lg shadow-xl text-center">
        <h1 className="font-bold text-5xl">GitCoSearch</h1>
        <p className="text-gray-700">Search peoples by their username.</p>
        <div className="flex justify-center my-5 mb-10">
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
        </div>
        <Link
          href="https://github.com/saiful-70/gitco-search"
          target="_blank"
          className="underline hover:text-blue-600"
        >
          Check Source Code
        </Link>
        <p>
          Copyright &copy;
          <Link
            href="https://github.com/saiful-70/"
            target="_blank"
            className="underline hover:text-blue-600"
          >
            Saiful Islam
          </Link>
          , {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
