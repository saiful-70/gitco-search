import "../styles/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import { DataContext } from "../context/DataContext";

function MyApp({ Component, pageProps }) {
  // const [handle, setHandle] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState({});

  // const searchUser = (handle) => {
  //   axios
  //     .get(`https://codeforces.com/api/user.info?handles=${handle}`)
  //     .then((data) => {
  //       setLoading(false);
  //       return data.data;
  //     })
  //     .then((result) => {
  //       if (result.status === "OK") {
  //         setUser(result.result[0]);
  //         console.log(user);
  //       } else throw new Error();
  //     })
  //     .catch((e) => {
  //       setHandle("");
  //       setLoading(false);
  //       console.log(e.message);
  //     });
  // };

  // useEffect(() => {
  //   const localHandle = localStorage.getItem("handle");
  //   // console.log(localHandle);
  //   if (localHandle) {
  //     searchUser(localHandle);
  //   }
  // }, []);

  return (
    // <DataContext.Provider value={{ user, setUser, handle, setHandle }}>
    //   <Layout>
    //   </Layout>
    // </DataContext.Provider>
    <Component {...pageProps} />
  );
}

export default MyApp;
