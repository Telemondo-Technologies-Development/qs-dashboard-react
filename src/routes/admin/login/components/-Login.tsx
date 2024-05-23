export default function Login() {
  return (
    <div className="flex flex-col bg-main_white rounded-lg place-items-center gap-10 px-[70px] pt-[50px] pb-[100px] font-poppins">
      <img src="/kiosk-logo.png" alt="kbqs logo" className="size-[10rem]" />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-center">ADMIN PANEL</h1>
        <p className="text-center">Login to access your admin account</p>
      </div>
      <form className="flex flex-col place-items-center gap-5 w-[100%]" action="">
        <input
          placeholder="username"
          type="text"
          className="rounded-lg border-black border-[1px] w-[100%] h-[30px]"
        />
        <input
          placeholder="password"
          type="text"
          className="rounded-lg border-black border-[1px] w-[100%] h-[30px]"
        />
      </form>
      <button className="px-[70px] py-2 bg-main_primary text-main_white rounded-md">Login</button>
    </div>
  );
}
