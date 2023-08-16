import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import DivinationCardProfit from "./pages/divinationCardProfit/divinationCardProfit";
import Navigation from "./components/navigation/navigation";
import API_ENDPOINTS from "./endpoints/endpoints";
import DivinationCarDProfit from "./pages/divinationCardProfit/divinationCardProfit";
import {
  CurrencyData,
  FragmentData,
  OilData,
  ScarabData,
  FossilData,
  EssenceData,
  DivinationCardData,
  SkillGemData,
  BaseTypeData,
  UniqueMapData,
  UniqueJewelData,
  UniqueFlaskData,
  UniqueWeaponData,
  UniqueArmourData,
  UniqueAccessoryData,
} from "./interfaces";
import axios from "axios";

const App = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyData>();
  const [fragmentData, setFragmentData] = useState<FragmentData>();
  const [oilData, setOilData] = useState<OilData>();
  const [scarabData, setScarabData] = useState<ScarabData>();
  const [fossilData, setFossilData] = useState<FossilData>();
  const [essenceData, setEssenceData] = useState<EssenceData>();
  const [divinationCardData, setDivinationCardData] =
    useState<DivinationCardData>();
  const [skillGemData, setSkillGemData] = useState<SkillGemData>();
  const [baseTypeData, setBaseTypeData] = useState<BaseTypeData>();
  const [uniqueMapData, setUniqueMapData] = useState<UniqueMapData>();
  const [uniqueJewelData, setUniqueJewelData] = useState<UniqueJewelData>();
  const [uniqueFlaskData, setUniqueFlaskData] = useState<UniqueFlaskData>();
  const [uniqueWeaponData, setUniqueWeaponData] = useState<UniqueWeaponData>();
  const [uniqueArmourData, setUniqueArmourData] = useState<UniqueArmourData>();
  const [uniqueAccessoryData, setUniqueAccessoryData] =
    useState<UniqueAccessoryData>();
  const homeProp =
    "Sadly some of the results are a bit bogus, poe.ninja does not provide prices for corrupted items so some of the calculations are off by a lot like the corrupted Mageblood cards";

  const fetchAndSetData = (fetchFunction: any, setData: any) => {
    axios.get(fetchFunction).then((res) => {
      let dataToSet = { ...res.data };

      if (dataToSet.currencyDetails) {
        delete dataToSet.currencyDetails;
      }

      setData(dataToSet);
    });
  };
  const handleRefreshData = () => {
    fetchAndSetData(API_ENDPOINTS.currency, setCurrencyData);
    fetchAndSetData(API_ENDPOINTS.fragment, setFragmentData);
    fetchAndSetData(API_ENDPOINTS.oil, setOilData);
    fetchAndSetData(API_ENDPOINTS.scarab, setScarabData);
    fetchAndSetData(API_ENDPOINTS.fossil, setFossilData);
    fetchAndSetData(API_ENDPOINTS.essence, setEssenceData);
    fetchAndSetData(API_ENDPOINTS.divinationCard, setDivinationCardData);
    //fetchAndSetData(API_ENDPOINTS.skillGem, setSkillGemData);
    //fetchAndSetData(API_ENDPOINTS.baseType, setBaseTypeData);
    fetchAndSetData(API_ENDPOINTS.uniqueMap, setUniqueMapData);
    fetchAndSetData(API_ENDPOINTS.uniqueJewel, setUniqueJewelData);
    fetchAndSetData(API_ENDPOINTS.uniqueFlask, setUniqueFlaskData);
    fetchAndSetData(API_ENDPOINTS.uniqueWeapon, setUniqueWeaponData);
    fetchAndSetData(API_ENDPOINTS.uniqueArmour, setUniqueArmourData);
    fetchAndSetData(API_ENDPOINTS.uniqueAccessory, setUniqueAccessoryData);
  };

  return (
    <div className="appContainer">
      <Navigation />
      <button onClick={handleRefreshData}>Refresh Data</button>
      <Routes>
        <Route path="/" element={<Home props={homeProp} />} />
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
      </Routes>
    </div>
  );
};

export default App;
