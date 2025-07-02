"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/icon";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false }); 
      router.push("/login"); 
      router.refresh(); 

    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="w-full flex items-center gap-2">
      <Icon icon="heroicons:power" className="w-4 h-4" />
      Log out
    </button>
  );
};

export default LogoutButton;
