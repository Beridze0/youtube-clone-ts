import { SidebarProvider } from "../ui/sidebar"
import AppSidebar from "./AppSidebar"


const Layout = () => {
  return (
    <SidebarProvider>
        <AppSidebar />

    </SidebarProvider>
  )
}

export default Layout