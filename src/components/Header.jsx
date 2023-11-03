import { Button, Form } from "react-bootstrap";
import { PhotoContext } from "../Context/PhotoContext";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const [allCheck, setAllCheck] = useState(false);
  const { photoIds, selectedPhotoIds, handleSelectedPhotoIds, handlePhotoIds } =
    useContext(PhotoContext);

  const onAllCheckSelection = () => {
    if (allCheck) {
      handleSelectedPhotoIds([]);
    }

    setAllCheck((preValue) => !preValue);
  };

  const onDeletePhotos = () => {
    handlePhotoIds(
      photoIds.filter((item, index) => {
        return !selectedPhotoIds.some((id) => id === index);
      })
    );

    handleSelectedPhotoIds([]);
  };

  useEffect(() => {
    setAllCheck(!!selectedPhotoIds.length);
  }, [selectedPhotoIds]);

  return (
    <div
      className="d-flex justify-content-between align-items-center fw-bold"
      style={{ height: 50 }}
    >
      {selectedPhotoIds.length > 0 ? (
        <>
          <Form.Check
            type="checkbox"
            id="selected-checkbok"
            label={`${selectedPhotoIds.length} file${
              selectedPhotoIds.length > 1 ? "s" : ""
            } selected`}
            checked={allCheck}
            onChange={onAllCheckSelection}
          />
          <Button variant="outline-danger" onClick={onDeletePhotos}>
            Delete file{selectedPhotoIds.length > 1 ? "s" : ""}
          </Button>
        </>
      ) : (
        <p className="m-0 h4">Gallery</p>
      )}
    </div>
  );
};

export default Header;
