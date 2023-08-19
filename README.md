# Divination Card Profit Calculator

<p align="center">
  <img src="https://raw.githubusercontent.com/hernok/div-card-profit/main/public/Preview.png" width="800">
</p>

## Description

   This application is designed to compare divination card prices to the price of their respective rewards, allowing users to determine potential profits.

## Installation & Setup

   This application is built using React and TypeScript. To get started:

1. **Clone the Repository**:
   ```bash
     git clone https://github.com/hernok/div-card-profit
     cd div-card-profit

1. Setup the Environment File:

   Create a .env file in the root directory of the project with the following contents:
      ```.env
      REACT_APP_CURRENT_LEAGUE=Ancestor
      REACT_APP_BASE_URL=/api
      ```
      Note: Ensure that the .env file is added to your .gitignore to prevent accidentally pushing sensitive information to the repository.

2. **Install Dependencies**:
    - npm install

3. **Start the Application**:
    - npm start
    
    Upon running the npm start command, the application should launch in your default web browser. If not, you can manually access it by navigating to http://localhost:3000/.

## Features

- **Sorting**: Users can sort data by profit. Simply click the button corresponding to the currency type (chaos or divine) you'd like to sort by.
- **Data Fetching**: Fetch the latest data by pressing the fetch button.
- **Data Processing**: Before comparing the data, the application processes it in the following way:
   - Modifies item names to match divination card rewards with their actual names.
   - If the `currencyDetails` property exists, it's removed as it's unnecessary for this application.
   - The data within the first set of curly braces is extracted using regex and match techniques.
   - The complete reward name is derived, taking into account all characters until a special character or the end is reached.
   - All data types are consolidated into a singular array.
   - The filter method is employed to pinpoint items that match specific criteria.
   - Out of approximately 370 divination cards in the game, only 135 are rendered within the application. Most excluded cards are considered "gamble cards".

## Profit Calculation

To determine profit:
Profit = (Number of Rewards * Price per Reward) - (Number of Cards * Price per Card)


## API Endpoints Utilized

  - **Currency**: [Currency Endpoint](https://poe.ninja/api/data/currencyoverview?league=Blight&type=Currency)
  - **Fragment**: [Fragment Endpoint](https://poe.ninja/api/data/currencyoverview?league=Blight&type=Fragment)
  - **Oils**: [Oils Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=Oil)
  - **Scarabs**: [Scarabs Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=Scarab)
  - **Fossils**: [Fossils Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=Fossil)
  - **Essence**: [Essence Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=Essence)
  - **Divination Cards**: [Divination Cards Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=DivinationCard)
  - **Skill Gems**: [Skill Gems Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=SkillGem)
  - **Base Types**: [Base Types Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=BaseType)
  - **Unique Maps**: [Unique Maps Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=UniqueMap)
  - **Unique Jewels**: [Unique Jewels Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=UniqueJewel)
  - **Unique Flasks**: [Unique Flasks Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=UniqueFlask)
  - **Unique Weapons**: [Unique Weapons Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=UniqueWeapon)
  - **Unique Armours**: [Unique Armours Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=UniqueArmour)
  - **Unique Accessories**: [Unique Accessories Endpoint](https://poe.ninja/api/data/itemoverview?league=Blight&type=UniqueAccessory)

## Note
The application and its data is primarily sourced from the poe.ninja API. Ensure you're aware of any limitations or terms of service when interacting with or using this data.
