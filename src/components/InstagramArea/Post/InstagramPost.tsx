import classes from './InstagramPost.module.scss';
import React from 'react';

export interface IInstagramPostProps {
  date: Date;
  img: string;
  description: string;
}

interface IInstagramPostState {
  isHover: boolean;
}

export default class InstagramPost extends React.Component<IInstagramPostProps, IInstagramPostState> {
  constructor(props: IInstagramPostProps) {
    super(props);

    this.state = {
      isHover: false,
    };
  }

  public render() {
    const { date, img, description } = this.props;
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
