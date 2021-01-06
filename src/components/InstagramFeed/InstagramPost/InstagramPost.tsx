import classes from './InstagramPost.module.scss';
import React from 'react';

interface IInstagramPostProps {
  post: InstagramPostData;
}

interface IInstagramPostState {
  isHover: boolean;
}

export interface InstagramPostData {
  date: Date;
  img: string;
  description: string;
}

export default class InstagramPost extends React.Component<IInstagramPostProps, IInstagramPostState> {
  constructor(props: IInstagramPostProps) {
    super(props);

    this.state = {
      isHover: false,
    };
  }

  public render() {
    const { date, img, description } = this.props.post;
    // const hoursPassed = Math.ceil((new Date().getTime() - date.getTime()) / 3600000);
    return (
      <div
        className={`${classes.instagramPost} ${this.state.isHover ? classes.isHover : ''}`}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <div className={classes.textMask}>
          <p>{description}</p>
        </div>
        <img src={img} alt="ig-post" />
      </div>
    );
  }
}
