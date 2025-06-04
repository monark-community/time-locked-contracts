
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, User, DollarSign, Unlock } from "lucide-react";
import { Vault } from "@/lib/types";
import { CountdownTimer } from "@/components/CountdownTimer";

interface VaultCardProps {
  vault: Vault;
  compact?: boolean;
}

export const VaultCard = ({ vault, compact = false }: VaultCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const isUnlockable = vault.status === "active" && new Date(vault.unlockDate) <= new Date();

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className={`${compact ? 'text-lg' : 'text-xl'} font-semibold text-slate-800`}>
            {vault.name}
          </CardTitle>
          <Badge className={getStatusColor(vault.status)}>
            {vault.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-slate-600">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>${vault.amount.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <User className="h-4 w-4 mr-1" />
            <span>{vault.recipient.slice(0, 6)}...{vault.recipient.slice(-4)}</span>
          </div>
        </div>

        {vault.status === "active" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Time Remaining</span>
              <Clock className="h-4 w-4 text-slate-500" />
            </div>
            <CountdownTimer targetDate={vault.unlockDate} compact={compact} />
            <Progress value={vault.progress} className="h-2" />
          </div>
        )}

        {vault.status === "completed" && (
          <div className="text-center py-2">
            <div className="flex items-center justify-center text-green-600 text-sm">
              <Unlock className="h-4 w-4 mr-2" />
              Released on {new Date(vault.unlockDate).toLocaleDateString()}
            </div>
          </div>
        )}

        {!compact && isUnlockable && (
          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            <Unlock className="h-4 w-4 mr-2" />
            Unlock Funds
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
