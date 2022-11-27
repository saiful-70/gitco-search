import { useEffect, useState } from "react";
import axios from "axios";
import UserSearch from "../../components/Forms/UserSearch";
import Layout from "../../components/Layout";
import ProfileCardGithub from "../../components/Cards/ProfileCardGithub";

const Index = () => {
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [isFound, setIsFound] = useState(true);

  const searchUser = async (handle) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${handle}`);
      
      console.log(response)

      if (response.status === 200) {
        setLoading(false);
        setIsFound(true);
        await setUser({ ...response.data });
        // console.log(response.data);
        // console.log(user);
      } else throw new Error();
    } catch (e) {
      setHandle("");
      setLoading(false);
      setIsFound(false);
      setUser({});
      console.log(e);
    }
  };

  return (
    <Layout>
      <div className="w-full md:w-1/2">
        <UserSearch
          handle={handle}
          setHandle={setHandle}
          searchUser={searchUser}
          loading={loading}
          setLoading={setLoading}
          label="Github Username"
        />
        {/* {user && user.handle && ( */}
        <h5
          className={`text-center mt-8 ${
            !isFound ? "text-red-600" : "text-blue-600"
          } font-bold border-2 text-lg`}
        >
          {!isFound ? "User Not found" : "User's Profile"}
        </h5>

        {user && user.login && <ProfileCardGithub user={user} />}
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
