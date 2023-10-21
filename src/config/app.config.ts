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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read car information',
    'Read booking information',
    'Read location information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage car information',
    'Manage bookings',
    'Manage operations dashboard',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/b70c3a0e-b4d3-46d3-a4b3-04a55918715e',
};
