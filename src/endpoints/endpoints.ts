const BASE_URL = process.env.REACT_APP_BASE_URL;
const CURRENT_LEAGUE = process.env.REACT_APP_CURRENT_LEAGUE;

const API_ENDPOINTS = {
  currency: `${BASE_URL}/currencyoverview?league=${CURRENT_LEAGUE}&type=Currency`,
  fragment: `${BASE_URL}/currencyoverview?league=${CURRENT_LEAGUE}&type=Fragment`,
  oil: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=Oil`,
  scarab: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=Scarab`,
  fossil: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=Fossil`,
  essence: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=Essence`,
  divinationCard: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=DivinationCard`,
  skillGem: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=SkillGem`,
  baseType: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=BaseType`,
  uniqueMap: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=UniqueMap`,
  uniqueJewel: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=UniqueJewel`,
  uniqueFlask: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=UniqueFlask`,
  uniqueWeapon: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=UniqueWeapon`,
  uniqueArmour: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=UniqueArmour`,
  uniqueAccessory: `${BASE_URL}/itemoverview?league=${CURRENT_LEAGUE}&type=UniqueAccessory`,
};

export default API_ENDPOINTS;
