export interface IUserAlignmetFromAPI {
  code: number;
  message: string;
  correlationid: string;
  territory: IUserTerritoryFromAPI;
}

export interface IUserTerritoryFromAPI {
  firstname: string;
  lastname: string;
  legacycode: string;
  territorycode: string;
  companycode: string;
  countrycode: string;
  territoryname: string;
  regioncode: string;
  divisioncode: string;
}

export interface IUser {
  email: string;
  isTerritoryManager: boolean;
  firstName: string;
  lastName: string;
  legacyCode: string;
  territoryCode: string;
  territoryName: string;
  regionCode: string;
  companyCode: string;
  divisionCode: string;
  countryCode: string;
}
