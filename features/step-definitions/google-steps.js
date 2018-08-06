'use strict';

let { When, Then } = require('cucumber');
let { By, until, Key } = require('selenium-webdriver');
let { expect } = require('chai');


// When(/^jag söker på Google efter (.*)/, function (searchQuery, next) {
//   this.driver.get('http://www.google.co.uk/webhp?complete=0');
//
//   this.driver.findElement(By.name('q'))
//     .sendKeys(searchQuery);
//
//   this.driver.findElement(By.name('q'))
//     .sendKeys(Key.ENTER)
//     .then(function() {
//       next();
//     });
// });

Then('borde jag se sökresultat', function (next) {
  this.driver.wait(until.elementLocated(By.css('div.g')));

  this.driver.findElements(By.css('div.g'))
    .then(function(elements) {
      expect(elements.length).to.not.equal(0);
      next();
    });
});
