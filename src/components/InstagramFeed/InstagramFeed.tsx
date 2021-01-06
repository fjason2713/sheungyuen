import classes from './InstagramFeed.module.scss';
import React from 'react';

interface IInstagramFeedProps {}

interface IInstagramFeedState {}

export default class InstagramFeed extends React.Component<IInstagramFeedProps, IInstagramFeedState> {
  constructor(props: IInstagramFeedProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className={classes.instagramFeed}></div>;
  }
}
