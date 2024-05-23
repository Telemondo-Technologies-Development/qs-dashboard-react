import { createFileRoute } from "@tanstack/react-router";
import Login from "./components/-Login";

export const Route = createFileRoute("/admin/login/")({
  component: () => (
    <div className="bg-main_primary h-screen grid place-items-center">
      <Login />
    </div>
  ),
});
