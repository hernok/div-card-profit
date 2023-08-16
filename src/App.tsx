import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./components/navigation/navigation";
import API_ENDPOINTS from "./endpoints/endpoints";
import DivinationCarDProfit from "./pages/divinationCardProfit/divinationCardProfit";

import axios from "axios";
import {
  CurrencyOrFragmentData,
  ItemData,
} from "./pages/divinationCardProfit/interface";

const App = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyOrFragmentData>();
  const [fragmentData, setFragmentData] = useState<CurrencyOrFragmentData>();
  const [oilData, setOilData] = useState<ItemData>();
  const [scarabData, setScarabData] = useState<ItemData>();
  const [fossilData, setFossilData] = useState<ItemData>();
  const [essenceData, setEssenceData] = useState<ItemData>();
  const [divinationCardData, setDivinationCardData] = useState<ItemData>();
  const [skillGemData, setSkillGemData] = useState<ItemData>();
  const [baseTypeData, setBaseTypeData] = useState<ItemData>();
  const [uniqueMapData, setUniqueMapData] = useState<ItemData>();
  const [uniqueJewelData, setUniqueJewelData] = useState<ItemData>();
  const [uniqueFlaskData, setUniqueFlaskData] = useState<ItemData>();
  const [uniqueWeaponData, setUniqueWeaponData] = useState<ItemData>();
  const [uniqueArmourData, setUniqueArmourData] = useState<ItemData>();
  const [uniqueAccessoryData, setUniqueAccessoryData] = useState<ItemData>();
  const homeProp = ":)";

  const fetchAndSetCurrencyData = (
    fetchFunction: string,
    setData: React.Dispatch<
      React.SetStateAction<CurrencyOrFragmentData | undefined>
    >
  ) => {
    axios.get(fetchFunction).then((res) => {
      let dataToSet = { ...res.data };

      if (dataToSet.currencyDetails) {
        delete dataToSet.currencyDetails;
      }

      setData(dataToSet);
    });
  };

  const fetchAndSetItemData = (
    fetchFunction: string,
    setData: React.Dispatch<React.SetStateAction<ItemData | undefined>>
  ) => {
    axios.get(fetchFunction).then((res) => {
      let dataToSet = { ...res.data };

      if (dataToSet.currencyDetails) {
        delete dataToSet.currencyDetails;
      }

      setData(dataToSet);
    });
  };

  const handleRefreshData = () => {
    fetchAndSetCurrencyData(API_ENDPOINTS.currency, setCurrencyData);
    fetchAndSetCurrencyData(API_ENDPOINTS.fragment, setFragmentData);
    fetchAndSetItemData(API_ENDPOINTS.oil, setOilData);
    fetchAndSetItemData(API_ENDPOINTS.scarab, setScarabData);
    fetchAndSetItemData(API_ENDPOINTS.fossil, setFossilData);
    fetchAndSetItemData(API_ENDPOINTS.essence, setEssenceData);
    fetchAndSetItemData(API_ENDPOINTS.divinationCard, setDivinationCardData);
    //fetchAndSetItemData(API_ENDPOINTS.skillGem, setSkillGemData);
    //fetchAndSetItemData(API_ENDPOINTS.baseType, setBaseTypeData);
    fetchAndSetItemData(API_ENDPOINTS.uniqueMap, setUniqueMapData);
    fetchAndSetItemData(API_ENDPOINTS.uniqueJewel, setUniqueJewelData);
    fetchAndSetItemData(API_ENDPOINTS.uniqueFlask, setUniqueFlaskData);
    fetchAndSetItemData(API_ENDPOINTS.uniqueWeapon, setUniqueWeaponData);
    fetchAndSetItemData(API_ENDPOINTS.uniqueArmour, setUniqueArmourData);
    fetchAndSetItemData(API_ENDPOINTS.uniqueAccessory, setUniqueAccessoryData);
  };

  return (
    <div className="appContainer">
      <Navigation />
      <button onClick={handleRefreshData}>Refresh Data</button>

      <Routes>
        <Route path="/" element={<Home props={homeProp} />} />
        {currencyData && fragmentData && oilData ? (
          <Route
            path="/divinationCardProfit"
            element={
              <DivinationCarDProfit
                currencyData={currencyData}
                fragmentData={fragmentData}
                oilData={oilData}
                scarabData={scarabData}
                fossilData={fossilData}
                essenceData={essenceData}
                divinationCardData={divinationCardData}
                skillGemData={skillGemData}
                baseTypeData={baseTypeData}
                uniqueMapData={uniqueMapData}
                uniqueJewelData={uniqueJewelData}
                uniqueFlaskData={uniqueFlaskData}
                uniqueWeaponData={uniqueWeaponData}
                uniqueArmourData={uniqueArmourData}
                uniqueAccessoryData={uniqueAccessoryData}
              />
            }
          />
        ) : null}
      </Routes>
    </div>
  );
};

export default App;
