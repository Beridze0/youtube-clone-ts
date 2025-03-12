import { Outlet } from "react-router-dom"
import { SidebarProvider } from "../ui/sidebar"
import AppSidebar from "./AppSidebar"

const Layout = () => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <Outlet />
    </SidebarProvider>
  )
}

export default Layout