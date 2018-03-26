# ez-array-update

> Immutably an element in an array

This library allows you to update an element in an array with immutability in mind

## Install

```
$ npm install ez-array-update
```

```
$yarn add ez-array-update
```

## Usage

You can update arbitrary data like numbers/strings

```javascript
import updateArray from 'ez-array-update'

const sampleArray = [1, 2, 3, 4, 5]

// Change element `1` to 100
const filter = element => element === 1

const dataToUpdateTo = 100

const newNumberArray = updateArray(sampleArray, filter, dataToUpdateTo) // [100, 2, 3, 4, 5]
```

It also supports objects (Note: It will merge objects using [spreads](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) so it will only do a shallow merge)

```javascript
import updateArray from 'ez-array-update'

const arrOfObjects = [
  { name: 'James', age: 21 },
  { name: 'Rob', age: 25 },
  { name: 'Tegan', age: 22 },
  { name: 'Alex', age: 21 },
  { name: 'Kacee', age: 25 }
]

const filter = element => element.name === 'James'

const data = { age: 240 } // You can pass in the keys you only wish to update

const newFriends = updateArray(arrOfObjects, filter, data)
```
