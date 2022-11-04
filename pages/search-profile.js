import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearch from "../components/Forms/UserSearch";
import MyProfile from "../components/Porfile/MyProfile";
import { useDataContext } from "../context/DataContext";
import { useEffect } from "react";

export default function Home() {
  const { user, handle } = useDataContext();
  const router = useRouter();

  // useEffect(() => {
  //   if (user) {
  //     // window.onload((e) => {
  //     router.push("/my-profile");
  //     // });
  //   }
  // }, [router, user]);
  console.log(user);

  return (
    <>
      <UserSearch />
      {user && user.handle && <MyProfile />}
    </>
  );
}
