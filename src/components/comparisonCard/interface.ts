export interface ExplicitModifier {
  optional?: boolean;
  text?: string;
}

export interface Sparkline {
  data?: number[];
  totalChange?: number;
}

export interface Item {
  artFilename?: string;
  chaosValue?: number;
  count?: number;
  detailsId?: string;
  divineValue?: number;
  exaltedValue?: number;
  explicitModifiers?: ExplicitModifier[];
  flavourText?: string;
  icon?: string;
  id?: number;
  implicitModifiers?: any[]; // This is an empty array in the provided data, so I'm unsure of its structure.
  itemClass?: number;
  listingCount?: number;
  lowConfidenceSparkline?: Sparkline;
  name?: string;
  sparkline?: Sparkline;
  stackSize?: number;
  tradeInfo?: any[]; // This is an empty array in the provided data, so I'm unsure of its structure.
}

export interface DivinationCardCompareProps {
  divinationCard: Item;
}
