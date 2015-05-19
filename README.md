# Rikku

To transform string like "\\xE5\\x8F\\xAF\\xE3\\x80\\x82" into normal ones.

![Rikku](rikku.jpg)

## Installation

```sh
$ npm install --save rikku
```

## Usage

```javascript
var rikku = require("rikku");
var str = "Rikku \\xe5\\xb0\\xb1\\xe6\\x98\\xaf\\xe6\\x9c\\x80\\xe7\\xbb\\x88\\xe5\\xb9\\xbb\\xe6\\x83\\xb3\\xe9\\x87\\x8c\\xe9\\x9d\\xa2\\xe7\\x9a\\x84\\xe8\\x8e\\x89\\xe5\\x8f\\xaf\\xe3\\x80\\x82";
console.log(rikku.decode(str));
```

## Contribution

You're welcome to make pull requests.

「雖然我覺得不怎麼可能有人會關注我」

