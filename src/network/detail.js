import {request} from './request';
export function getDetail(id) {
  return request({
    url: '/detail/',
    params: {
      id
    }
  })
}

export class GoodsInfo{
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.newPrice = itemInfo.newPrice;
    this.currency = itemInfo.currency;
    this.priceTags = itemInfo.priceTags;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class ShopInfo{
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.categories = shopInfo.categories;
    this.cFans = shopInfo.cFans;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
    this.levelDesc = shopInfo.levelDesc;
    this.level = shopInfo.level
    this.saleDesc = shopInfo.saleDesc;
    this.shopUrl = shopInfo.shopUrl;
    this.star = shopInfo.star;
  }  
}

export class GoodsDetailInfo{
  constructor(detailInfo) {
    this.desc = detailInfo.desc;
    this.img0 = detailInfo.detailImage[0];
    this.img1 = detailInfo.detailImage[1];
    this.img2 = detailInfo.detailImage[2];
    this.img3 = detailInfo.detailImage[3];
    this.list = [
      detailInfo.detailImage[0],
      detailInfo.detailImage[1],
      detailInfo.detailImage[2],
      detailInfo.detailImage[3]
    ]
  }
}

export class Params{
  constructor(itemParams) {
    this.set = itemParams.info.set;
    this.desc = itemParams.rule.desc;
    this.tables = [
      itemParams.rule.tables[0],
      itemParams.rule.tables[1],
      itemParams.rule.tables[2],
      itemParams.rule.tables[3]
    ];
    this.disclaimer = itemParams.disclaimer
  }
}