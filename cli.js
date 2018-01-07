#! /usr/bin/env node

var program = require('commander');
var screenCapture = require('./screencapture');

program
    .version('1.4.0')
    .option('-a, --address [value]', 'html address')
    .option('-o, --output [value]', 'output address')
    .option('-f, --format [value]', 'output file format', 'pdf')
    .option('-s, --size [375*677]', 'screen width*height')
    .option('-p, --proxy', 'use socks5 proxy')
    .parse(process.argv);

screenCapture(program.address, program.output, program.format,program.size, program.proxy);