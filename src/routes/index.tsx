import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  pendingComponent: () => (
    <div className="grid h-screen text-black place-items-center">
      LOADING...
    </div>
  ),
  component: () => <Navigate to="/kiosk" />,
});
