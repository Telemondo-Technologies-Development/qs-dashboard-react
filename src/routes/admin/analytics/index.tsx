import { createFileRoute } from "@tanstack/react-router";
import RenderBasedOnRole from "../-RenderBasedOnRole";

export const Route = createFileRoute("/admin/analytics/")({
  component: () => <Analytics />,
});

function Analytics() {
  const Admin = (
    <div className="grid flex-1 place-content-center">ADMIN ANALYTICS</div>
  );

  const Staff = (
    <div className="grid flex-1 place-content-center">STAFF ANALYTICS</div>
  );

  return <RenderBasedOnRole adminComponent={Admin} staffComponent={Staff} />;
}
