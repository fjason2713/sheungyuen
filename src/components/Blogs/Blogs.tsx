import classes from './Blogs.module.scss';
import React from 'react';

interface IBlogsProps {}

interface IBlogsState {}

export default class Blogs extends React.Component<IBlogsProps, IBlogsState> {
  constructor(props: IBlogsProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className={classes.blogs}></div>;
  }
}
