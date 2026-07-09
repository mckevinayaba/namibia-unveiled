export type BookingEnquiry = {
  name: string;
  email: string;
  arriveDate: string;
  departDate: string;
  travellers: number;
  budget: string;
  tripTypes: string[];
  notes: string;
};

export type TravelStyle = "Self-drive" | "Guided" | "Mixed";
export type VehicleType =
  | "Sedan"
  | "SUV (2x4)"
  | "SUV (4x4)"
  | "Camper / 4x4 with rooftop tent"
  | "Not sure yet";
export type BudgetRange =
  | "N$25,000–40,000 pp"
  | "N$40,000–65,000 pp"
  | "N$65,000–100,000 pp"
  | "N$100,000+ pp";
export type RemoteRoadComfort = "New to it — keep it easy" | "Some experience" | "Very comfortable";

export type RouteRequest = {
  name: string;
  email: string;
  days: number;
  travelStyle: TravelStyle;
  selfDriveOrGuided: "Self-drive" | "Guided";
  vehicleType: VehicleType;
  budgetRange: BudgetRange;
  interestAreas: string[];
  season: string;
  remoteRoadComfort: RemoteRoadComfort;
  preferredRegions: string[];
  notes: string;
  routeOfInterest?: string;
};
