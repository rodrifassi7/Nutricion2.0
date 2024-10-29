import PropTypes from 'prop-types';


export const ImgText = ({ text, imageSrc, delay }) => (
  <div className={`flex items-center space-x-2 animate__animated animate__fadeInLeft animate__delay-${delay}`}>
    <span className="text-xl leading-none">{text}</span>
    <img src={imageSrc} alt={`Imagen de corazon verde`} className="w-8 h-8 rounded-full" />
  </div>
);

ImgText.propTypes = {
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
};