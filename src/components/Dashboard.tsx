
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vault, Clock, DollarSign, TrendingUp } from "lucide-react";
import { VaultCard } from "@/components/VaultCard";
import { mockVaults } from "@/lib/mockData";

export const Dashboard = () => {
  const totalLocked = mockVaults.reduce((sum, vault) => sum + vault.amount, 0);
  const activeVaults = mockVaults.filter(vault => vault.status === "active").length;
  const completedVaults = mockVaults.filter(vault => vault.status === "completed").length;

  const stats = [
    {
      title: "Total Locked Value",
      value: `$${totalLocked.toLocaleString()}`,
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Active Vaults",
      value: activeVaults.toString(),
      icon: Vault,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Releases",
      value: completedVaults.toString(),
      icon: Clock,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Growth Rate",
      value: "+12.5%",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const recentVaults = mockVaults.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h2>
        <p className="text-slate-600">Monitor your time-locked assets and vault performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.gradient} w-fit mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Vaults */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-slate-800">Recent Vaults</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {recentVaults.map((vault) => (
              <VaultCard key={vault.id} vault={vault} compact />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
