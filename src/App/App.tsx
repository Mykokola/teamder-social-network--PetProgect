import React from "react";
import { Auth } from "./Components/auth/Auth";
import { UserInterFace } from "./Components/UserIntarface/UserInterFace";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RestrictRoute } from "../untils/customProvider";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <RestrictRoute
              switherTo={false}
              redirectTo="/user/"
              component={Auth}
            />
          }
        />
        <Route
          path="/user/*"
          element={
            <RestrictRoute
              switherTo={true}
              component={UserInterFace}
              redirectTo="/"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
