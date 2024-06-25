import { createFileRoute } from "@tanstack/react-router";
import RenderBasedOnRole from "../-RenderBasedOnRole";

export const Route = createFileRoute("/admin/appointments/")({
  component: () => <Appointments />,
});

function Appointments() {
  const Admin = (
    <div className="grid flex-1 place-items-center">
      ADMIN APPOINTMENTS PAGE
    </div>
  );

  const Staff = (
    <div className="grid flex-1 place-items-center">
      STAFF APPOINTMENTS PAGE
    </div>
  );

  return <RenderBasedOnRole adminComponent={Admin} staffComponent={Staff} />;
}
