import styles from "./ComparisonCard.module.css";
import { DivinationCardCompareProps } from "./interface";

const ComparisonCard = ({
  divinationCard,
  rewardData,
  rewardQuantity,
}: DivinationCardCompareProps) => {
  const chaos =
    "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png";
  const divine =
    "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png";

  const getNumberColor = (value: number) => {
    return value >= 0 ? "green" : "red";
  };
  const totalCostChaos = divinationCard.stackSize * divinationCard.chaosValue;
  const totalCostDivine = divinationCard.stackSize * divinationCard.divineValue;

  const itemName =
    rewardData[0]?.currencyTypeName || rewardData[0]?.name || "Unknown Item";

  const rewardValueChaos =
    (rewardData[0]?.currencyTypeName
      ? rewardData[0]?.chaosEquivalent
      : rewardData[0]?.chaosValue) || 0;

  const rewardValueDivine =
    (rewardData[0]?.currencyTypeName
      ? rewardData[0]?.chaosEquivalent
      : rewardData[0]?.divineValue) || 0;

  const totalRewardChaos = rewardQuantity * rewardValueChaos;

  const totalRewardDivine = rewardQuantity * rewardValueDivine;

  const profitChaos = totalRewardChaos - totalCostChaos;

  const profitDivine = totalRewardDivine - totalCostDivine;

  const profitPercentage = (profitChaos / totalCostChaos) * 100;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topContainer}>
        <div className={styles.cardInfo}>
          <h3>{divinationCard?.name}</h3>
          <img
            src={divinationCard.icon}
            alt={`image of ${itemName}`}
            className={styles.cardImage}
          />

          <div className={styles.grid}>
            <div>Stack size:</div>
            <div>{divinationCard?.stackSize}</div>

            <div>Price:</div>
            <div>
              <span>
                {divinationCard?.chaosValue?.toFixed(1)}
                <img src={chaos} alt="Chaos Orb" width="20" />
              </span>
              <span> / </span>
              <span>
                {divinationCard?.divineValue?.toFixed(1)}
                <img src={divine} alt="Divine Orb" width="20" />
              </span>
            </div>

            <div>Total:</div>
            <div>
              <span>
                {totalCostChaos?.toFixed(1)}
                <img src={chaos} alt="Chaos Orb" width="20" />
              </span>
              <span> / </span>
              <span>
                {totalCostDivine?.toFixed(1)}
                <img src={divine} alt="Divine Orb" width="20" />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.rewardInfo}>
          <h3>
            {rewardQuantity > 1 && `${rewardQuantity} x`} {itemName}
          </h3>
          <br />
          <img
            src={rewardData[0].icon}
            alt={`image of ${itemName}`}
            className={styles.rewardImage}
          />
          <br />
          Value:{" "}
          <span>
            {rewardValueChaos.toFixed(1)}
            <img src={chaos} alt="Chaos Orb" width="20" />
          </span>
          <span> / </span>{" "}
          <span>
            {rewardValueDivine?.toFixed(1)}
            <img src={divine} alt="Divine Orb" width="20" />
          </span>
        </div>
      </div>
      <hr className={styles.horizontalLine} />
      <div className={styles.profitInfo}>
        Reward:{" "}
        <span>
          {totalRewardChaos?.toFixed(1)}{" "}
          <img src={chaos} alt="Chaos Orb" width="20" />
        </span>
        <span> / </span>
        <span>
          {totalRewardDivine?.toFixed(1)}
          <img src={divine} alt="Divine Orb" width="20" />
        </span>
        <br />
        Cost:{" "}
        <span>
          {totalCostChaos?.toFixed(1)}{" "}
          <img src={chaos} alt="Chaos Orb" width="20" />
        </span>
        <span> / </span>
        <span>
          {totalCostDivine?.toFixed(1)}
          <img src={divine} alt="Divine Orb" width="20" />
        </span>
        <br />
        Profit:{" "}
        <span style={{ color: getNumberColor(profitChaos) }}>
          {profitChaos?.toFixed(1)}
          <img src={chaos} alt="Chaos Orb" width="20" />
        </span>
        <span> / </span>
        <span style={{ color: getNumberColor(profitDivine) }}>
          {profitDivine?.toFixed(1)}
          <img src={divine} alt="Divine Orb" width="20" />
        </span>{" "}
        <span> / </span>
        <span style={{ color: getNumberColor(profitPercentage) }}>
          {profitPercentage?.toFixed(1)}
        </span>
        %
      </div>
    </div>
  );
};

export default ComparisonCard;
