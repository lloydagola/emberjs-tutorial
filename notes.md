emberjs
A framework for ambitious web developers
A productive, battle-tested JS framework forrm bulding
modern web apps. It includes everything you need to
build rich UIs that work on any device

Why ember?
used by Linked In, MS, Apple Music, Netflix, Squatre
easy to learn
includes embiCLI; a cool tool to init an ember project
includes emberData to help organize data on the client-side
and communicate with the server
large community and forum

commands
init ember app
ember init

generate routes
ember g route routename
or ember g route routename/nested

dont forget index routes
ember g route routename/index

generate dynamic routes
1.ember g route routename

2.override path in router.js
this.route('item', { path: '/item/:item_id' });

3.handle model in routes/routename.js

export default class ItemRoute extends Route {
model(params) {
const { item_id } = params;

    return item_id;

}
}

remove routes
ember destroy route routename

adding controllers
ember g controller controllername

links
<LinkTo @route="item" @model="1">product 1</LinkTo>
