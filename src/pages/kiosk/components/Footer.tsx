import UnicenterLogo from "/unicenter-logo.png"
import TelemondoLogo from "/telemondo-logo.png"

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6">
      <p className="text-[12px] self-center">Powered by Unicenter Communications and Telemondo</p>
      <div className="h-full w-[1px] bg-black"/>
      <img src={UnicenterLogo} alt="Unicenter Logo" height={49} width={49} />
      <img src={TelemondoLogo} alt="Telemondo Logo" height={28} />
    </footer>
  )
}
