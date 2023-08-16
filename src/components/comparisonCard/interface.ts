export interface ExplicitModifier {
  optional: boolean;
  text: string;
}

export interface Sparkline {
  data: number[];
  totalChange?: number;
}

export interface DivinationCard {
  artFilename: string;
  chaosValue: number;
  count: number;
  detailsId: string;
  baseType?: string;
  divineValue: number;
  exaltedValue: number;
  explicitModifiers: ExplicitModifier[];
  flavourText: string;
  icon: string;
  id: number;
  implicitModifiers: ImplicitModifiers[];
  itemClass: number;
  listingCount: number;
  lowConfidenceSparkline: Sparkline;
  name: string;
  sparkline: Sparkline;
  stackSize: number;
  tradeInfo: [] | any[];
}
export interface ImplicitModifiers {
  text: string;
}

export interface RewardData {
  currencyTypeName?: string;
  name?: string;
  chaosEquivalent?: number;
  baseType?: string;
  chaosValue: number;
  count: number;
  detailsid?: string;
  divineValue: number;
  exaltedValue: number;
  explicitModifiers: ExplicitModifiers[];
  flavourText: string;
  icon: string;
  id: number;
  implicitModifiers: ImplicitModifiers[];
}
export interface ExplicitModifiers {
  text: string;
}
export interface ImplicitModifiers {
  text: string;
}

export interface DivinationCardCompareProps {
  divinationCard: DivinationCard;
  rewardData: RewardData[];
  rewardQuantity: number;
}
