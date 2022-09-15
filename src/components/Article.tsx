import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Articles } from "../types/articles";

interface SingleArticleProps {
  article: Articles;
}

const Article = ({ article }: SingleArticleProps) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card
        className='mb-4 cardStyle'
        style={{
          width: "18rem",
          height: "24rem",
          boxShadow: "4px 4px 18px 0px rgba(255,255,255,0.75)",
        }}
      >
        <Link to={"/details/" + article.id}>
          <Card.Img
            style={{ height: "16rem" }}
            variant='top'
            src={article.imageUrl}
          />
        </Link>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{article.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Article;
