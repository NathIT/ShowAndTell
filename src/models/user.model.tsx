export interface User {
  clientId: number;
  clientPartyId: number;
  name?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  isUserAdmin: boolean;
  loginId: number;
  partyId: number;
  deleted: boolean;
  branchId?: number | undefined;
  retailerId: number;
  state?: string | undefined;
  countryCode?: string | undefined;
  isMajor: boolean;
  isResellerAdmin: boolean;
}
