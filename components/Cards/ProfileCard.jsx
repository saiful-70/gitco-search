import axios from "axios";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";

function ProfileCard({ user }) {
  const [saved, setSaved] = useState(false);

  return (
    <div
      style={{ width: "100%", height: "auto" }}
      className="flex flex-col justify-center items-center shadow-lg rounded-xl py-3 mt-3"
    >
      <div className="h-28 w-28 relative">
        <Image
          src={user.titlePhoto}
          alt="pic"
          fill
          className="border-2 border-gray-500 rounded-full"
        />
      </div>
      <div className="text-center mt-2">
        <div>
          <a
            href={`https://codeforces.com/profile/${user.handle}`}
            target="_blank"
            rel="noreferrer"
            className="underline text-lg text-blue-600"
          >
            {user.handle}
          </a>

          <p className="m-0 font-semibold text-red-600">{user.currentRank}</p>
          <p className="m-0 ">
            {user.firstName} {user.lastName}
          </p>
        </div>
        <hr className="m-0 my-2" />
        <div>
          <p className="m-0 ">
            {user.city}, {user.country} | {user.organization}
          </p>
          <p className="m-0 ">
            Current Rating: {user.rating} | Max:
            {user.maxRating}({user.maxRank})
          </p>
        </div>

        {/* <button
          variant={saved ? "disabled" : "primary"}
          onClick={saveToLocalStorage}
        >
          {saved ? "Saved" : "Save to your device"}
        </button> */}
      </div>
    </div>
  );
}

export default ProfileCard;
