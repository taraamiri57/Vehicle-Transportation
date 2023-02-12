import React from 'react';
import tinycolor from 'tinycolor2';
import PropTypes from 'prop-types';

function WFStatus({ text }) {
  const statusMap = {
    'Low Risk': {
      backgroundColor: '#D7E5DA',
      borderColor: '#53D86A',
      textColor: '#53D86A',
      filledBulletColor: '#53D86A',
    },
    'Uncomplete': {
      backgroundColor: tinycolor('rgba(255, 61, 0, 0.1)').toRgbString(),
      borderColor: '#FF3D00',
      textColor: '#FF3D00',
      filledBulletColor: '#FF3D00',
    },
    'Needs Review': {
      backgroundColor: '#ECECED',
      borderColor: '#B8B9BC',
      textColor: '#B8B9BC',
      filledBulletColor: '#B8B9BC',
    },
    default: {
      backgroundColor: '#ECECED',
      borderColor: '#B8B9BC',
      textColor: '#B8B9BC',
      filledBulletColor: '#B8B9BC',
    },
  };

  const { backgroundColor, borderColor, textColor, filledBulletColor } =
    statusMap[text] || statusMap.default;

  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: "130px",
        height: '80%',
        borderColor,
        background: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '4px',
          background: filledBulletColor,
          marginRight: '8px',
        }}
      />
      <span style={{ color: textColor }}>{text}</span>
    </div>
  );
}

WFStatus.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WFStatus;
