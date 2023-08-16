///// DIVINATION CARD /////

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
  implicitModifiers?: any[];
  itemClass?: number;
  listingCount?: number;
  lowConfidenceSparkline?: Sparkline;
  name?: string;
  sparkline?: Sparkline;
  stackSize?: number;
  tradeInfo?: any[];
}

export interface Lines {
  lines?: Item[];
}

export interface DivinationCardDataTypes {
  divinationCardData?: Lines;
}
