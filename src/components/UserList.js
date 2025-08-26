import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const UserList = ({ users, toggleFollow }) => {
  return (
    <Container className="mt-4">
      <h3>Suggested Users</h3>
      <Row>
        {users.map((user) => (
          <Col md={4} key={user.name} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Button
                  variant={user.following ? "danger" : "success"}
                  onClick={() => toggleFollow(user.name)}
                >
                  {user.following ? "Unfollow" : "Follow"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
