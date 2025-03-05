import { NavLink } from "react-router-dom"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../ui/sidebar"

interface MainItems {
    name: string,
    url: string,
    icon: React.ElementType
}

interface MainProps {
    mainItems: MainItems[]
}

const NavMain: React.FC<MainProps> = ({ mainItems }) => {
  return (
    <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        mainItems.map((item, index)=>(
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <NavLink to={item.url}> 
                                        <item.icon />
                                        <p>{item.name}</p>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
  )
}

export default NavMain