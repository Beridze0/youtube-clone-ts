import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import AppSidebar from "./AppSidebar"


const Layout = () => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />

    </SidebarProvider>
  )
}

export default Layout