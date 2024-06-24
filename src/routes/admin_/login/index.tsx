import { Navigate, createFileRoute } from "@tanstack/react-router";
import Login from "./components/-Login";
import RenderBasedOnRole from "@/routes/admin/-RenderBasedOnRole";

export const Route = createFileRoute("/admin/login/")({
  component: () => <AdminLogin />,
});

function AdminLogin() {
  const Admin = <Navigate to="/admin/dashboard" />;
  const Staff = <Navigate to="/admin/dashboard" />;
  const LoginPage = (
    <div className="grid h-screen bg-main_primary place-items-center">
      <Login />
    </div>
  );

  return (
    <RenderBasedOnRole
      adminComponent={Admin}
      staffComponent={Staff}
      undefinedUserComponent={LoginPage}
    />
  );
}
