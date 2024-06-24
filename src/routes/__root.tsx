import { createRootRoute, Outlet } from "@tanstack/react-router";
import PageNotFoundComponent from "./-PageNotFoundComponent";
export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <PageNotFoundComponent/>
});
