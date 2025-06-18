export interface Account {
  id: number;
  balance: number;
  created_at: Date;
}

export interface CreateAccountRequest {
  // Add any required fields for account creation
}

export interface CreditDebitRequest {
  amount: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 