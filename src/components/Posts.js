import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <Container className="mt-4">
      <h3>Your Feed</h3>
      <Row>
        {posts.length === 0 ? (
          <p>No posts yet. Follow users to see their posts!</p>
        ) : (
          posts.map((post) => (
            <Col md={6} className="mb-4" key={post.id}>
              <Card>
                <Card.Img variant="top" src={post.image} height={250} />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    Posted by {post.user}
                  </Card.Subtitle>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                  <Link to={`/post/${post.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Posts;
