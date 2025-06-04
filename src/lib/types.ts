
export interface Vault {
  id: string;
  name: string;
  recipient: string;
  amount: number;
  token: string;
  unlockDate: string;
  createdDate: string;
  status: "active" | "completed" | "pending";
  progress: number;
  description?: string;
}

export interface Transaction {
  id: string;
  vaultId: string;
  vaultName: string;
  type: "created" | "unlocked" | "modified";
  amount: number;
  token: string;
  date: string;
  recipient: string;
  txHash?: string;
}
