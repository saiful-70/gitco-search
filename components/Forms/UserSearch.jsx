import { useState, useRef, useEffect } from "react";
import axios from "axios";

import { useDataContext } from "../../context/DataContext";

const UserSearch = ({ handle, setHandle, searchUser, setLoading, loading }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <form
      className="mt-3 flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        searchUser(handle);
      }}
    >
      <label className="font-bold text-lg">Handle/Username</label>
      <input
        type="text"
        placeholder="Enter Codeforces Handle"
        ref={searchRef}
        className="pl-2 border-2 py-2 rounded-lg outline-blue-400"
      />

      <button
        type="submit"
        onClick={() => {
          setHandle(searchRef.current.value), setLoading(true);
        }}
        className="px-5 py-1 bg-indigo-500 rounded-md text-white font-bold mt-2 text-lg"
      >
        {loading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4335 4335"
            className="animate-spin h-5 px-5"
          >
            <path
              fill="#fff"
              d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
            />
          </svg>
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
};

export default UserSearch;
