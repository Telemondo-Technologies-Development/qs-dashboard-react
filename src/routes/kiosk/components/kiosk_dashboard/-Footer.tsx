// import UnicenterLogo from "/unicenter-logo.png";
// import TelemondoLogo from "/telemondo-logo.png";

export default function Footer() {
  return (
    <footer className="bg-white flex justify-center space-x-6 py-1 border-t-[1px] border-main_primary font-poppins">
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
