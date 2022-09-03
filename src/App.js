
import Login from "./adminPages/login/Login";
import List from "./adminPages/list/List";
import Single from "./adminPages/single/Single";
import New from "./adminPages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Home } from "./pages/Home/Home";
import { Inscriptions } from "./pages/Inscriptions/Inscriptions";
import { RGA } from "./pages/RGA/RGA";
import { Seances } from "./pages/Seances/Seances";
import { Multimedia } from "./pages/Multimedia/Multimedia";
import { Contact } from "./pages/Contact/Contact";
import { MainNav } from "./components/MainNav/MainNav";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <MainNav/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="rga" element={<RGA />} />
            <Route path="inscriptions" element={<Inscriptions />} />
            <Route path="seances" element={<Seances />} />
            <Route path="multimedia" element={<Multimedia />} />
            <Route path="contact" element={<Contact />} />
          </Route>

            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
