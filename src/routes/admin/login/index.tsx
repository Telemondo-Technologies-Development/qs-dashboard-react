import { createFileRoute } from "@tanstack/react-router";
import Login from "./components/-Login";

export const Route = createFileRoute("/admin/login/")({
  component: () => (
    <div className="grid h-screen bg-main_primary place-items-center">
      <Login />
    </div>
  ),
});