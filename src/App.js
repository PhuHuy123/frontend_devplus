import "./style/App.scss";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTE } from "./route.constants";
import Loader from "@app/pages/Loader";
import Title from "./components/Title";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.HOME,
    title: "Devplus",
    component: lazy(() => import("@app/pages/Home")),
  },
];
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Title title={route.title}>
                  <route.component />
                </Title>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
