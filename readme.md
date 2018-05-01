# validate-switch [![Build Status](https://travis-ci.org/chinanf-boy/validate-switch.svg?branch=master)](https://travis-ci.org/chinanf-boy/validate-switch) [![codecov](https://codecov.io/gh/chinanf-boy/validate-switch/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/validate-switch?branch=master)

> 全局验证开关

[中文](./readme.md) | [english](./readme.en.md)

作为一个命令行-最重要的且唯一的 验证 来自用户 `不确定的输入`

一旦, 我们确定, 用户给予的值是`正确`

那么, 位于大型cli, 底下的`功能函数`, 就可以确定, 给予他们的参数是正确的

我们就 ✂️过滤掉功能函数-验证部分, 那么不久更快了吗 😄😄😄😄😄😄

为什么 ???? ❓

因为我们已经可以控制了吖

---

## 思路

`功能函数` 分两种操作

1. 作为 cli 的 底座 `不需要验证数据`

2. 自身功能-验证项目 `需要验证数据`

说来说去, 也就是有关 `验证数据`-操作 是否过滤掉, 所以一个 `开关`, 诞生了

简单采用 `validate-switch`

``` js
if(getValidate().state){ // default: true
  // includes📦
  // validate data etc ...
}
```

> `validate-switch` is nothing to do, just global val return

> 最重要的是, 你, 掌控数据的变化, 不管过程是否成功👌还是失败❌, 都应该是可控范围

> 我觉得这才是, 这个项目想要传输的思想

---


## Install

```
npm install validate-switch
```

```
yarn add validate-switch
```


## Usage

```js
const validateSwitch = require('validate-switch');
```

## API

### 1. superstruct

from https://github.com/ianstormtaylor/superstruct

> 一种简单且可组合的方式来验证Javascript中的数据。

### 2. setValidate(input)

#### input

Type: `boolean`

### 3. getValidate : return {state}

#### state

Type: `boolean`

### 4. toggleValidate : return {state}

#### state

Type: `boolean`

---

## License

MIT © [chinanf-boy](http://llever.com)
