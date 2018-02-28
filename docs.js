module.exports = [{"title":"breakdown","since":"v0.1.0","category":"Function","syntax":"breakdown(countryCode, phone)","usage":{"commonjs":{"title":"CommonJs","code":"const breakdown = require('phone-fns/breakdown');"},"standard":{"title":"Standard","code":"import breakdown from 'phone-fns/breakdown';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/phone-fns/breakdown/index.js\"></script>"}},"desc":"Takes a provided phone string and breaks it down into an object of codes","examples":["breakdown('', '111-222-3333');\r// => { countryCode: '', areaCode: '111', localCode: '222', lineNumber: '3333', extension: '' }\r\rbreakdown('1787', '5554441111');\r// => { countryCode: 1787, areaCode: '555', localCode: '444', lineNumber: '1111', extension: '' }\r\rbreakdown('', '555-444-3333 x 8989');\r// => { countryCode: '', areaCode: '555', localCode: '444', lineNumber: '3333', extension: 8989 }\r\r// Breakdown is curried\rconst breaker = breakdown('');\r\rbreaker('222-333-4444'); // => { areaCode: '222', localCode: '333', lineNumber: '4444' }"],"params":[{"type":{"names":["String"]},"description":"The provided country code for the number","name":"countryCode"},{"type":{"names":["String"]},"description":"The phone number to breakdown","name":"phone"}],"returns":[{"type":{"names":["Object"]},"description":"Returns an object of the broken down phone number"}]},{"title":"find","since":"v0.1.0","category":"Function","syntax":"find(phone, type)","usage":{"commonjs":{"title":"CommonJs","code":"const find = require('phone-fns/find');"},"standard":{"title":"Standard","code":"import find from 'phone-fns/find';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/phone-fns/find/index.js\"></script>"}},"desc":"Find a piece of the phone number and return it","examples":["find('areaCode', '555-444-1111'); // => '555'\nfind('localCode', '555-444-1111'); // => '444'\nfind('lineNumber', '555-444-1111'); // => '1111'\nfind('countryCode', '1555-444-1111'); // => '1'\nfind('extension', '555-444-1111 8989'); // => '8989'\n\n// find is also curried\n\nconst finder = find('areaCode');\n\nfinder('555-444-1111'); // => '555'"],"params":[{"type":{"names":["String"]},"description":"The phone number to breakdown","name":"phone"},{"type":{"names":["String"]},"description":"The piece of the phone to look for","name":"type"}],"returns":[{"type":{"names":["String"]},"description":"Returns a string from the desired part of the phone number"}]},{"title":"replaceLayout","since":"Unknown","syntax":"replaceLayout()","usage":{"commonjs":{"title":"CommonJs","code":"const replaceLayout = require('phone-fns/replaceLayout');"},"standard":{"title":"Standard","code":"import replaceLayout from 'phone-fns/replaceLayout';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/phone-fns/replaceLayout/index.js\"></script>"}},"desc":"L = Local Code\rA = Area Code\rN = Line Number\rE = Extension\rC = Country Code\rExample:\r\rformat(phone, '(AAA)-LLL-NNNN');","params":[]},{"title":"isValid","since":"v0.1.0","category":"Function","syntax":"isValid(phone, country)","usage":{"commonjs":{"title":"CommonJs","code":"const isValid = require('phone-fns/isValid');"},"standard":{"title":"Standard","code":"import isValid from 'phone-fns/isValid';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/phone-fns/isValid/index.js\"></script>"}},"desc":"Validates the base number, does not take the country code or extension into consideration for this validation","examples":["isValid('555-444-3333'); // => true"],"params":[{"type":{"names":["String"]},"description":"The phone number to breakdown","name":"phone"},{"type":{"names":["String"]},"description":"The country name to validate with","name":"country"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns a boolean if the number provided is valid or not\rphone && (/^\\+?([0-9]{2})\\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/).test(uglify(phone));"}]},{"title":"match","since":"v1.0.0","category":"Function","syntax":"match(x, y)","usage":{"commonjs":{"title":"CommonJs","code":"const match = require('phone-fns/match');"},"standard":{"title":"Standard","code":"import match from 'phone-fns/match';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/phone-fns/match/index.js\"></script>"}},"desc":"Checks if the two provided numbers are matching or not","examples":["match('5554443333', '5554443333'); // => true\nmatch('5554443333', '555-444-3333'); // => true\nmatch('555-444-3333', '555-444-3333'); // => true\nmatch('555.444.3333', '555-444-3333'); // => true\n\n// Or use it as a curried function\n\nconst matcher = match('5554443333');\n\nmatcher('555-444-3333'); // => true\nmatcher('555.444.3333'); // => true\nmatcher('555.444.2222'); // => false"],"params":[{"type":{"names":["String"]},"description":"The number to validate against","name":"x"},{"type":{"names":["String"]},"description":"The number to validate","name":"y"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns a boolean if the numbers provided to match"}]},{"title":"uglify","since":"v0.1.0","category":"Function","syntax":"uglify(phone)","usage":{"commonjs":{"title":"CommonJs","code":"const uglify = require('phone-fns/uglify');"},"standard":{"title":"Standard","code":"import uglify from 'phone-fns/uglify';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/phone-fns/uglify/index.js\"></script>"}},"desc":"Strips all of the special characters from the given string","examples":["const results = uglify('555-444-3333'); // => '5554443333'"],"params":[{"type":{"names":["String"]},"description":"The phone number to trim and strip down","name":"phone"}],"returns":[{"type":{"names":["String"]},"description":"Returns the newly created phone number string"}]}]