[![Build Status](https://travis-ci.org/dhershman1/phone-fns.svg?branch=master)](https://travis-ci.org/dhershman1/phone-fns)

# phone-fns

A small modern, and functional phone number library which gathers inspiration from the fun [date-fns](https://github.com/date-fns/date-fns) library

## How-To

Standard module system

```js
import { format } from 'phone-fns';

format(phone, layout);
```

Common JS

```js
const { format } = require('phone-fns');

format(phone, layout);
```

Through the browser

```js
<script src="path/to/location/dist/phone-fns.umd.js"></script>
phoneFns.format(phone, layout);
```

## Methods

### uglify(phone)

`uglifies` the phone number down to just the number string

#### Arguments

- `phone` - `String`: the desired phone number to run against

#### Usage

```js
import {uglify} from 'phone-fns';

console.log(uglify('555-444-1111'));
// Output: 5554441111
```

### format(phone, format, isLD)

Customized formatting function allowing you to create your own custom formats

#### Arguments

- `phone` - `String`: The desired phone number to run against
- `format` - `String`: The desired format to set the number into, see above
- `isLD` - `Boolean`: Tell the function to run the long distance rule

#### Formatting

- `A` - Area Code Number
- `L` - Local Code Number (Usually the first three digits)
- `N` - Line Number (Usually the last four digits)
- `E` - Extension Number (Usually an additional set of digits at the end)
- `C` - Country Code Number (Usually the set of digits that go ahead of a number)

#### Usage

```js
import { format } from 'phone-fns';

// Normal
format('4443332222', '(AAA) LLL-NNNN');
// Output: (444) 333-2222

// Long Distance
format('1124443332222', 'CCC + (AAA)-LLL.NNNN', true); // <-- Notice we have to make sure to tell the module we it is long distance
// Output: 112 + (444)-333.2222

// Extensions
format('44433322228989', '(AAA).LLL.NNNN x EEEE');
// Output: (444).333.2222 x 8989
```

### find(phone, code)

Find a piece of the phone number and return it

#### Arguments

- `phone` - `String`: the desired phone number to run against
- `code` - `String`: the piece of the phone number to return can be `areaCode`, `localCode`, `lineNumber`, `countryCode`, or `extension`

#### Usage

```js
import { find } from 'phone-fns';

console.log(find('555-444-3333', 'areaCode'));
// Output: 555
```

### breakdown(phone, isLD)

Takes the provided phone string and breaks it down into an object like so:

```js
{
  countryCode: '',
  areaCode: '',
  localCode: '',
  lineNumber: '',
  extension: ''
}
```

#### Arguments

- `phone` - `String`: the desired phone number to run against
- `isLD` - `Boolean`: tell the function if the phone is using a long distance style or not

#### Usage

```js
import { breakdown } from 'phone-fns';

console.log(breakdown('555-444-3333'));
// Output:
/*
{
  countryCode: '',
  areaCode: '555',
  localCode: '444',
  lineNumber: '3333',
  extension: ''
}
*/

console.log(breakdown('112555-444-3333', true));
// Output:
/*
{
  countryCode: '112',
  areaCode: '555',
  localCode: '444',
  lineNumber: '3333',
  extension: ''
}
*/

console.log(breakdown('555-444-33338989'));
// Output:
/*
{
  countryCode: '',
  areaCode: '555',
  localCode: '444',
  lineNumber: '3333',
  extension: '8989'
}
*/
```

### isValid(phone)

Validates if the phone number is valid or not

#### Arguments

- `phone` - `String`: the desired phone number to run against

#### Usage

```js
import { isValid } from 'phone-fns';

console.log(isValid('555-444-3333'));
// Output: true
console.log(isValid('8896'));
// Output: false
```

### identical(x, y)

Checks if the two provided numbers are identical or not

#### Arguments

- `x` - `String`: the desired phone number to run against `y`
- `y` - `String`: the desired phone number to run against `x`

#### Usage

```js
import { identical } from 'phone-fns';

console.log(identical('555-444-3333', '555-444-3333'));
// Output: true
console.log(identical('555-444-3333', '555-333-4444'));
// Output: false
```
