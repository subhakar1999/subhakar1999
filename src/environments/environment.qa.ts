export const environment = {
  production: false,
  env: 'qa',
  apiHost: 'https://api-dev.ecolab.com', // TODO: This needs to be changed when mulesoft has API's ready
  adalConfig: {
    tenant: 'c1eb5112-7946-4c9d-bc57-40040cfe3a91',
    clientId: '27bbfa50-6d80-4d71-9d6b-b038726371cb',
    endpoints: {
      'https://api-dev.ecolab.com/': '0424e542-1ef6-4a47-81fc-9c533794e78c'
    }
  }
};
