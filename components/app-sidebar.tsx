"use client";
import {
  BlocksIcon,
  DatabaseIcon,
  StarIcon,
  LogOutIcon,
  RocketIcon,
  CreditCardIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import Image from "next/image";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const NavItems = [
    {
      pathname: "/workflows",
      label: "Workflows",
      isActive: pathname === "/workflows",
      icon: <BlocksIcon />,
    },
    {
      pathname: "/credentials",
      label: "Credentials",
      isActive: pathname === "/credentials",
      icon: <DatabaseIcon />,
    },
    {
      pathname: "/executions",
      label: "Executions",
      isActive: pathname === "/executions",
      icon: <RocketIcon />,
    },
  ];

  const logOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/">
                <SidebarMenuButton asChild>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={"/logo/logo.svg"}
                      alt="Automation studio"
                      width={34}
                      height={34}
                    />
                    <span className=" font-semibold">Automation Studio</span>
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="w-full gap-y-0.5">
            {NavItems.map((item) => (
              <SidebarMenuItem key={item.pathname}>
                <Link href={item.pathname} prefetch>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="h-10 cursor-pointer"
                  >
                    <div className="gap-x-2.5">
                      {item.icon}
                      {item.label}
                    </div>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu className="gap-y-0.5">
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-10 cursor-pointer">
                <div className="gap-x-2.5">
                  <StarIcon />
                  <span>Upgrade</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-10 cursor-pointer">
                <div className="gap-x-2.5">
                  <CreditCardIcon />
                  <span>Billing Portal</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={logOut}
                asChild
                className="h-10 cursor-pointer"
              >
                <div className="gap-x-2.5">
                  <LogOutIcon />
                  <span>Logout</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
