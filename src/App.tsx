import React from "react";

import { Themer, ThemeWrapper } from "./components/Theme";
import { ThemeProvider } from "./context/Theme";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <>
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            CRA Typescript template <Themer />
          </h1>
          <h4>
            This template supports Typescript and includes a built-in theme
            manager
          </h4>
        </>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default App;
