export interface Transaction {
  id: number;
  league_id: number;
  pay_currency_id: number;
  get_currency_id: number;
  sample_time_utc: string;
  count: number;
  value: number;
  data_point_count: number;
  includes_secondary: boolean;
  listing_count: number;
}

export interface CurrencyOrFragment {
  currencyTypeName: string;
  pay: Transaction;
  receive: Transaction;
  paySparkLine: Sparkline;
  receiveSparkLine: Sparkline;
  chaosEquivalent: number;
  lowConfidencePaySparkLine: Sparkline;
  lowConfidenceReceiveSparkLine: Sparkline;
  detailsId: string;
}

export interface CurrencyOrFragmentData {
  lines: CurrencyOrFragment[];
}
export interface ExplicitModifier {
  text: string;
  optional: boolean;
}

export interface Sparkline {
  data: number[];
  totalChange: number;
}

export interface ItemEntry {
  id: number;
  name: string;
  currencyTypeName?: string;
  icon: string;
  stackSize: number;
  artFilename: string;
  itemClass: number;
  sparkline: Sparkline;
  lowConfidenceSparkline: Sparkline;
  implicitModifiers: any[];
  explicitModifiers: ExplicitModifier[];
  flavourText: string;
  chaosValue: number;
  exaltedValue: number;
  divineValue: number;
  chaosEquivalent?: number;
  count: number;
  detailsId: string;
  tradeInfo: any[];
  listingCount: number;
  links?: number;
}

export interface ItemData {
  lines: ItemEntry[];
}

export interface Props {
  divinationCardData: ItemData | undefined;
  currencyData: CurrencyOrFragmentData | undefined;
  fragmentData: CurrencyOrFragmentData | undefined;
  oilData: ItemData | undefined;
  scarabData: ItemData | undefined;
  fossilData: ItemData | undefined;
  essenceData: ItemData | undefined;
  skillGemData: ItemData | undefined;
  baseTypeData: ItemData | undefined;
  uniqueMapData: ItemData | undefined;
  uniqueJewelData: ItemData | undefined;
  uniqueFlaskData: ItemData | undefined;
  uniqueWeaponData: ItemData | undefined;
  uniqueArmourData: ItemData | undefined;
  uniqueAccessoryData: ItemData | undefined;
}
