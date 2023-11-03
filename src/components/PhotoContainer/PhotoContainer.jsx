import { useContext, useState } from "react";
import Image from "../Image";
import "./photoContainer.css";
import { PhotoContext } from "../../Context/PhotoContext";
import { Form } from "react-bootstrap";

const PhotoContainer = () => {
  const { photoIds, selectedPhotoIds, handleSelectedPhotoIds } =
    useContext(PhotoContext);

  const onSelectPhoto = (photoId) => {
    const isPhotoSelected = selectedPhotoIds.some((id) => photoId === id);

    if (isPhotoSelected) {
      handleSelectedPhotoIds(
        selectedPhotoIds.filter((item) => item !== photoId)
      );
    } else {
      handleSelectedPhotoIds(selectedPhotoIds.concat(photoId));
    }
  };

  return (
    <div className="photo-container">
      {photoIds.map((item, index) => (
        <div className={`photo${index + 1} position-relative`}>
          <Image src={item} />
          <Form.Check
            className="position-absolute ps-3 pt-2 rounded-2 w-100 h-100 photo-checkbox"
            style={{ top: 0 }}
            onChange={() => onSelectPhoto(index)}
            checked={selectedPhotoIds.some((id) => index === id)}
          />
        </div>
      ))}
    </div>
  );
};

PhotoContainer.propTypes = {};

PhotoContainer.defaultProps = {};

export default PhotoContainer;
