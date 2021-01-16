import SheungYuen from '../../assets/sy_logo.jpg';
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
        <div className={classes.shopOverview}>
          <p className={classes.title}>
            上弦閣 | 品牌故事
            <br />
            Luna Archaistic Jewellery | Background
          </p>
          <div className={classes.largeLogo}>
            <img src={SheungYuen} alt="SheungYuen" />
          </div>
          <p className={classes.content}>
            上弦閣 | 品牌故事 Luna Archaistic Jewellery | Background 上弦閣 (Luna Archaistic Jewellery) 源自香港 🇭🇰
            <br />
            起初是一間 Instagram Store ，經營不到一年已經獲得不少熱愛古風的朋友關注
            <br />
            我們的顧客來自香港、台灣和東南亞國家。 店主天凝 @_tin.ying_
            是一位漢服愛好者，上弦閣店內所有產品都是她親手設計和製作
            <br />
            為了讓每一件飾品都有它獨特的故事，天凝也會特地戴上自製的古風首飾外出拍攝漢服影集
          </p>
        </div>
        <div className={classes.products}></div>
      </div>
    );
  }
}
