import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div>
      <Spinner animation="border" size="sm" />
    </div>
  );
};

export default Loading;
