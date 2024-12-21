export enum frequencyOfServiceOptions {
  Once = "Once",
  Weekly = "Weekly",
  BiWeekly = "Bi-Weekly",
  MultipleTimesPerWeek = "Multiple Times Per Week",
}

export type packageType = {
  name: string;
  description: string;
  pricePerCleaner: string | number;
  availableServices?: string[];
  requestedServices?: string[];
  frequencyOfService?: frequencyOfServiceOptions;
};

export const packages: packageType[] = [
  {
    name: "REGULAR BASIC CLEANING",
    description: "Recurring cleaning service",
    pricePerCleaner: 35,
    availableServices: [
      "Fridge Cleaning",
      "Limescale Removal",
      "Carpet/ Sofa Shampooing",
      "Oven Cleaning",
      "Balcony/ Patio Cleaning",
      "Floor Deep Cleaning",
      "Laundry Service",
      "Window Cleaning (2 meters high)",
      "Full Glass Window/ Facade Deep Cleaning",
      "Ironing",
      "Mold Removal",
      "Wall Deep Cleaning",
    ],
    requestedServices: [],
    frequencyOfService: frequencyOfServiceOptions.Once,
  },
  {
    name: "ONE-TIME BASIC CLEANING",
    description: "On-demand cleaning service",
    pricePerCleaner: 35,
    availableServices: [
      "Fridge Cleaning",
      "Limescale Removal",
      "Carpet/ Sofa Shampooing",
      "Oven Cleaning",
      "Balcony/ Patio Cleaning",
      "Floor Deep Cleaning",
      "Laundry Service",
      "Window Cleaning (2 meters high)",
      "Full Glass Window/ Facade Deep Cleaning",
      "Ironing",
      "Mold Removal",
      "Wall Deep Cleaning",
    ],
    requestedServices: [],
    frequencyOfService: frequencyOfServiceOptions.Once,
  },
  {
    name: "MOVE-IN/-OUT CLEANING",
    description: "For move-ins, and move-outs",
    pricePerCleaner: "Request for Quotation",
  },
  {
    name: "DEEP CLEANING",
    description: "All-inclusive cleaning service",
    pricePerCleaner: "Request for Quotation",
  },
  {
    name: "CLEANING FOR BUSINESS",
    description: "Cleaning services for business",
    pricePerCleaner: "Request for Quotation",
  },
];
