export default function StaffDashboard() {
    return (
      <div className="flex flex-col flex-1 bg-main_extra py-8 px-16 rounded-2xl gap-y-4">
        <div className="flex justify-between">
          <div className="text-xl self-center">Counter 1</div>
          <button className="text-lg bg-main_primary text-main_white py-2 px-8 rounded-md">
            Call Next Number
          </button>
        </div>
        <div className="flex justify-center bg-main_white rounded-lg gap-x-16">
          <div className="flex flex-col justify-center py-4">
            <div className="text-xl text-center pb-6 font-semibold">
              Currently Serving
            </div>
            <div className="text-8xl text-center font-semibold">R-179</div>
          </div>
          <div className="flex flex-col py-8 gap-2 self-center">
            <div>
              <div className="text-lg font-semibold">Processing Time:</div>
              <div className="text-base">00:02:37</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Transaction:</div>
              <div className="text-base">Loans and Mortgages</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Last Called:</div>
              <div className="text-base">R-179</div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 justify-between">
          <div className="bg-main_white pt-4 pb-10 px-8 rounded-lg w-48">
            <div className="text-center font-semibold">Waiting: 5</div>
            <ol className="text-center">
              <li>R-180</li>
              <li>R-181</li>
              <li>R-182</li>
              <li>R-183</li>
              <li>R-184</li>
              <li>R-185</li>
            </ol>
          </div>
          <div className="bg-main_white pt-4 pb-10 px-8 rounded-lg w-48">
            <div className="text-center font-semibold">Cancelled: 2</div>
            <ol className="text-center">
              <li>PW-180</li>
              <li>R-168</li>
              <li>R-182</li>
            </ol>
          </div>
          <div className="bg-main_white pt-4 pb-10 px-8 rounded-lg w-48">
            <div className="text-center font-semibold">No Show: 0</div>
            <ol className="text-center">
              <li>No show list is empty</li>
            </ol>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-black/80 text-main_white py-4 px-8 rounded-lg w-48 flex flex-col items-center">
            <img src="/no_show.svg" alt="no show button icon" className="mb-2" />
            No Show
          </button>
          <button className="bg-main_secondary text-main_white py-4 px-8 rounded-lg w-48 flex flex-col items-center">
            <img
              src="/call_again.svg"
              alt="call again button icon"
              className="mb-2"
            />
            Call Again
          </button>
          <button className="bg-main_primary text-main_white py-4 px-8 rounded-lg w-48 flex flex-col items-center">
            <img
              src="/finished.svg"
              alt="finished button icon"
              className="mb-2"
            />
            Finished
          </button>
        </div>
      </div>
    );
  }
  
  