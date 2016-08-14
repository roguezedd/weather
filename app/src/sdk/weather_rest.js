import $ from 'jquery';
import ENV from './env';

export default class Rest {
  constructor() {
  }

  static getReq(url) {
    return $.ajax({ url: ENV.BASEURL + url });
  }
}