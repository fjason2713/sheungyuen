import * as React from 'react';
import BrandLogo from './components/BrandLogo/BrandLogo';
import Header from './components/layout/Header/Header';
import Navigation from './components/Navigation/Navigation';

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <Header>
          <BrandLogo size={'large'} />
          <Navigation />
        </Header>
      </div>
    );
  }
}
