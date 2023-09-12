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
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);

      const res = await getNews({
        searchQuery: "google",
      });

      if (!res) {
        setLoading(false);
        setError(true);

        return;
      }

      setLoading(false);
      setArticles(res.articles);
    };

    return fetchTechNews;
  }, []);

  return (
    <>
      <div>
        <Container>
          <Navbar />
          {loading && <Loading />}
          {error && <Error />}
          {!loading && articles.length > 0 && <h1>Hello, Articles</h1>}
        </Container>
      </div>
    </>
  );
}

export default App;
