#!/usr/bin/node

const circle = require('./03-export-function.js'),
      chalk = require('chalk'),
      log   = console.log,
      info  = chalk.greenBright;

var c = circle(20);

log(info('-----------------------------------'));
log(info(`area:         \t${c.area()}`));
log(info(`circumference:\t${c.circumference()}`));
log(info('-----------------------------------'));

log(module);
