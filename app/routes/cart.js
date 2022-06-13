import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 30 }, { price: 35 }];

    return items;
  }
}
