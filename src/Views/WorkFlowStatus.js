import React from 'react';
import tinycolor from 'tinycolor2';

function WFStatus ({ text }) {

    let backgroundColor;
    let borderColor;
    let textColor;
    let filledBulletColor;

    switch (text) {
        case "Low Risk":
            backgroundColor = "#D7E5DA";
            borderColor = "#53D86A";
            textColor = "#53D86A";
            filledBulletColor = "#53D86A";
            break;
        case "Uncomplete":
            backgroundColor = tinycolor("rgba(255, 61, 0, 0.1)").toRgbString();
            borderColor = "#FF3D00";
            textColor = "#FF3D00";
            filledBulletColor = "#FF3D00";
            break;
        case "Needs Review":
            backgroundColor = "#ECECED";
            borderColor = "#B8B9BC";
            textColor = "#B8B9BC";
            filledBulletColor = "#B8B9BC";
            break;
        default:
            // Default case is unassigned styling
            backgroundColor = "#ECECED";
            borderColor = "#B8B9BC";
            textColor = "#B8B9BC";
            filledBulletColor = "#B8B9BC";
            break;

    }

    return (
        <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '150px',
            height: '80%',
            borderColor: borderColor,
            background: backgroundColor,
            border: `1px solid ${borderColor}`,
            borderRadius: '4px',
        }}>
            <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                background: filledBulletColor,
                marginRight: '8px',
            }} />
            <span style={{ color: textColor }}>{text}</span>
        </div>
    );
};

export default WFStatus;
