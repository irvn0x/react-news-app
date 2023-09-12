import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Import Components
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Loading from "./components/Loading";

import { getNews } from "./services/getNews";

function App() {
  useEffect(() => {
    const fetchTechNews = async () => {
      const res = await getNews({
        searchQuery: "google",
      });

      console.log(res);
    };

    return fetchTechNews;
  }, []);

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
