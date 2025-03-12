import { NavLink } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

interface NavRestArray {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface NavRestProps {
  restLinks: NavRestArray[];
}

const NavRest: React.FC<NavRestProps> = ({ restLinks }) => {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            {restLinks.map((link, index) => (
              <SidebarMenuButton key={index} className="cursor-pointer">
                <NavLink to={link.url} className="flex shrink-0 gap-2">
                    <link.icon size={19} />
                    <p className="text-[0.9rem]">{link.name}</p>
                </NavLink>
              </SidebarMenuButton>
            ))}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default NavRest;
