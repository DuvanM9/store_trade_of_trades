export interface IGeneral {
  ListDepartaments: List[];
  ListTypeServices: List[];
  ListBillingModels: List[];
  ListBanks: List[];
  ListTypeAccounts: List[];
  ListStreetTypes: List[];
}

export interface List {
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  ID: string;
  bank?: string;
  billing_model?: string;
  departament?: string;
  street_type?: string;
  account_type?: string;
  service?: string;
}
