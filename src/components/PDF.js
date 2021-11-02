import React from "react";
import Pdf from "react-to-pdf";
import "../style.css";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Form" ref={ref}>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf" className="Form">
        {({ toPdf }) => (
          <button className="btn btn-primary btn-lg" onClick={toPdf}>
            Generate to PDF
          </button>
        )}
      </Pdf>
    </>
  );
};

export default PDF;
