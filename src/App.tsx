import * as React from 'react';
import BrandLogo from './components/BrandLogo/BrandLogo';
import Header from './components/layout/Header/Header';
import Navigation from './components/Navigation/Navigation';
import classes from './App.module.scss';
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
        <Header>
          <BrandLogo size={'large'} />
          <Navigation />
        </Header>
      </div>
    );
  }
}
