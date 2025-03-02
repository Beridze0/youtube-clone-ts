import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

export default function Layout() {
  return (
    <SidebarProvider>
        <AppSidebar />
        <Outlet />
    </SidebarProvider>
  );
}
