export const environment = {
  production: true,
  env: 'prod',
  apiHost: 'https://api-dev.ecolab.com', // TODO: This needs to be changed when mulesoft has API's ready
  adalConfig: {
    tenant: 'c1eb5112-7946-4c9d-bc57-40040cfe3a91',
    clientId: '7b7e2d65-388e-48e7-95bd-d79856c8a182',
    endpoints: {
      'https://api-dev.ecolab.com/': '0424e542-1ef6-4a47-81fc-9c533794e78c'
    }
  }
};
