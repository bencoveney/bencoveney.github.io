import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Homepage } from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTitle } from "./hooks/usePageTitle";

const reactRoot = document.getElementById("react-root");
if (!reactRoot) {
  throw new Error("Could not find react root");
}

function HomepageWrapper() {
  useTitle("Ben Coveney");
  return <Homepage pages={(window as any).pages} />;
}

ReactDOM.hydrateRoot(
  reactRoot,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomepageWrapper />} />
    </Routes>
  </BrowserRouter>
);
