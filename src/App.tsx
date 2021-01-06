import * as React from 'react';
import classes from './App.module.scss';
import Blogs from './components/Blogs/Blogs';
import BrandLogo from './components/BrandLogo/BrandLogo';
import InstagramFeed from './components/InstagramFeed/InstagramFeed';
import Body from './components/layout/Body/Body';
import Header from './components/layout/Header/Header';
import Navigation from './components/Navigation/Navigation';
import PromotionPicture from './components/PromotionPicture/PromotionPicture';
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
        <div className={classes.divider} />
        <Body>
          <InstagramFeed />
          <Blogs />
          <PromotionPicture />
        </Body>
      </div>
    );
  }
}
