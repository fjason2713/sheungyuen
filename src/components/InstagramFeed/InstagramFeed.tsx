import classes from './InstagramFeed.module.scss';
import React from 'react';
import InstagramPost, { InstagramPostData } from './InstagramPost/InstagramPost';
import DummyImg from '../../assets/sy_logo.jpg';

interface IInstagramFeedProps {}

interface IInstagramFeedState {
  loading: boolean;
  posts: InstagramPostData[];
}

export default class InstagramFeed extends React.Component<IInstagramFeedProps, IInstagramFeedState> {
  constructor(props: IInstagramFeedProps) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
    };
  }

  componentDidMount() {
    //TODO: fetch instagram api
    const posts: InstagramPostData[] = [
      {
        img: DummyImg,
        date: new Date(),
        description: 'welcome to first-quarter',
      },
      {
        img: DummyImg,
        date: new Date(),
        description: 'welcome welcome to first-quarter',
      },
    ];
    this.setState({ posts, loading: false });
  }

  public render() {
    return (
      <div className={classes.instagramFeed}>
        <div className={classes.posts}>
          {!this.state.loading &&
            this.state.posts.map((post, index) => {
              return <InstagramPost key={index} post={post} />;
            })}
        </div>
        <div className={classes.shopOverview}></div>
        <div className={classes.products}></div>
      </div>
    );
  }
}
