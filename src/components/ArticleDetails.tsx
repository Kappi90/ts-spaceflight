import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Details } from "../types/details";

const ArticleDetails = () => {
  const params = useParams();
  console.log("params", params);

  const [article, setArticle] = useState<Details[]>([]);

  useEffect(() => {
    fetchArticle();
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

  return (
    <Container className='text-center'>
      <h1>Article Details</h1>
      {/* <Row className='justify-content-center'>
        {article ? <h2>...</h2> : <Alert variant='danger'>ERROR</Alert>}
      </Row>*/}
    </Container>
  );
};
export default ArticleDetails;
