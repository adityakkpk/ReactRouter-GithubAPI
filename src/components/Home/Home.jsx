import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    return () => sessionStorage.setItem("user", username);
  }, [username]);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  const handleEnter = (event) => {
    if(event.key === "Enter") {
      window.location.href = `/user/${username}`;
    }
  }

  return (
    <div className="mx-auto my-20 w-full max-w-7xl">
      <aside className="flex lg:justify-between justify-center m-10 mx-auto flex-wrap gap-20 items-center w-full overflow-hidden text-black p-2">
        <div className="order-2">
          <div className="max-w-xl space-y-8 text-center lg:text-right sm:ml-auto">
            <h2 className="text-5xl font-bold">
              <p className="dark:text-gray-200">Enter GitHub Username&nbsp;</p>
              <input
                type="text"
                className="border border-gray-500 rounded focus:outline-none px-1 font-thin text-xl"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
                placeholder="Enter username"
                value={username}
              />
              &nbsp;
            </h2>
            <button disabled={!username} className="disabled:hidden">
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to={`/user/${username}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                &nbsp; Get Your Data
              </Link>
            </button>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div className="order-1">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>
    </div>
  );
}
