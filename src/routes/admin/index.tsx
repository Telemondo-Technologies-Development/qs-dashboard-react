import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/admin/')({
  component: () => <Admin/>
})

function Admin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-blue-200">
      <h1 className="text-3xl font-bold">Welcome to Admin page</h1>
      <div className="flex gap-6">
          <Link to="/"><Button>Back to Homepage</Button></Link>
          <Link to="/kiosk"><Button>Go to Kiosk page</Button></Link>
      </div>
    </div>
  );
}