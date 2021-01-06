import * as React from 'react';
import classes from './Navigation.module.scss';

export interface INavigationProps {}

export interface INavigationState {}

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className={classes.navigation}>
        <button>Home</button>
        <button>Shop</button>
        <button>Blog</button>
        <button>Membership</button>
      </div>
    );
  }
}
