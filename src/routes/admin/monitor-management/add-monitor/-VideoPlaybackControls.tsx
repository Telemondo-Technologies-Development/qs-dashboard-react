export default function VideoPlaybackControls() {
    return (
      <div className="flex justify-around w-full py-2 bg-main_primary">
        <button>
          <img src="/shuffle.svg" alt="" className="size-6" />
        </button>
        <button>
          <img src="/previous.svg" alt="" className="size-6" />
        </button>
        <button>
          <img src="/pause-circle.svg" alt="" className="size-6" />
        </button>
        <button>
          <img src="/next.svg" alt="" className="size-6" />
        </button>
        <button>
          <img src="/repeate-one.svg" alt="" className="size-6" />
        </button>
      </div>
    );
  }