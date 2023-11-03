import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { PhotoContext } from "../Context/PhotoContext";

const UploadFile = () => {
  const { photoIds, handlePhotoIds } = useContext(PhotoContext);

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;

        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        handlePhotoIds([...photoIds, result]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="border rounded-2 mt-5 p-4">
      <Form>
        <Form.Group>
          <Form.Label>Upload Image:</Form.Label>
          <Form.Control type="file" onChange={handleFileInputChange} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UploadFile;
