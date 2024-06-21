

export default function Footer() {
  return (
    <footer className="flex justify-center py-1 space-x-6 bg-white font-poppins">
      <p className="self-center text-xs">
        Powered by{" "}
        <a
          href="http://www.unicentercommunications.com"
          className="text-blue-500 underline"
        >
          Unicenter Communications
        </a>{" "}
        and{" "}
        <a href="http://www.telemondo.com" className="text-blue-500 underline">
          Telemondo
        </a>
      </p>
    </footer>
  );
}
