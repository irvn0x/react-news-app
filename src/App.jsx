import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Import Components
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Loading from "./components/Loading";

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
