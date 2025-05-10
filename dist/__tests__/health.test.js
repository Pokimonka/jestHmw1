"use strict";

var _health = require("../health.js");
var dataList = [[{
  name: 'Маг',
  health: 90
}, "healthy"], [{
  name: 'Kim',
  health: 30
}, "wounded"], [{
  name: 'Jak',
  health: 8
}, "critical"], [{
  name: 'Georgy',
  health: 100
}, "healthy"], [{
  name: 'Mark',
  health: 50
}, "wounded"], [{
  name: 'Jak',
  health: 15
}, "critical"]];
test.each(dataList)('character health', function (data, expected) {
  var result = (0, _health.CheckCharacterHealth)(data);
  expect(result).toBe(expected);
});