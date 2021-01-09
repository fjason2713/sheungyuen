import React from 'react';
import classes from './App.module.scss';
import Home from './pages/Home/Home';
import './reset.scss';

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className={classes.app}>
        <Home />
      </div>
    );
  }
}
