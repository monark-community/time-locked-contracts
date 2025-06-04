
import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { CreateVault } from "@/components/CreateVault";
import { VaultList } from "@/components/VaultList";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "create":
        return <CreateVault />;
      case "vaults":
        return <VaultList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
