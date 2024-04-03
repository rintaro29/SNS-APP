import { Bell, Home, User } from "lucide-react";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const items = [
    { label: "Home", href: "/", icon: Home },
    { label: "Notification", href: "/notification", icon: Bell },
    { label: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.label} label={item.label} href={item.href} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
