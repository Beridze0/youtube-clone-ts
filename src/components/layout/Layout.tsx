import { Outlet } from "react-router-dom"
import { SidebarProvider } from "../ui/sidebar"
import AppSidebar from "./AppSidebar"
import Navbar from "./Navbar"


const Layout = () => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
            <Navbar />
            <Outlet />
        </div>
    </SidebarProvider>
  )
}

export default Layout