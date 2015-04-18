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

# ng-classify options

this loader reads the ngClassify option in your webpack.config file:

webpack.config.js:
```js
ngClassify: {
  appName: 'myApp'
  controller: {format: 'upperCamelCase', suffix: 'Ctrl'}
  factory: {format: 'lowerCase'}
  service: {format: 'lowerCase'}
}
```
