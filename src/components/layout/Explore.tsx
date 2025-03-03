import { NavLink } from "react-router-dom"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"

interface ExploreItem {
    name: string,
    url: string,
    icon: React.ElementType
}

interface ExploreProps{
    explore: ExploreItem[]
}


const Explore: React.FC<ExploreProps> = ({ explore }) => {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarGroupContent>
            <SidebarMenu>
                {
                    explore.map((item,index)=>(
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

export default Explore