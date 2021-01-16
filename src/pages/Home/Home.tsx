import React from 'react';
import { Helmet } from 'react-helmet';
import Blogs from '../../components/Blogs/Blogs';
import BrandLogo from '../../components/BrandLogo/BrandLogo';
import InstagramArea from '../../components/InstagramArea/InstagramArea';
import Body from '../../components/layout/Body/Body';
import Header from '../../components/layout/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PromotionPicture from '../../components/PromotionPicture/PromotionPicture';
import classes from './Home.module.scss';

interface IHomeProps {}

interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className={classes.home}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>上弦閣 - First Quarter Jewelry</title>
        </Helmet>

        <Header>
          <BrandLogo size={'large'} />
          <Navigation />
        </Header>
        <div className={classes.divider} />
        <Body>
          <InstagramArea />
          <Blogs />
          <PromotionPicture />
        </Body>
      </div>
    );
  }
}
