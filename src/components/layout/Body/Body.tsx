import * as React from 'react';
import classes from './Body.module.scss';

export interface IBodyProps {}

export interface IBodyState {}

export default class Body extends React.Component<IBodyProps, IBodyState> {
  constructor(props: IBodyProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className={classes.body}>{this.props.children}</div>;
  }
}
