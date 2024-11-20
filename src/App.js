import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo, Settings } from "./Components/Pages";
import MainPage from "./MainPage";
import Gallery from "./Drist/App1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="bills" element={<PageTwo />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default App;
