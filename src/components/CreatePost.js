import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const CreatePost = ({ addPost, currentUser }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(currentUser);
  const [image, setImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !author) return;

    const newPost = {
      id: Date.now(),
      user: author,
      title,
      content,
      image: image || "https://via.placeholder.com/600x250.png?text=New+Post"
    };
    addPost(newPost);

    // reset form
    setTitle("");
    setContent("");
    setAuthor(currentUser);
    setImage("");
  };

  return (
    <Container className="mt-4" id="create">
      <h3>Create a New Post</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter blog content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Post</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
