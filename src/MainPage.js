import { Link } from "react-router-dom";
import "./MainPage.css";
import "./Components/Modal_okno/Modal_okno";
import Window from "./Components/Modal_okno/Window";
import Gallery from "./Drist/App1";

export const MainPage = () => (
  <nav>
    <div className="app-wrapper">
      <header className="header"></header>
      <nav className="nav">
        <div>
          <Link to="/settings">Настройки профиля</Link>
        </div>
        <div>
          <Link to="/bills">Счета</Link>{" "}
        </div>
        <div>
          <Window />
        </div>
      </nav>
      {/* <div className="content">
        <Gallery />
      </div> */}
    </div>
  </nav>
);

export default MainPage;
