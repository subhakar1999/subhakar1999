// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env: 'dev',
  apiHost: 'https://api-dev.ecolab.com', // TODO: This needs to be changed when mulesoft has API's ready
  adalConfig: {
    tenant: 'ecolab.com',
    clientId: 'de4ccc0c-c5ad-4c34-963e-93990d1f9840',
    endpoints: {
      'https://api-dev.ecolab.com/': '0424e542-1ef6-4a47-81fc-9c533794e78c'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
