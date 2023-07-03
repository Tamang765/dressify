import { AdminLayout } from "../../../layouts/AdminLayout";
import Dashboard from "./Dashboard";

export const adminRoute = {
    page: Dashboard,
    layout: AdminLayout,
    path: "/admin-panel",
    exact: true
}