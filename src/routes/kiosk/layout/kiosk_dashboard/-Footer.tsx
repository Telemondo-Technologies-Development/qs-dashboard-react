import UnicenterLogo from "/unicenter-logo.png";
import TelemondoLogo from "/telemondo-logo.png";

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6 py-1 border-t-[1px] border-main_primary">
      <p className="self-center text-xs">
        Powered by Unicenter Communications and Telemondo
      </p>
      <div className="h-full w-[1px] bg-black" />
      <img src={UnicenterLogo} alt="Unicenter Logo" className="size-[30px] self-center" />
      <img src={TelemondoLogo} alt="Telemondo Logo" className="h-[30px] self-center" />
    </footer>
  );
}
