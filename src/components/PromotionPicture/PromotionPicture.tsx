import classes from './PromotionPicture.module.scss';
import React from 'react';

interface IPromotionPictureProps {}

interface IPromotionPictureState {}

export default class PromotionPicture extends React.Component<IPromotionPictureProps, IPromotionPictureState> {
  constructor(props: IPromotionPictureProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className={classes.promotionPicture}></div>;
  }
}
