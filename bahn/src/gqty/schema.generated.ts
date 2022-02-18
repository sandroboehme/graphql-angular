/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export enum FacilityState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  UNKNOWN = "UNKNOWN",
}

export enum FacilityType {
  ELEVATOR = "ELEVATOR",
  ESCALATOR = "ESCALATOR",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  FacilityState: true,
  FacilityType: true,
  Float: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  BikeAttributes: {
    __typename: { __type: "String!" },
    licensePlate: { __type: "String!" },
  },
  CarAttributes: {
    __typename: { __type: "String!" },
    color: { __type: "String!" },
    doors: { __type: "Int!" },
    fillLevel: { __type: "Int" },
    fuel: { __type: "String" },
    licensePlate: { __type: "String" },
    seats: { __type: "Int!" },
    transmissionType: { __type: "String!" },
  },
  CarEquipment: {
    __typename: { __type: "String!" },
    airConditioning: { __type: "Boolean" },
    audioInline: { __type: "Boolean" },
    bluetoothHandsFreeCalling: { __type: "Boolean" },
    cdPlayer: { __type: "Boolean" },
    cruiseControl: { __type: "Boolean" },
    isofixSeatFittings: { __type: "Boolean" },
    navigationSystem: { __type: "Boolean" },
    particulateFilter: { __type: "Boolean" },
    passengerAirbagTurnOff: { __type: "Boolean" },
    roofRailing: { __type: "Boolean" },
    tyreType: { __type: "String" },
  },
  Facility: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    equipmentNumber: { __type: "Int" },
    location: { __type: "Location" },
    state: { __type: "FacilityState!" },
    type: { __type: "FacilityType!" },
  },
  FlinksterBike: {
    __typename: { __type: "String!" },
    address: { __type: "MailingAddress!" },
    attributes: { __type: "BikeAttributes!" },
    bookingUrl: { __type: "String!" },
    description: { __type: "String!" },
    id: { __type: "String!" },
    location: { __type: "Location!" },
    name: { __type: "String!" },
    parkingArea: { __type: "FlinksterParkingArea!" },
    priceOptions: { __type: "[PriceOption]!" },
    providerRentalObjectId: { __type: "Int!" },
    rentalModel: { __type: "String!" },
    type: { __type: "String!" },
    url: { __type: "String!" },
  },
  FlinksterCar: {
    __typename: { __type: "String!" },
    attributes: { __type: "CarAttributes!" },
    category: { __type: "String!" },
    description: { __type: "String!" },
    equipment: { __type: "CarEquipment!" },
    id: { __type: "String!" },
    location: { __type: "Location!" },
    name: { __type: "String!" },
    parkingArea: { __type: "FlinksterParkingArea!" },
    priceOptions: { __type: "[PriceOption]!" },
    rentalModel: { __type: "String!" },
    url: { __type: "String!" },
  },
  FlinksterParkingArea: {
    __typename: { __type: "String!" },
    GeoJSON: { __type: "GeoJSON" },
    accessDescription: { __type: "String" },
    address: { __type: "MailingAddress!" },
    id: { __type: "String!" },
    locationDescription: { __type: "String" },
    name: { __type: "String!" },
    parkingDescription: { __type: "String" },
    position: { __type: "Location!" },
    provider: { __type: "FlinksterProvider!" },
    publicTransport: { __type: "String" },
    type: { __type: "String!" },
    url: { __type: "String!" },
  },
  FlinksterProvider: {
    __typename: { __type: "String!" },
    areaId: { __type: "Int!" },
    networkIds: { __type: "[Int!]!" },
    url: { __type: "String!" },
  },
  GeoFeature: {
    __typename: { __type: "String!" },
    geometry: { __type: "GeoPolygon!" },
    properties: { __type: "GeoProperties!" },
    type: { __type: "String!" },
  },
  GeoJSON: {
    __typename: { __type: "String!" },
    features: { __type: "[GeoFeature!]!" },
    type: { __type: "String!" },
  },
  GeoPolygon: {
    __typename: { __type: "String!" },
    coordinates: { __type: "[[[[Float]]]]!" },
    type: { __type: "String!" },
  },
  GeoProperties: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
  },
  Location: {
    __typename: { __type: "String!" },
    latitude: { __type: "Float!" },
    longitude: { __type: "Float!" },
  },
  MailingAddress: {
    __typename: { __type: "String!" },
    city: { __type: "String!" },
    street: { __type: "String!" },
    zipcode: { __type: "String!" },
  },
  Nearby: {
    __typename: { __type: "String!" },
    bikes: {
      __type: "[FlinksterBike!]!",
      __args: { count: "Int", offset: "Int" },
    },
    flinksterCars: {
      __type: "[FlinksterCar!]!",
      __args: { count: "Int", offset: "Int" },
    },
    parkingSpaces: {
      __type: "[ParkingSpace!]!",
      __args: { count: "Int", offset: "Int" },
    },
    stations: {
      __type: "[Station!]!",
      __args: { count: "Int", offset: "Int" },
    },
    travelCenters: {
      __type: "[TravelCenter!]!",
      __args: { count: "Int", offset: "Int" },
    },
  },
  Occupancy: {
    __typename: { __type: "String!" },
    category: { __type: "Int!" },
    text: { __type: "String!" },
    timeSegment: { __type: "String!" },
    timestamp: { __type: "String!" },
    validData: { __type: "Boolean!" },
  },
  OpeningTime: {
    __typename: { __type: "String!" },
    from: { __type: "String!" },
    to: { __type: "String!" },
  },
  OpeningTimes: {
    __typename: { __type: "String!" },
    friday: { __type: "OpeningTime" },
    holiday: { __type: "OpeningTime" },
    monday: { __type: "OpeningTime" },
    saturday: { __type: "OpeningTime" },
    sunday: { __type: "OpeningTime" },
    thursday: { __type: "OpeningTime" },
    tuesday: { __type: "OpeningTime" },
    wednesday: { __type: "OpeningTime" },
  },
  OperationLocation: {
    __typename: { __type: "String!" },
    UIC: { __type: "String!" },
    abbrev: { __type: "String!" },
    borderStation: { __type: "Boolean" },
    id: { __type: "String" },
    locationCode: { __type: "String" },
    name: { __type: "String!" },
    regionId: { __type: "String" },
    shortName: { __type: "String!" },
    status: { __type: "String" },
    timeTableRelevant: { __type: "Boolean" },
    type: { __type: "String!" },
    validFrom: { __type: "String!" },
    validTill: { __type: "String" },
  },
  ParkingPriceOption: {
    __typename: { __type: "String!" },
    duration: { __type: "String!" },
    id: { __type: "Int!" },
    price: { __type: "Float" },
  },
  ParkingSpace: {
    __typename: { __type: "String!" },
    address: { __type: "MailingAddress" },
    allowedPropulsions: { __type: "String" },
    clearanceHeight: { __type: "String" },
    clearanceWidth: { __type: "String" },
    distance: { __type: "String" },
    facilityType: { __type: "String" },
    facilityTypeEn: { __type: "String" },
    hasChargingStation: { __type: "String" },
    id: { __type: "Int!" },
    isDiscountDbBahnCard: { __type: "Boolean!" },
    isDiscountDbBahnComfort: { __type: "Boolean!" },
    isDiscountDbParkAndRail: { __type: "Boolean!" },
    isMonthParkAndRide: { __type: "Boolean!" },
    isMonthSeason: { __type: "Boolean!" },
    isMonthVendingMachine: { __type: "Boolean!" },
    isOutOfService: { __type: "Boolean!" },
    isSpecialProductDb: { __type: "Boolean!" },
    label: { __type: "String" },
    location: { __type: "Location" },
    name: { __type: "String" },
    nameDisplay: { __type: "String" },
    numberHandicapedPlaces: { __type: "String" },
    numberParkingPlaces: { __type: "String" },
    occupancy: { __type: "Occupancy" },
    openingHours: { __type: "String" },
    openingHoursEn: { __type: "String" },
    operator: { __type: "String" },
    operatorUrl: { __type: "String" },
    outOfService: { __type: "Boolean!" },
    outOfServiceText: { __type: "String" },
    outOfServiceTextEn: { __type: "String" },
    reservation: { __type: "String" },
    responsibility: { __type: "String" },
    slogan: { __type: "String" },
    sloganEn: { __type: "String" },
    source: { __type: "String" },
    spaceNumber: { __type: "String" },
    spaceType: { __type: "String" },
    spaceTypeEn: { __type: "String" },
    spaceTypeName: { __type: "String" },
    station: { __type: "Station" },
    tariffDiscount: { __type: "String" },
    tariffDiscountEn: { __type: "String" },
    tariffFreeParkingTime: { __type: "String" },
    tariffFreeParkingTimeEn: { __type: "String" },
    tariffPaymentCustomerCards: { __type: "String" },
    tariffPaymentOptions: { __type: "String" },
    tariffPaymentOptionsEn: { __type: "String" },
    tariffPrices: { __type: "[ParkingPriceOption!]!" },
    type: { __type: "String" },
    url: { __type: "String" },
  },
  Photographer: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    url: { __type: "String!" },
  },
  Picture: {
    __typename: { __type: "String!" },
    id: { __type: "Int!" },
    license: { __type: "String!" },
    photographer: { __type: "Photographer!" },
    url: { __type: "String!" },
  },
  PriceOption: {
    __typename: { __type: "String!" },
    currency: { __type: "String!" },
    grossamount: { __type: "Float!" },
    interval: { __type: "Int" },
    preferredprice: { __type: "Boolean!" },
    taxrate: { __type: "Float!" },
    type: { __type: "String!" },
  },
  Product: {
    __typename: { __type: "String!" },
    class: { __type: "Int" },
    name: { __type: "String" },
    productCode: { __type: "Int" },
    productName: { __type: "String" },
  },
  RegionalArea: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    number: { __type: "Int!" },
    shortName: { __type: "String!" },
  },
  Route: {
    __typename: { __type: "String!" },
    from: { __type: "Station" },
    parts: { __type: "[RoutePart!]!" },
    to: { __type: "Station" },
  },
  RoutePart: {
    __typename: { __type: "String!" },
    arrivingTrack: { __type: "Track" },
    delay: { __type: "Int" },
    departingTrack: { __type: "Track" },
    direction: { __type: "String!" },
    end: { __type: "String!" },
    from: { __type: "Station!" },
    product: { __type: "Product" },
    start: { __type: "String!" },
    to: { __type: "Station!" },
  },
  Searchable: {
    __typename: { __type: "String!" },
    operationLocations: { __type: "[OperationLocation!]!" },
    stations: { __type: "[Station!]!" },
  },
  Station: {
    __typename: { __type: "String!" },
    DBInformationOpeningTimes: { __type: "OpeningTimes" },
    aufgabentraeger: { __type: "StationContact!" },
    category: { __type: "Int!" },
    facilities: { __type: "[Facility!]!" },
    federalState: { __type: "String!" },
    hasBicycleParking: { __type: "Boolean!" },
    hasCarRental: { __type: "Boolean!" },
    hasDBLounge: { __type: "Boolean!" },
    hasLocalPublicTransport: { __type: "Boolean!" },
    hasLockerSystem: { __type: "Boolean!" },
    hasLostAndFound: { __type: "Boolean!" },
    hasMobilityService: { __type: "String!" },
    hasParking: { __type: "Boolean!" },
    hasPublicFacilities: { __type: "Boolean!" },
    hasRailwayMission: { __type: "Boolean!" },
    hasSteamPermission: { __type: "Boolean!" },
    hasSteplessAccess: { __type: "String!" },
    hasTaxiRank: { __type: "Boolean!" },
    hasTravelCenter: { __type: "Boolean!" },
    hasTravelNecessities: { __type: "Boolean!" },
    hasWiFi: { __type: "Boolean!" },
    localServiceStaffAvailability: { __type: "OpeningTimes" },
    location: { __type: "Location" },
    mailingAddress: { __type: "MailingAddress!" },
    name: { __type: "String!" },
    parkingSpaces: { __type: "[ParkingSpace!]!" },
    picture: { __type: "Picture" },
    priceCategory: { __type: "Int!" },
    primaryEvaId: { __type: "Int" },
    primaryRil100: { __type: "String" },
    regionalArea: { __type: "RegionalArea!" },
    stationManagement: { __type: "StationContact!" },
    stationNumber: { __type: "Int" },
    szentrale: { __type: "StationContact!" },
    timeTableOffice: { __type: "StationContact" },
    timetable: { __type: "Timetable!" },
    tracks: { __type: "[Track!]!" },
  },
  StationContact: {
    __typename: { __type: "String!" },
    email: { __type: "String" },
    name: { __type: "String!" },
    number: { __type: "String" },
    phoneNumber: { __type: "String" },
    shortName: { __type: "String" },
  },
  Timetable: {
    __typename: { __type: "String!" },
    nextArrivals: { __type: "[TrainInStation!]!" },
    nextDepatures: { __type: "[TrainInStation!]!" },
  },
  Track: {
    __typename: { __type: "String!" },
    height: { __type: "Int!" },
    length: { __type: "Int" },
    name: { __type: "String!" },
    number: { __type: "String!" },
    platform: { __type: "String!" },
  },
  TrainInStation: {
    __typename: { __type: "String!" },
    platform: { __type: "String!" },
    stops: { __type: "[String!]!" },
    time: { __type: "String!" },
    trainNumber: { __type: "String!" },
    type: { __type: "String!" },
  },
  TravelCenter: {
    __typename: { __type: "String!" },
    address: { __type: "MailingAddress" },
    id: { __type: "Int" },
    location: { __type: "Location" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    nearby: {
      __type: "Nearby!",
      __args: { latitude: "Float!", longitude: "Float!", radius: "Int" },
    },
    parkingSpace: { __type: "ParkingSpace", __args: { id: "Int" } },
    routing: { __type: "[Route!]!", __args: { from: "Int!", to: "Int!" } },
    search: { __type: "Searchable!", __args: { searchTerm: "String" } },
    stationWithEvaId: { __type: "Station", __args: { evaId: "Int!" } },
    stationWithRill100: { __type: "Station", __args: { rill100: "String!" } },
    stationWithStationNumber: {
      __type: "Station",
      __args: { stationNumber: "Int!" },
    },
  },
  subscription: {},
} as const;

export interface BikeAttributes {
  __typename?: "BikeAttributes";
  licensePlate: ScalarsEnums["String"];
}

export interface CarAttributes {
  __typename?: "CarAttributes";
  color: ScalarsEnums["String"];
  doors: ScalarsEnums["Int"];
  fillLevel?: Maybe<ScalarsEnums["Int"]>;
  fuel?: Maybe<ScalarsEnums["String"]>;
  licensePlate?: Maybe<ScalarsEnums["String"]>;
  seats: ScalarsEnums["Int"];
  transmissionType: ScalarsEnums["String"];
}

export interface CarEquipment {
  __typename?: "CarEquipment";
  airConditioning?: Maybe<ScalarsEnums["Boolean"]>;
  audioInline?: Maybe<ScalarsEnums["Boolean"]>;
  bluetoothHandsFreeCalling?: Maybe<ScalarsEnums["Boolean"]>;
  cdPlayer?: Maybe<ScalarsEnums["Boolean"]>;
  cruiseControl?: Maybe<ScalarsEnums["Boolean"]>;
  isofixSeatFittings?: Maybe<ScalarsEnums["Boolean"]>;
  navigationSystem?: Maybe<ScalarsEnums["Boolean"]>;
  particulateFilter?: Maybe<ScalarsEnums["Boolean"]>;
  passengerAirbagTurnOff?: Maybe<ScalarsEnums["Boolean"]>;
  roofRailing?: Maybe<ScalarsEnums["Boolean"]>;
  tyreType?: Maybe<ScalarsEnums["String"]>;
}

export interface Facility {
  __typename?: "Facility";
  description?: Maybe<ScalarsEnums["String"]>;
  equipmentNumber?: Maybe<ScalarsEnums["Int"]>;
  location?: Maybe<Location>;
  state: ScalarsEnums["FacilityState"];
  type: ScalarsEnums["FacilityType"];
}

export interface FlinksterBike {
  __typename?: "FlinksterBike";
  address: MailingAddress;
  attributes: BikeAttributes;
  bookingUrl: ScalarsEnums["String"];
  description: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  location: Location;
  name: ScalarsEnums["String"];
  parkingArea: FlinksterParkingArea;
  priceOptions: Array<Maybe<PriceOption>>;
  providerRentalObjectId: ScalarsEnums["Int"];
  rentalModel: ScalarsEnums["String"];
  type: ScalarsEnums["String"];
  url: ScalarsEnums["String"];
}

export interface FlinksterCar {
  __typename?: "FlinksterCar";
  attributes: CarAttributes;
  category: ScalarsEnums["String"];
  description: ScalarsEnums["String"];
  equipment: CarEquipment;
  id: ScalarsEnums["String"];
  location: Location;
  name: ScalarsEnums["String"];
  parkingArea: FlinksterParkingArea;
  priceOptions: Array<Maybe<PriceOption>>;
  rentalModel: ScalarsEnums["String"];
  url: ScalarsEnums["String"];
}

export interface FlinksterParkingArea {
  __typename?: "FlinksterParkingArea";
  GeoJSON?: Maybe<GeoJSON>;
  accessDescription?: Maybe<ScalarsEnums["String"]>;
  address: MailingAddress;
  id: ScalarsEnums["String"];
  locationDescription?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  parkingDescription?: Maybe<ScalarsEnums["String"]>;
  position: Location;
  provider: FlinksterProvider;
  publicTransport?: Maybe<ScalarsEnums["String"]>;
  type: ScalarsEnums["String"];
  url: ScalarsEnums["String"];
}

export interface FlinksterProvider {
  __typename?: "FlinksterProvider";
  areaId: ScalarsEnums["Int"];
  networkIds: Array<ScalarsEnums["Int"]>;
  url: ScalarsEnums["String"];
}

export interface GeoFeature {
  __typename?: "GeoFeature";
  geometry: GeoPolygon;
  properties: GeoProperties;
  type: ScalarsEnums["String"];
}

export interface GeoJSON {
  __typename?: "GeoJSON";
  features: Array<GeoFeature>;
  type: ScalarsEnums["String"];
}

export interface GeoPolygon {
  __typename?: "GeoPolygon";
  coordinates: Array<Maybe<[[[Number]]]>>;
  type: ScalarsEnums["String"];
}

export interface GeoProperties {
  __typename?: "GeoProperties";
  name: ScalarsEnums["String"];
}

export interface Location {
  __typename?: "Location";
  latitude: ScalarsEnums["Float"];
  longitude: ScalarsEnums["Float"];
}

export interface MailingAddress {
  __typename?: "MailingAddress";
  city: ScalarsEnums["String"];
  street: ScalarsEnums["String"];
  zipcode: ScalarsEnums["String"];
}

export interface Nearby {
  __typename?: "Nearby";
  bikes: (args?: {
    /**
     * @defaultValue `10`
     */
    count?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    offset?: Maybe<Scalars["Int"]>;
  }) => Array<FlinksterBike>;
  flinksterCars: (args?: {
    /**
     * @defaultValue `10`
     */
    count?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    offset?: Maybe<Scalars["Int"]>;
  }) => Array<FlinksterCar>;
  parkingSpaces: (args?: {
    /**
     * @defaultValue `10`
     */
    count?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    offset?: Maybe<Scalars["Int"]>;
  }) => Array<ParkingSpace>;
  stations: (args?: {
    /**
     * @defaultValue `10`
     */
    count?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    offset?: Maybe<Scalars["Int"]>;
  }) => Array<Station>;
  travelCenters: (args?: {
    /**
     * @defaultValue `10`
     */
    count?: Maybe<Scalars["Int"]>;
    /**
     * @defaultValue `0`
     */
    offset?: Maybe<Scalars["Int"]>;
  }) => Array<TravelCenter>;
}

export interface Occupancy {
  __typename?: "Occupancy";
  category: ScalarsEnums["Int"];
  text: ScalarsEnums["String"];
  timeSegment: ScalarsEnums["String"];
  timestamp: ScalarsEnums["String"];
  validData: ScalarsEnums["Boolean"];
}

export interface OpeningTime {
  __typename?: "OpeningTime";
  from: ScalarsEnums["String"];
  to: ScalarsEnums["String"];
}

export interface OpeningTimes {
  __typename?: "OpeningTimes";
  friday?: Maybe<OpeningTime>;
  holiday?: Maybe<OpeningTime>;
  monday?: Maybe<OpeningTime>;
  saturday?: Maybe<OpeningTime>;
  sunday?: Maybe<OpeningTime>;
  thursday?: Maybe<OpeningTime>;
  tuesday?: Maybe<OpeningTime>;
  wednesday?: Maybe<OpeningTime>;
}

export interface OperationLocation {
  __typename?: "OperationLocation";
  UIC: ScalarsEnums["String"];
  abbrev: ScalarsEnums["String"];
  borderStation?: Maybe<ScalarsEnums["Boolean"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  locationCode?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  regionId?: Maybe<ScalarsEnums["String"]>;
  shortName: ScalarsEnums["String"];
  status?: Maybe<ScalarsEnums["String"]>;
  timeTableRelevant?: Maybe<ScalarsEnums["Boolean"]>;
  type: ScalarsEnums["String"];
  validFrom: ScalarsEnums["String"];
  validTill?: Maybe<ScalarsEnums["String"]>;
}

export interface ParkingPriceOption {
  __typename?: "ParkingPriceOption";
  duration: ScalarsEnums["String"];
  id: ScalarsEnums["Int"];
  price?: Maybe<ScalarsEnums["Float"]>;
}

export interface ParkingSpace {
  __typename?: "ParkingSpace";
  address?: Maybe<MailingAddress>;
  allowedPropulsions?: Maybe<ScalarsEnums["String"]>;
  clearanceHeight?: Maybe<ScalarsEnums["String"]>;
  clearanceWidth?: Maybe<ScalarsEnums["String"]>;
  distance?: Maybe<ScalarsEnums["String"]>;
  facilityType?: Maybe<ScalarsEnums["String"]>;
  facilityTypeEn?: Maybe<ScalarsEnums["String"]>;
  hasChargingStation?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["Int"];
  isDiscountDbBahnCard: ScalarsEnums["Boolean"];
  isDiscountDbBahnComfort: ScalarsEnums["Boolean"];
  isDiscountDbParkAndRail: ScalarsEnums["Boolean"];
  isMonthParkAndRide: ScalarsEnums["Boolean"];
  isMonthSeason: ScalarsEnums["Boolean"];
  isMonthVendingMachine: ScalarsEnums["Boolean"];
  isOutOfService: ScalarsEnums["Boolean"];
  isSpecialProductDb: ScalarsEnums["Boolean"];
  label?: Maybe<ScalarsEnums["String"]>;
  location?: Maybe<Location>;
  name?: Maybe<ScalarsEnums["String"]>;
  nameDisplay?: Maybe<ScalarsEnums["String"]>;
  numberHandicapedPlaces?: Maybe<ScalarsEnums["String"]>;
  numberParkingPlaces?: Maybe<ScalarsEnums["String"]>;
  occupancy?: Maybe<Occupancy>;
  openingHours?: Maybe<ScalarsEnums["String"]>;
  openingHoursEn?: Maybe<ScalarsEnums["String"]>;
  operator?: Maybe<ScalarsEnums["String"]>;
  operatorUrl?: Maybe<ScalarsEnums["String"]>;
  outOfService: ScalarsEnums["Boolean"];
  outOfServiceText?: Maybe<ScalarsEnums["String"]>;
  outOfServiceTextEn?: Maybe<ScalarsEnums["String"]>;
  reservation?: Maybe<ScalarsEnums["String"]>;
  responsibility?: Maybe<ScalarsEnums["String"]>;
  slogan?: Maybe<ScalarsEnums["String"]>;
  sloganEn?: Maybe<ScalarsEnums["String"]>;
  source?: Maybe<ScalarsEnums["String"]>;
  spaceNumber?: Maybe<ScalarsEnums["String"]>;
  spaceType?: Maybe<ScalarsEnums["String"]>;
  spaceTypeEn?: Maybe<ScalarsEnums["String"]>;
  spaceTypeName?: Maybe<ScalarsEnums["String"]>;
  station?: Maybe<Station>;
  tariffDiscount?: Maybe<ScalarsEnums["String"]>;
  tariffDiscountEn?: Maybe<ScalarsEnums["String"]>;
  tariffFreeParkingTime?: Maybe<ScalarsEnums["String"]>;
  tariffFreeParkingTimeEn?: Maybe<ScalarsEnums["String"]>;
  tariffPaymentCustomerCards?: Maybe<ScalarsEnums["String"]>;
  tariffPaymentOptions?: Maybe<ScalarsEnums["String"]>;
  tariffPaymentOptionsEn?: Maybe<ScalarsEnums["String"]>;
  tariffPrices: Array<ParkingPriceOption>;
  type?: Maybe<ScalarsEnums["String"]>;
  url?: Maybe<ScalarsEnums["String"]>;
}

export interface Photographer {
  __typename?: "Photographer";
  name: ScalarsEnums["String"];
  url: ScalarsEnums["String"];
}

export interface Picture {
  __typename?: "Picture";
  id: ScalarsEnums["Int"];
  license: ScalarsEnums["String"];
  photographer: Photographer;
  url: ScalarsEnums["String"];
}

export interface PriceOption {
  __typename?: "PriceOption";
  currency: ScalarsEnums["String"];
  grossamount: ScalarsEnums["Float"];
  interval?: Maybe<ScalarsEnums["Int"]>;
  preferredprice: ScalarsEnums["Boolean"];
  taxrate: ScalarsEnums["Float"];
  type: ScalarsEnums["String"];
}

export interface Product {
  __typename?: "Product";
  class?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  productCode?: Maybe<ScalarsEnums["Int"]>;
  productName?: Maybe<ScalarsEnums["String"]>;
}

export interface RegionalArea {
  __typename?: "RegionalArea";
  name: ScalarsEnums["String"];
  number: ScalarsEnums["Int"];
  shortName: ScalarsEnums["String"];
}

export interface Route {
  __typename?: "Route";
  from?: Maybe<Station>;
  parts: Array<RoutePart>;
  to?: Maybe<Station>;
}

export interface RoutePart {
  __typename?: "RoutePart";
  arrivingTrack?: Maybe<Track>;
  delay?: Maybe<ScalarsEnums["Int"]>;
  departingTrack?: Maybe<Track>;
  direction: ScalarsEnums["String"];
  end: ScalarsEnums["String"];
  /**
   * Station where the part begins
   */
  from: Station;
  product?: Maybe<Product>;
  start: ScalarsEnums["String"];
  to: Station;
}

export interface Searchable {
  __typename?: "Searchable";
  operationLocations: Array<OperationLocation>;
  stations: Array<Station>;
}

export interface Station {
  __typename?: "Station";
  DBInformationOpeningTimes?: Maybe<OpeningTimes>;
  aufgabentraeger: StationContact;
  category: ScalarsEnums["Int"];
  facilities: Array<Facility>;
  federalState: ScalarsEnums["String"];
  hasBicycleParking: ScalarsEnums["Boolean"];
  hasCarRental: ScalarsEnums["Boolean"];
  hasDBLounge: ScalarsEnums["Boolean"];
  hasLocalPublicTransport: ScalarsEnums["Boolean"];
  hasLockerSystem: ScalarsEnums["Boolean"];
  hasLostAndFound: ScalarsEnums["Boolean"];
  hasMobilityService: ScalarsEnums["String"];
  hasParking: ScalarsEnums["Boolean"];
  hasPublicFacilities: ScalarsEnums["Boolean"];
  hasRailwayMission: ScalarsEnums["Boolean"];
  hasSteamPermission: ScalarsEnums["Boolean"];
  hasSteplessAccess: ScalarsEnums["String"];
  hasTaxiRank: ScalarsEnums["Boolean"];
  hasTravelCenter: ScalarsEnums["Boolean"];
  hasTravelNecessities: ScalarsEnums["Boolean"];
  hasWiFi: ScalarsEnums["Boolean"];
  localServiceStaffAvailability?: Maybe<OpeningTimes>;
  location?: Maybe<Location>;
  mailingAddress: MailingAddress;
  name: ScalarsEnums["String"];
  parkingSpaces: Array<ParkingSpace>;
  picture?: Maybe<Picture>;
  priceCategory: ScalarsEnums["Int"];
  primaryEvaId?: Maybe<ScalarsEnums["Int"]>;
  primaryRil100?: Maybe<ScalarsEnums["String"]>;
  regionalArea: RegionalArea;
  stationManagement: StationContact;
  stationNumber?: Maybe<ScalarsEnums["Int"]>;
  szentrale: StationContact;
  timeTableOffice?: Maybe<StationContact>;
  timetable: Timetable;
  tracks: Array<Track>;
}

export interface StationContact {
  __typename?: "StationContact";
  email?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  number?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  shortName?: Maybe<ScalarsEnums["String"]>;
}

export interface Timetable {
  __typename?: "Timetable";
  nextArrivals: Array<TrainInStation>;
  nextDepatures: Array<TrainInStation>;
}

export interface Track {
  __typename?: "Track";
  /**
   * Height of the platform in cm
   */
  height: ScalarsEnums["Int"];
  /**
   * Length of the platform in cm
   */
  length?: Maybe<ScalarsEnums["Int"]>;
  name: ScalarsEnums["String"];
  number: ScalarsEnums["String"];
  platform: ScalarsEnums["String"];
}

export interface TrainInStation {
  __typename?: "TrainInStation";
  platform: ScalarsEnums["String"];
  stops: Array<ScalarsEnums["String"]>;
  time: ScalarsEnums["String"];
  trainNumber: ScalarsEnums["String"];
  type: ScalarsEnums["String"];
}

export interface TravelCenter {
  __typename?: "TravelCenter";
  address?: Maybe<MailingAddress>;
  id?: Maybe<ScalarsEnums["Int"]>;
  location?: Maybe<Location>;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  nearby: (args: {
    latitude: Scalars["Float"];
    longitude: Scalars["Float"];
    /**
     * @defaultValue `10000`
     */
    radius?: Maybe<Scalars["Int"]>;
  }) => Nearby;
  parkingSpace: (args?: { id?: Maybe<Scalars["Int"]> }) => Maybe<ParkingSpace>;
  routing: (args: { from: Scalars["Int"]; to: Scalars["Int"] }) => Array<Route>;
  search: (args?: { searchTerm?: Maybe<Scalars["String"]> }) => Searchable;
  stationWithEvaId: (args: { evaId: Scalars["Int"] }) => Maybe<Station>;
  stationWithRill100: (args: { rill100: Scalars["String"] }) => Maybe<Station>;
  stationWithStationNumber: (args: {
    stationNumber: Scalars["Int"];
  }) => Maybe<Station>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  BikeAttributes: BikeAttributes;
  CarAttributes: CarAttributes;
  CarEquipment: CarEquipment;
  Facility: Facility;
  FlinksterBike: FlinksterBike;
  FlinksterCar: FlinksterCar;
  FlinksterParkingArea: FlinksterParkingArea;
  FlinksterProvider: FlinksterProvider;
  GeoFeature: GeoFeature;
  GeoJSON: GeoJSON;
  GeoPolygon: GeoPolygon;
  GeoProperties: GeoProperties;
  Location: Location;
  MailingAddress: MailingAddress;
  Mutation: Mutation;
  Nearby: Nearby;
  Occupancy: Occupancy;
  OpeningTime: OpeningTime;
  OpeningTimes: OpeningTimes;
  OperationLocation: OperationLocation;
  ParkingPriceOption: ParkingPriceOption;
  ParkingSpace: ParkingSpace;
  Photographer: Photographer;
  Picture: Picture;
  PriceOption: PriceOption;
  Product: Product;
  Query: Query;
  RegionalArea: RegionalArea;
  Route: Route;
  RoutePart: RoutePart;
  Searchable: Searchable;
  Station: Station;
  StationContact: StationContact;
  Subscription: Subscription;
  Timetable: Timetable;
  Track: Track;
  TrainInStation: TrainInStation;
  TravelCenter: TravelCenter;
}
export type SchemaObjectTypesNames =
  | "BikeAttributes"
  | "CarAttributes"
  | "CarEquipment"
  | "Facility"
  | "FlinksterBike"
  | "FlinksterCar"
  | "FlinksterParkingArea"
  | "FlinksterProvider"
  | "GeoFeature"
  | "GeoJSON"
  | "GeoPolygon"
  | "GeoProperties"
  | "Location"
  | "MailingAddress"
  | "Mutation"
  | "Nearby"
  | "Occupancy"
  | "OpeningTime"
  | "OpeningTimes"
  | "OperationLocation"
  | "ParkingPriceOption"
  | "ParkingSpace"
  | "Photographer"
  | "Picture"
  | "PriceOption"
  | "Product"
  | "Query"
  | "RegionalArea"
  | "Route"
  | "RoutePart"
  | "Searchable"
  | "Station"
  | "StationContact"
  | "Subscription"
  | "Timetable"
  | "Track"
  | "TrainInStation"
  | "TravelCenter";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  FacilityState: FacilityState | undefined;
  FacilityType: FacilityType | undefined;
}
