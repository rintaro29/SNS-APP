interface SidebarItemProps {
  label: string;
  href?: string;
  icon: React.ElementType;
  //   onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, href, icon: Icon }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-00 cursor-pointer lg:hidden">
        <Icon size={24} />
      </div>
    </div>
  );
};

export default SidebarItem;
