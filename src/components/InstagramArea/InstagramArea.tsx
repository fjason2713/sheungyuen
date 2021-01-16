import SheungYuen from '../../assets/sy_logo.jpg';
import classes from './InstagramArea.module.scss';
import React from 'react';
import InstagramPost, { IInstagramPostProps } from './Post/InstagramPost';
import DummyImg from '../../assets/alvava.jpg';
import InstagramProduct, { IInstagramProductProps } from './Product/InstagramProduct';

interface InstagramAreaProps {}

interface IInstagramAreaState {
  loading: boolean;
  posts: IInstagramPostProps[];
  products: IInstagramProductProps[];
}

export default class InstagramArea extends React.Component<InstagramAreaProps, IInstagramAreaState> {
  constructor(props: InstagramAreaProps) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      products: [],
    };
  }

  componentDidMount() {
    //TODO: fetch instagram api
    const posts: IInstagramPostProps[] = [
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
    const products: IInstagramProductProps[] = [
      {
        image: DummyImg,
        name: '夏夜流螢〈夜〉· 步搖',
        originalPrice: 130.0,
        discountPrice: 104.0,
      },
      {
        image: DummyImg,
        name: '長安 · 手鐲',
        originalPrice: 120.0,
      },
      {
        image: DummyImg,
        name: '長安 · 手鐲',
        originalPrice: 120.0,
        discountPrice: 80.0,
      },
      {
        image: DummyImg,
        name: '長安 · 手鐲',
        originalPrice: 120.0,
        discountPrice: 80.0,
      },
    ];
    this.setState({ posts, products, loading: false });
  }

  public render() {
    const { loading, posts, products } = this.state;
    return (
      <div className={classes.instagramFeed}>
        <div className={classes.posts}>
          {!loading &&
            posts.map((post, index) => {
              return <InstagramPost key={index} {...post} />;
            })}
        </div>
        <div className={classes.shopOverview}>
          <p className={classes.header}>
            上弦閣 | 品牌故事
            <br />
            Luna Archaistic Jewellery | Background
          </p>
          <img className={classes.largeLogo} src={SheungYuen} alt={'large_logo'} />
          <p className={classes.body}>
            <a href={'https://www.instagram.com/_sheungyuen_/?hl=zh-tw'} target={'_blank'} rel="noreferrer">
              上弦閣 (Luna Archaistic Jewellery)
            </a>
            源自香港 🇭🇰， 起初是一間 Instagram Store ，經營不到一年已經獲得不少熱愛古風的朋友關注。
            我們的顧客來自香港、台灣和東南亞國家。 店主天凝 @_tin.ying_
            是一位漢服愛好者，上弦閣店內所有產品都是她親手設計和製作
            <br />
            為了讓每一件飾品都有它獨特的故事，天凝也會特地戴上自製的古風首飾外出拍攝漢服影集。
          </p>
        </div>
        <div className={classes.products}>
          {!loading &&
            products.map((product, index) => {
              return <InstagramProduct key={index} {...product} />;
            })}
        </div>
      </div>
    );
  }
}
