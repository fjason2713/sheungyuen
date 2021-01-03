import * as React from 'react';
import classes from './Header.module.scss';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return <div className={classes.header}>{props.children}</div>;
};

export default Header;
