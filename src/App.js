import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./index.css";

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;