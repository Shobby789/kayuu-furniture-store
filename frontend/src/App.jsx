import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Globals/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return <Route element={route.page} key={index} path={route.url} />;
          })}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
