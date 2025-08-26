import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const BlogDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <Container className="mt-4">
        <h3>Post not found</h3>
        <Link to="/"><Button>Back to Home</Button></Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">By {post.user}</Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
          <Link to="/"><Button variant="secondary">Back</Button></Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogDetail;
