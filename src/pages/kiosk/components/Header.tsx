import KBQSLogo from "/kiosk.png"

export default function Header() {
  return (
    <header className="bg-[#2F4E6E] text-white py-3 px-12">
      <div className="flex justify-between">
        <div className="flex ">
          <img src={KBQSLogo} alt="kbqslogo" height={113} width={113} className=""/>
          <div className="self-center pl-5">
            <h1 className="text-[48px] font-bold">KIOSK</h1>
            <p className="text-[24px] leading-">Queuing and Billing System</p>
          </div>
        </div>
        <div className="self-center">
          <h1 className="text-[24px] font-bold text-right">January 1, 2021</h1>
          <p className="text-[24px] text-right ">03:32:09 PM</p>
        </div>
      </div>
    </header>
  );
}
