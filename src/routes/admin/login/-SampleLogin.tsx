import axios from "axios";
import { useState } from "react";
export default function SampleLogin() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading ? (
        <p className="text-lg">LOADING...</p>
      ) : (
        <p className="text-lg">LOGGED IN</p>
      )}
      <p className="text-lg">{email === "" ? "unknown" : email}</p>
    </div>
  );
}
