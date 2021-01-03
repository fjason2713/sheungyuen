import classes from './BrandLogo.module.scss';
import React from 'react';
import SheungYuen from '../../assets/brand_logo.jpg';

interface IBrandLogoProps {
  size: 'large' | 'small';
  circle?: boolean;
}

const BrandLogo: React.FunctionComponent<IBrandLogoProps> = (props) => {
  return (
    <div
      className={`${classes.brandLogo} ${props.size === 'large' ? classes.large : classes.small} ${
        props.circle ? classes.circle : ''
      }`}
    >
      <img src={SheungYuen} alt="SheungYuen" />
      <p>First Quarter Jewellery</p>
      <p>上弦閣｜古風首飾設計</p>
    </div>
  );
};

export default BrandLogo;
