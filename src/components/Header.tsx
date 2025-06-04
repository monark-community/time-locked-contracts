
import { Button } from "@/components/ui/button";
import { Wallet, Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TimeVault
            </h1>
            <p className="text-sm text-slate-600">Secure Time-Locked Transactions</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-700">0xAbc...def</p>
            <p className="text-xs text-slate-500">Connected</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Wallet className="h-4 w-4 mr-2" />
            Connected
          </Button>
        </div>
      </div>
    </header>
  );
};
