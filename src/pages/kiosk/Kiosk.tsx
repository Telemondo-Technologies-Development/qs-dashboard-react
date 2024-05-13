import Header from "./components/Header";
import Footer from "./components/Footer";

import KioskDashboard from "./components/KioskDashboard";

export default function Kiosk() {
  //${selectedButton !== "account" || selectedButton!=="" ? "brightness-50 transition duration-300" : "brightness-100"}
  return (
    <div className=" flex h-screen flex-col">
      <Header />
      <KioskDashboard />
      <Footer />
    </div>
  );
}
