
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus, Layout, Vault, Clock } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Layout },
    { id: "create", label: "Create Vault", icon: Plus },
    { id: "vaults", label: "My Vaults", icon: Vault },
  ];

  return (
    <aside className="w-64 bg-white/60 backdrop-blur-md border-r border-slate-200 min-h-[calc(100vh-80px)]">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-left",
                  activeTab === item.id 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" 
                    : "hover:bg-slate-100"
                )}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
