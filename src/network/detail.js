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