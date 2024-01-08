import PropTypes from "prop-types";

const Image = ({ src, width, height }) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      className="border border-secondary border-1 rounded-2"
      style={{ aspectRatio: "1/1" }}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Image.defaultProps = {
  src: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  width: "100%",
};

export default Image;
