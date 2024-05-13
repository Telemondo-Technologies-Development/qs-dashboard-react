import { Button } from "@/components/ui/button";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-3xl font-bold">Homepage</h1>
      <h2 className="text-xl font-semibold">Select a Route</h2>
      <div className="flex gap-8">
        <Link to="/kiosk">
          <Button className="text-xl">Kiosk</Button>
        </Link>
        <Link to="/admin">
          <Button className="text-xl">Admin</Button>
        </Link>
      </div>
    </div>
  );
}
