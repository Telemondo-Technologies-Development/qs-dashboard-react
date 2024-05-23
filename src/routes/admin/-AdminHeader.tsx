

export default function AdminHeader() {
    return (
        <div className="flex items-center justify-between px-10 pt-6 pb-3">
          <p className="text-3xl font-bold">Header Title</p>
          <div className="flex items-center gap-10">
            <img src="/notification.svg" className="size-5" />
            <div className="flex items-center gap-[10px]">
              <img src="/user-icon.svg" className="size-5" />
              <p className="text-sm font-bold">John Doe</p>
            </div>
          </div>
        </div>
    )
}