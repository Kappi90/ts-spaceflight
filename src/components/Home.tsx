import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Articles } from "../types/articles";

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
    <Container>
      <h1>Articles</h1>
      <Row className='justify-content-center'>
        {articles.map((article, i) => (
          <Col xs={12} md={6} lg={4} key={i}>
            <Card className='mb-4' style={{ width: "18rem", height: "24rem" }}>
              <Link to={"/details/" + article.id}>
                <Card.Img
                  style={{ height: "16rem" }}
                  variant='top'
                  src={article.imageUrl}
                />
              </Link>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  {article.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
