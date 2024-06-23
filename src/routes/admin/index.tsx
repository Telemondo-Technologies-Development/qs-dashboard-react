import { Navigate, createFileRoute } from "@tanstack/react-router";
import PageNotFoundComponent from "../-PageNotFoundComponent";

export const Route = createFileRoute("/admin/")({
  component: () => <Navigate to="/admin/login" replace={true} />,
  notFoundComponent: () => <PageNotFoundComponent/>,
  errorComponent: () => <PageNotFoundComponent/>,
});

