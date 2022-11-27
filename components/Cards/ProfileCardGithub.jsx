import axios from "axios";
import Image from "next/image";


function ProfileCardGithub({ user }) {
  return (
    <div
      style={{ width: "100%", height: "auto" }}
      className="flex flex-col justify-center items-center shadow-lg rounded-xl py-3 mt-3"
    >
      <div className="h-28 w-28 relative">
        <Image
          src={user.avatar_url}
          alt="pic"
          fill
          className="border-2 border-gray-500 rounded-full"
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="m-0 text-2xl font-bold">{user.name}</h3>
        <div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="underline text-lg text-blue-600"
          >
            {user.login}
          </a>
        </div>
        <hr className="m-0 my-2" />
        <div>
          <p className="m-0 ">{user.location}</p>
          <div>
            <a
              href={`https://www.${user.blog}`}
              target="_blank"
              rel="noreferrer"
              className="underline text-lg text-blue-600"
            >
              {user.blog}
            </a>
          </div>

          <p className="m-0 ">Repositories: {user.public_repos}</p>
          <p className="m-0 ">
            Followers: {user.followers} | Following:
            {user.following}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardGithub;
