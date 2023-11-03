import { Button, Form } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Form.Check
        type="checkbox"
        id="selected-checkbok"
        label={`3 file selected`}
      />
      <Button variant="outline-danger">Delete files</Button>
    </div>
  );
};

export default Header;
