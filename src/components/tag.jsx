import PropTypes from "prop-types";

const Tag = ({ name }) => {
  return <span className="rounded-full bg-backgound p-2">{name}</span>;
};

export default Tag;

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};
