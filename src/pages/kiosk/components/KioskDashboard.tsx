import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function KioskDashboard() {
  const [selectedButton, setSelectedbutton] = useState("");
  return (
    <div className="flex flex-col flex-1 items-center justify-center  bg-white font-poppins text-main_primary">
      <h1 className="font-bold text-5xl mb-3">Queue</h1>
      <p className="text-xl mb-11">
        Select one of the following to generate a QR queue ticket.
      </p>
      <div className="flex flex-row gap-10 ">
        <button
          className={`flex justify-center flex-col items-center font-bold text-xl gap-4 `}
          onClick={() => setSelectedbutton("accounts")}
        >
          <img
            className={`size-56 ${selectedButton === "" ? "brightness-100" : `${selectedButton === "accounts" ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
            src="/kiosk-images/accounts.png"
            alt="accounts"
          />
          <p className="text-lg">Accounts</p>
        </button>
        <button
          className="flex justify-center flex-col items-center font-bold text-xl gap-5 "
          onClick={() => setSelectedbutton("Deposits and Withdrawals")}
        >
          <img
            className={`size-56 ${selectedButton === "" ? "brightness-100" : `${selectedButton === "Deposits and Withdrawals" ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
            src="/kiosk-images/deposits-and-withdrawal.png"
            alt="Deposits and Withdrawals"
          />
          <p className="text-lg">Deposits and Withdrawals</p>
        </button>
        <button
          className="flex justify-center flex-col items-center font-bold text-xl gap-5"
          onClick={() => setSelectedbutton("Loans and Mortgages")}
        >
          <img
            className={`size-56 ${selectedButton === "" ? "brightness-100" : `${selectedButton === "Loans and Mortgages" ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
            src="/kiosk-images/loans-and-mortgages.png"
            alt="Loans and Mortgages"
          />
          <p className="text-lg">Loans and Mortgages</p>
        </button>
        <button
          className="flex justify-center flex-col items-center font-bold text-xl gap-5"
          onClick={() => setSelectedbutton("Payements and Transfer")}
        >
          <img
            className={`size-56 ${selectedButton === "" ? "brightness-100" : `${selectedButton === "Payements and Transfer" ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
            src="/kiosk-images/payments-and-transfers.png"
            alt="Payements and Transfer"
          />
          <p className="text-lg">Payments and Transfer</p>
        </button>
        <button
          className={
            "flex justify-center flex-col items-center font-bold text-xl gap-5 "
          }
          onClick={() => setSelectedbutton("Customer Service")}
        >
          <img
            className={`size-56 ${selectedButton === "" ? "brightness-100" : `${selectedButton === "Customer Service" ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
            src="/kiosk-images/customers-service.png"
            alt="Customer Service"
          />
          <p className="text-lg">Customer Service</p>
        </button>
      </div>
      <div className="flex gap-48 text-lg mt-16">
        <Link to="/">
          <Button className="w-64 h-16 text-lg bg-main_primary">
            Regular Citizen
          </Button>
        </Link>
        <Link to="/admin">
          <Button className="w-64 h-16 text-lg bg-main_primary">
            Senior Citizen / <br /> Pregnant / PWD
          </Button>
        </Link>
      </div>
    </div>
  );
}
