import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Kiosk() {
  const [selectedButton, setSelectedbutton] = useState("");

  return (
    <div className=" flex h-screen flex-col">
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center  bg-white font-poppins text-main_primary">
        <h1 className="font-bold text-5xl mb-3">Queue</h1>
        <p className="text-xl mb-11">
          Select one of the following to generate a QR queue ticket.
        </p>
        <div className="flex flex-row gap-14">
          <button
            className={`flex justify-center flex-col items-center font-bold text-xl gap-5 `}
            onClick={() => setSelectedbutton("accounts")}
          >
            <img
              className={`${selectedButton === "" ? "w-60 h-60 brightness-100 " : "w-60 h-60 brightness-50 duration-200"} ${selectedButton === "accounts" ? "brightness-100 border-4 border-main_primary rounded-2xl" : ""}`}
              src="/kiosk-images/accounts.png"
              alt="accounts"
            />
            <p>Accounts</p>
          </button>
          <button
            className="flex justify-center flex-col items-center font-bold text-xl gap-5 "
            onClick={() => setSelectedbutton("Deposits and Withdrawals")}
          >
            <img
              className={`${selectedButton === "" ? "w-60 h-60 brightness-100 " : "w-60 h-60 brightness-50 duration-200"}  ${selectedButton === "Deposits and Withdrawals" ? "brightness-100 border-4 border-main_primary rounded-2xl" : ""}`}
              src="/kiosk-images/deposits-and-withdrawal.png"
              alt="Deposits and Withdrawals"
            />
            <p>Deposits and Withdrawals</p>
          </button>
          <button
            className="flex justify-center flex-col items-center font-bold text-xl gap-5"
            onClick={() => setSelectedbutton("Loans and Mortgages")}
          >
            <img
              className={`${selectedButton === "" ? "w-60 h-60 brightness-100 " : "w-60 h-60 brightness-50 duration-200"}  ${selectedButton === "Loans and Mortgages" ? "brightness-100 border-4 border-main_primary rounded-2xl" : ""}`}
              src="/kiosk-images/loans-and-mortgages.png"
              alt="Loans and Mortgages"
            />
            <p>Loans and Mortgages</p>
          </button>
          <button
            className="flex justify-center flex-col items-center font-bold text-xl gap-5"
            onClick={() => setSelectedbutton("Payements and Transfer")}
          >
            <img
              className={`${selectedButton === "" ? "w-60 h-60 brightness-100 " : "w-60 h-60 transition brightness-50 duration-200 "}  ${selectedButton === "Payements and Transfer" ? "brightness-100 border-4 border-main_primary rounded-2xl" : ""}`}
              src="/kiosk-images/payments-and-transfers.png"
              alt="Payements and Transfer"
            />
            <p>Payements and Transfer</p>
          </button>
          <button
            className={
              "flex justify-center flex-col items-center font-bold text-xl gap-5 "
            }
            onClick={() => setSelectedbutton("Customer Service")}
          >
            <img
              className={`${selectedButton === "" ? "w-60 h-60 brightness-100 " : "w-60 h-60 brightness-50 duration-200"}  ${selectedButton === "Customer Service" ? "brightness-100 border-4 border-main_primary rounded-2xl" : ""}`}
              src="/kiosk-images/customers-service.png"
              alt="Customer Service"
            />
            <p>Customer Service</p>
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
      <Footer />
    </div>
  );
}
