
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Calendar, DollarSign, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CreateVault = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    recipient: "",
    amount: "",
    token: "USDC",
    unlockDate: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.recipient || !formData.amount || !formData.unlockDate) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Vault Created Successfully!",
      description: `Time vault "${formData.name}" has been created and funds locked.`,
    });

    // Reset form
    setFormData({
      name: "",
      recipient: "",
      amount: "",
      token: "USDC",
      unlockDate: "",
      description: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Create Time Vault</h2>
        <p className="text-slate-600">Lock funds for a specified time period with secure smart contracts</p>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Plus className="h-5 w-5 mr-2" />
            New Time Vault
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">Vault Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Team Vesting Q1"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="token" className="text-slate-700">Token</Label>
                <Select value={formData.token} onValueChange={(value) => setFormData({ ...formData, token: value })}>
                  <SelectTrigger className="bg-white/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USDC">USDC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="BTC">WBTC</SelectItem>
                    <SelectItem value="DAI">DAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recipient" className="text-slate-700 flex items-center">
                <User className="h-4 w-4 mr-1" />
                Recipient Address *
              </Label>
              <Input
                id="recipient"
                placeholder="0x..."
                value={formData.recipient}
                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                className="bg-white/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-slate-700 flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Amount *
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="bg-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="unlockDate" className="text-slate-700 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Unlock Date *
                </Label>
                <Input
                  id="unlockDate"
                  type="datetime-local"
                  value={formData.unlockDate}
                  onChange={(e) => setFormData({ ...formData, unlockDate: e.target.value })}
                  className="bg-white/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-slate-700">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Add notes about this vault..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/50"
                rows={3}
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Summary</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>• Lock {formData.amount || "0"} {formData.token} until {formData.unlockDate ? new Date(formData.unlockDate).toLocaleDateString() : "date not set"}</p>
                <p>• Recipient: {formData.recipient || "not specified"}</p>
                <p>• Funds will be automatically released to the recipient address</p>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
            >
              Create Time Vault
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
