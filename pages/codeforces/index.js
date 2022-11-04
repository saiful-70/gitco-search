import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../../components/Cards/ProfileCard";
import UserSearch from "../../components/Forms/UserSearch";
import Layout from "../../components/Layout";

const Index = () => {
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [isFound, setIsFound] = useState(true);

  const searchUser = async (handle) => {
    try {
      const req1 = axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}`
      );
      const req2 = axios.get(
        `https://codeforces.com/api/user.rating?handle=${handle}`
      );
      const responses = await axios.all([req1, req2]);

      if (responses) {
        setLoading(false);
        setIsFound(true);
        const response1 = await responses[0].data;
        const response2 = await responses[1].data;

        const data1 = await response1.result[0];
        const data2 = await response2.result[1];

        await setUser({ currentRank: data1.rank, ...data1, ...data2 });
        console.log(user);
        // console.log(data1, data2);
        // console.log("user info", data1, "user rating", data2);
        return { data1, ...data2 };
      } else throw new Error();
    } catch (e) {
      setHandle("");
      setLoading(false);
      setIsFound(false);
      setUser({});
      console.log(e);
    }
  };

  useEffect(() => {
    const localHandle = localStorage.getItem("handle");
    // console.log(localHandle);
    // console.log(searchUser());
    // if (handle) {
    //   searchUser(handle);
    //   console.log(user);
    // }
    // console.log(user);
  }, []);
  return (
    <Layout>
      <div className="w-full md:w-1/2">
        <UserSearch
          handle={handle}
          setHandle={setHandle}
          searchUser={searchUser}
          loading={loading}
          setLoading={setLoading}
        />
        {/* {user && user.handle && ( */}
        <h5
          className={`text-center mt-8 ${
            !isFound ? "text-red-600" : "text-blue-600"
          } font-bold border-2 text-lg`}
        >
          {!isFound ? "User Not found" : "User's Profile"}
        </h5>

        {user && user.handle && <ProfileCard user={user} />}
        {/* {!isFound && (
        <h5 className="text-center mt-8 text-red-500 font-bold border-2 text-lg">
          Not found
        </h5>
      )} */}
      </div>
    </Layout>
  );
};
export default Index;
