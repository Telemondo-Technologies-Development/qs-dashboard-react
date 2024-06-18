import axios from "axios";
import { useEffect, useState } from "react";
export default function SampleLogin() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   if(!isLoggedIn)
  // }, [email])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => {
          setIsLoading(true);
          axios
            .post(
              "/api/core/auth/login",
              {
                username: "admin@gmail.com",
                password: "123456",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            )
            .then((res) => {
              setIsLoading(false);
              setIsLoggedIn(true);
              setEmail(res.data.data.email);
            })
            .catch((err) => {
              console.error(err);
            });
        }}
        className="px-6 py-4 text-lg border border-black"
      >
        LOGIN
      </button>
      <button
        onClick={() => {
          setIsLoading(true);
          axios
            .post("/api/core/user/logout")
            .then((res) => {
              setIsLoading(false);
              setIsLoggedIn(false);
              setEmail("");
            })
            .catch((err) => {
              console.error(err);
            });
        }}
        className="px-6 py-4 text-lg border border-black"
      >
        LOGOUT
      </button>
      {isLoading && <p className="text-lg">LOADING...</p>}
      {isLoggedIn ? (
        <p className="text-lg">LOGGED IN</p>
      ) : (
        <p className="text-lg">NOT LOGGED IN</p>
      )}
      {email && <p className="text-lg">{email}</p>}
      {/* <button
        onClick={() => {
          setIsLoading(true);
          axios
            .post("/api/domain/counter/type", {
              name: "Accounts",
              abbrev: "A",
              status: 0,
            })
            .then((res) => {
              setIsLoading(false);
              console.log("successfully created\n", res.data);
            })
            .catch((err) => {
              console.log("error in making countertype", err);
            });
        }}
        className="px-6 py-4 text-lg border border-black"
      >
        CREATE COUNTERTYPE
      </button> */}
    </div>
  );
}
