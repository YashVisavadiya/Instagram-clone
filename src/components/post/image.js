import PropTypes from 'prop-types';

export default function Image({ src, caption }) {
  return (
    <img src={src} alt={caption} style={{ width: '100', height: '100' }} />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
