import { createFileRoute } from "@tanstack/react-router";
import RenderBasedOnRole from "../-RenderBasedOnRole";
import { useGetUsers } from "@/api/users";
import { useUserManagementStore } from "@/stores/admin/userMgmt";
import UserActionDialog from "./-UserActionDialog";

export const Route = createFileRoute("/admin/user-management/")({
  component: () => <UserManagement />,
});

function UserManagement() {
  const { data: users, isLoading, error } = useGetUsers();
  const { toggleUserActionDialog } = useUserManagementStore();

  const loadingScreen = (
    <div className="grid flex-1 text-xl font-semibold place-items-center">
      Loading...
    </div>
  );

  const errorScreen = (
    <div className="grid flex-1 text-lg font-semibold place-items-center">
      Error: {error?.message}
    </div>
  );

  const Admin = (
    <div className="flex flex-col flex-1 py-8 pl-8 overflow-y-auto transition-all gap-7">
      <UserActionDialog />
      <div className="flex justify-end pr-8">
        <button
          onClick={() => toggleUserActionDialog()}
          className="px-6 py-1 font-medium text-white rounded-sm bg-main_primary"
        >
          Add Employee
        </button>
      </div>
      {isLoading ? (
        loadingScreen
      ) : error ? (
        errorScreen
      ) : (
        <div className="grid flex-1 pr-8 overflow-y-auto grid-cols-auto-fill-250 gap-y-5 gap-x-5">
          {users?.content.map((user) => {
            return (
              <div
                key={user.id}
                className="w-full rounded-xl h-72 bg-main_extra"
              >
                {user.email}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return <RenderBasedOnRole adminComponent={Admin} />;
}
