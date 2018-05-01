
# Validate-switch[![Build Status](https://travis-ci.org/chinanf-boy/validate-switch.svg?branch=master)](https://travis-ci.org/chinanf-boy/validate-switch) [![codecov](https://codecov.io/gh/chinanf-boy/validate-switch/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/validate-switch?branch=master)

> Global verification switch

[Chinese](./readme.md)Ɯ[English](./readme.en.md)

As a command line - the most important and only validation from the user`Uncertain input`

Once we determine that the value given by the user is`correct`

Well, located in a large cli, underneath`Function function`You can be sure that the parameters given to them are correct

Let's filter out the function-validation section, so sooner sooner?

Why ????

Because we can already control 吖

* * *

## Ideas

`Function function` is divided into two operations

1.  As a base for cli`No need to verify data`

2.  Self function - verification project`Need to verify the data`

Say it, that is related`verify the data`- Operation is filtered out, so one`switch`, born

Simple adoption`Validate-switch`

```js
if(getValidate().state){ // default: true
  // includes📦
  // validate data etc ...
}
```

> `Validate-switch`Is nothing to do, just global val return
>
> The most important thing is that you, who control the change of data, regardless of the success or failure of the process, should be controllable.
>
> I think this is the idea that this project wants to transmit

* * *

## Install

    npm install validate-switch

    yarn add validate-switch

## Usage

```js
const validateSwitch = require('validate-switch');
```

## Api

### 1. superstruct

From[Https://github.com/ianstormtaylor/superstruct](https://github.com/ianstormtaylor/superstruct)

> A simple and combinable way to validate data in javascript.

### 2. setvalidate(input)

#### Input

Type:`Boolean`

### 3. getvalidate : return {state}

#### State

Type:`Boolean`

### 4. togglevalidate : return {state}

#### State

Type:`Boolean`

* * *

## License

Mit ©[Chinanf-boy](http://llever.com)
