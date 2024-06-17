import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useState } from "react";

export const Route = createFileRoute("/admin/login/")({
  component: () => <Login />,
});

function Login() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={async () => {
          setIsLoading(true);
          const res = axios
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
                withCredentials: true
              },
              
            )
            .then((res) => {
              setIsLoading(false);
              setData(res.data.email);
            })
            .catch((err) => {
              console.error(err);
            });
        }}
        className="px-6 py-4 text-lg border border-black"
      >
        LOGIN
      </button>
      {isLoading && <p className="text-lg">LOADING...</p>}
      <p className="text-lg">{data === "" ? "not logged in" : data}</p>
    </div>
  );
}
