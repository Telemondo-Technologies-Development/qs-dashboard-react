import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      {/*tailwind and shadcn is working*/}
      <p className="text-5xl text-blue-700">hello world</p>
      <Button className="bg-red-300" variant="outline">
        Button
      </Button>
    </>
  );
}

export default App;
