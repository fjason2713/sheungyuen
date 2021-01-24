import classes from './InstagramProduct.module.scss';
import React from 'react';

export interface IInstagramProductProps {
  image: string;
  name: string;
  originalPrice: number;
  discountPrice?: number;
}

interface IInstagramProductState {}

export default class InstagramProduct extends React.Component<IInstagramProductProps, IInstagramProductState> {
  constructor(props: IInstagramProductProps) {
    super(props);

    this.state = {};
  }

  public render() {
    // TODO:
    // 1. image enlarge when hover
    // 2. show 快速瀏覽 mask when hover
    const { image, name, originalPrice, discountPrice } = this.props;
    return (
      <div className={classes.instagramProduct}>
        <div className={classes.interactiveImg}>
          <img src={image} alt={'product'} />
        </div>
        <p className={classes.name}>{name}</p>
        <p className={classes.prices}>
          {!!discountPrice ? (
            <>
              <span style={{ textDecoration: 'line-through' }}>HK${originalPrice}</span> HK$
              {discountPrice}
            </>
          ) : (
            `HK$${originalPrice}`
          )}
        </p>
      </div>
    );
  }
}
