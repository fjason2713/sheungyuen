import classes from './BrandLogo.module.scss';
import React from 'react';
import SheungYuen from '../../assets/sy_logo.jpg';

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
      <div className={classes.logo}>
        <img src={SheungYuen} alt="SheungYuen" />
      </div>
      <div className={classes.bodyText}>
        <p>First Quarter Jewellery</p>
        <p>上弦閣｜古風首飾設計</p>
      </div>
    </div>
  );
};

export default BrandLogo;
