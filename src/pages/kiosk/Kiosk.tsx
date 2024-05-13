import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function Kiosk() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-green-200 font-poppins">
      <h1 className="text-3xl font-bold">Welcome to Kiosk page</h1>
      <div className="flex gap-6">
        <Link to="/">
          <Button>Back to Homepage</Button>
        </Link>
        <Link to="/admin">
          <Button>Go to Admin page</Button>
        </Link>
      </div>
    </div>
  );
}
