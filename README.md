# ng-classify-loader

this is a webpack loader to preprocess coffeescript written with ng-classify syntax.

# Usage

use as a loader BEFORE coffe-loader

```js
module: {
  loaders: [ 
    test: /\.coffee/,
    loaders: [
      "coffee-loader",
      "ng-classify-loader"
    ]
  ]
}
```
