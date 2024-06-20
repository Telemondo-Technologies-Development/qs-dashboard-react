// import { createRootRoute, Outlet } from '@tanstack/react-router'

// export const Route = createRootRoute({
//   component: () => (<Outlet />),
// })

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    
      <Outlet />
    
  ),
});
