"use client";
import { Blocks } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const NavItems = [
    {
      pathname: "/workflows",
      label: "Workflows",
      isActive: pathname === "/workflows",
      icon: "lucide:activity",
    },
    {
      pathname: "/credentials",
      label: "Credentials",
      isActive: pathname === "/credentials",
    },
    {
      pathname: "/executions",
      label: "Executions",
      isActive: pathname === "/executions",
    },
  ];

  return (
    <Sidebar variant="inset">
      <SidebarHeader >
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu>
          {NavItems.map((item) => (
            <SidebarMenuItem key={item.pathname}>
              <Link href={item.pathname}>{item.label}</Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
