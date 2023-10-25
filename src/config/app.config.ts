interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Project Manager', 'Team Member', 'Stakeholder'],
  tenantName: 'Company',
  applicationName: 'fillipe augusto',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage projects', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/af5ff6b2-e98e-462d-9048-ce6037576a94',
};
