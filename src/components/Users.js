import React from "react";
import { Card } from "react-bootstrap";

const Users = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts?.map((post, id) => (
          <div className="flex">
            <Card className="Card" key={id}>
              <Card.Img variant="top" src={post.avatar} />
              <Card.Body>
                <Card.Text>{post.id}</Card.Text>
                <Card.Text>{post.email}</Card.Text>
                <Card.Text>
                  {post.first_name} {post.last_name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
