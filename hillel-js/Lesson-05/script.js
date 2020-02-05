'use strict';
var userLogin = prompt('Enter your login');
var reg = /^[A-Z][a-zA-Z0-9-_\*]*\d{2}$/;
console.log(reg.test(userLogin));

var userPassword = prompt('Enter your password');
var reg2 = /^[a-zа-я]{1,5}$/;
console.log(reg2.test(userPassword));
