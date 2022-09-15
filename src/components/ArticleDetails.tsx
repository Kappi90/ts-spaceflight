import { useEffect, useState } from "react";
import {
  Alert,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Details } from "../types/details";

const ArticleDetails = () => {
  const params = useParams();
  console.log("params", params);

  const [article, setArticle] = useState<Details | null>(null);

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const myTime = (string: string): string => {
    let date = new Date(string);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container className='text-center text-dark'>
      <h1 className='text-white'>Article Details</h1>
      {article ? (
        <Row className='justify-content-center'>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src={article.imageUrl} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text style={{ fontSize: "1rem" }}>
                {article.summary}
              </Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>
                <p>Released on:</p> {myTime(article.publishedAt)}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={article.url} target='_blank'>
                Read the article
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>
      ) : (
        <Alert>ERRORE</Alert>
      )}
    </Container>
  );
};
export default ArticleDetails;
