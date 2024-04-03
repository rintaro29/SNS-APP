"use client";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className=" rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-400 cursor-pointer lg:hidden"
    >
      <Star size={24} />
    </div>
  );
};

export default SidebarLogo;
