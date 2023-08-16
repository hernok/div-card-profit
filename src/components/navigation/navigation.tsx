import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>

          <Link to="/divinationCardProfit">Divination Card Profit</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
