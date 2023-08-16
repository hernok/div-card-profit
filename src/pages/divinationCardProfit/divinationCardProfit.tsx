import { useState, useEffect } from "react";
import ComparisonCard from "../../components/comparisonCard/comparisonCard";
import { CurrencyOrFragment, ItemEntry, Props } from "./interface";
import styles from "./divinationCardProfit.module.css";

type Profit = {
  profitValue: number;
  profitPercentage: number;
};

const DivinationCarDProfit = ({
  divinationCardData,
  currencyData,
  fragmentData,
  oilData,
  scarabData,
  fossilData,
  essenceData,
  skillGemData,
  baseTypeData,
  uniqueMapData,
  uniqueJewelData,
  uniqueFlaskData,
  uniqueWeaponData,
  uniqueArmourData,
  uniqueAccessoryData,
}: Props) => {
  const [renderedCardsCount, setRenderedCardsCount] = useState(0);
  const [sortBy, setSortBy] = useState("value");

  const EXCLUDED_CARDS = [
    "luminous-trove",
    "the-insane-cat",
    "choking-guilt",
    "the-fiend",
    "the-price-of-devotion",
    "misery-in-darkness",
  ];

  const isExcluded = (cardName: string): boolean => {
    return EXCLUDED_CARDS.includes(cardName.toLowerCase().replace(/\s/g, "-"));
  };

  useEffect(() => {
    const count = divinationCardData?.lines?.reduce((acc, cardData) => {
      const rewardInfo = parseRewardText(cardData.explicitModifiers?.[0]?.text);
      const formattedRewardName = rewardInfo.name
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/[{}]/g, "");
      if (isExcluded(cardData.name)) return acc;
      const items = findMatchingItems(formattedRewardName, rewardInfo.links);
      return items.length > 0 ? acc + 1 : acc;
    }, 0);
    setRenderedCardsCount(count || 0);
  }, [divinationCardData]);

  const isItemEntry = (
    item: CurrencyOrFragment | ItemEntry
  ): item is ItemEntry => {
    return (
      (item as ItemEntry).id !== undefined &&
      (item as ItemEntry).name !== undefined &&
      !(item as CurrencyOrFragment).currencyTypeName
    );
  };

  const findMatchingItems = (
    rewardInfoName: string,
    links?: number
  ): ItemEntry[] => {
    const allItems = [
      ...(currencyData?.lines || []),
      ...(fragmentData?.lines || []),
      ...(oilData?.lines || []),
      ...(scarabData?.lines || []),
      ...(fossilData?.lines || []),
      ...(essenceData?.lines || []),
      ...(skillGemData?.lines || []),
      ...(baseTypeData?.lines || []),
      ...(uniqueMapData?.lines || []),
      ...(uniqueJewelData?.lines || []),
      ...(uniqueFlaskData?.lines || []),
      ...(uniqueWeaponData?.lines || []),
      ...(uniqueArmourData?.lines || []),
      ...(uniqueAccessoryData?.lines || []),
    ];

    return allItems.filter((item) => {
      if (isItemEntry(item)) {
        const matchesName = (itemName: string) =>
          itemName.toLowerCase().replace(/\s/g, "-") === rewardInfoName;

        if (item.detailsId && item.detailsId.includes("-relic")) {
          return false;
        }

        if (matchesName(item.name)) {
          if (links !== undefined) {
            return item.links === links;
          }
          if (!item.links) {
            return true;
          }
        }
      } else {
        const matchesName = (itemName: string) =>
          itemName.toLowerCase().replace(/\s/g, "-") === rewardInfoName;

        if (item.currencyTypeName && matchesName(item.currencyTypeName)) {
          return true;
        }
      }
      return false;
    }) as ItemEntry[];
  };

  type RewardInfo = {
    name: string;
    quantity: number;
    links?: number;
  };

  const parseRewardText = (text: string): RewardInfo => {
    const parsed: RewardInfo = {
      name: "",
      quantity: 1,
    };

    const match = text.match(/<uniqueitem>{(?:Six-Link|Five-Link)?\s?(.+)}/);
    if (match) {
      parsed.name = match[1];
      if (match[0].includes("Six-Link")) parsed.links = 6;
      else if (match[0].includes("Five-Link")) parsed.links = 5;
    }

    return parsed;
  };

  const calculateProfit = (
    divinationCard: ItemEntry,
    rewardData: ItemEntry[],
    rewardQuantity: number
  ): Profit => {
    if (!rewardData || rewardData.length === 0) {
      return { profitValue: 0, profitPercentage: 0 };
    }

    const totalCost = divinationCard.stackSize * divinationCard.chaosValue;
    const rewardValue =
      (rewardData[0].currencyTypeName
        ? rewardData[0].chaosEquivalent
        : rewardData[0].chaosValue) || 0;
    const totalReward = rewardQuantity * rewardValue;
    const profitValue = totalReward - totalCost;
    const profitPercentage = (profitValue / totalCost) * 100 - 100;

    return {
      profitValue,
      profitPercentage,
    };
  };

  const sortedCards = [...(divinationCardData?.lines || [])].sort(
    (cardA, cardB) => {
      const rewardInfoA = parseRewardText(cardA.explicitModifiers?.[0]?.text);
      const itemsA = findMatchingItems(
        rewardInfoA.name.toLowerCase().replace(/\s/g, "-").replace(/[{}]/g, ""),
        rewardInfoA.links
      );
      const profitA = calculateProfit(cardA, itemsA, rewardInfoA.quantity);

      const rewardInfoB = parseRewardText(cardB.explicitModifiers?.[0]?.text);
      const itemsB = findMatchingItems(
        rewardInfoB.name.toLowerCase().replace(/\s/g, "-").replace(/[{}]/g, ""),
        rewardInfoB.links
      );
      const profitB = calculateProfit(cardB, itemsB, rewardInfoB.quantity);

      if (sortBy === "value") {
        return profitB.profitValue - profitA.profitValue;
      } else {
        return profitB.profitPercentage - profitA.profitPercentage;
      }
    }
  );

  return (
    <div className={styles.pageWrapper}>
      <div>Number of rendered cards: {renderedCardsCount}</div>
      <div>
        <button onClick={() => setSortBy("value")}>Sort by Value</button>
        <button onClick={() => setSortBy("percentage")}>
          Sort by % Profit
        </button>
      </div>

      <div className={styles.cardsContainer}>
        {sortedCards.map((cardData) => {
          if (isExcluded(cardData.name)) return null;
          const rewardInfo = parseRewardText(
            cardData.explicitModifiers?.[0]?.text
          );
          const formattedRewardName = rewardInfo.name
            .toLowerCase()
            .replace(/\s/g, "-")
            .replace(/[{}]/g, "");

          const items = findMatchingItems(
            formattedRewardName,
            rewardInfo.links
          );
          if (items.length === 0) return null;

          return (
            <div key={cardData.id}>
              <ComparisonCard
                divinationCard={cardData}
                rewardData={items}
                rewardQuantity={rewardInfo.quantity}
              />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DivinationCarDProfit;
