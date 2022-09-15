import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Articles } from "../types/articles";
import Article from "./Article";

const Home = () => {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticles(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className='justify-content-center p-4'>
      <h1 className='mb-4'>Articles</h1>
      <Row>
        {articles.map((article, i) => (
          <Article key={i} article={article} />
        ))}
      </Row>
    </Container>
  );
};
export default Home;
