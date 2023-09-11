import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import Components
import Container from "./assets/components/Container";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
      <div>
        <Container>
          <Navbar />
          <h1>Hello World</h1>
        </Container>
      </div>
    </>
  );
}

export default App;
