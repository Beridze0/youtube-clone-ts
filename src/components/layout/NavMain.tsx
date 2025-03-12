import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

interface NavMainArray {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface NavMainProps {
  mainLinks: NavMainArray[];
}

const NavMain: React.FC<NavMainProps> = ({ mainLinks }) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            {mainLinks.map((link, index) => (
              <SidebarMenuButton key={index} className="mt-1 cursor-pointer">
                <NavLink
                  to={link.url}
                  className="flex shrink-0 items-center gap-2 "
                >
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

export default NavMain;
