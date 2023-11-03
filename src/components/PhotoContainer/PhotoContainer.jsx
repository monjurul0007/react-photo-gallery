import { useContext, useState } from "react";
import Image from "../Image";
import "./photoContainer.css";
import { PhotoContext } from "../../Context/PhotoContext";
import { Form } from "react-bootstrap";

const PhotoContainer = () => {
  const { photoIds } = useContext(PhotoContext);

  return (
    <div className="photo-container">
      {photoIds.map((item, index) => (
        <div className={`photo${index + 1} position-relative`}>
          <Image src={item} />
          <Form.Check
            className="position-absolute ms-3 mt-2"
            style={{ top: 0 }}
          />
        </div>
      ))}
    </div>
  );
};

PhotoContainer.propTypes = {};

PhotoContainer.defaultProps = {};

export default PhotoContainer;
