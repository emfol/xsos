const tap = require('tap');
const libxsos = require('./libxsos.js');

let s = libxsos.start(4, 1, 'starting a game');
tap.equal(s, 0x42010);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), '    x    ');
tap.equal(libxsos.format(s), ' | | \n |x| \n | | \n');
tap.equal(libxsos.select(s, 4), 0);

s = libxsos.select(s, 2);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), '  o x    ');
tap.equal(libxsos.format(s), ' | |o\n |x| \n | | \n');
tap.equal(libxsos.select(s, 2), 0);

s = libxsos.select(s, 0);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'x o x    ');
tap.equal(libxsos.format(s), 'x| |o\n |x| \n | | \n');
tap.equal(libxsos.select(s, 0), 0);

s = libxsos.select(s, 8);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'x o x   o');
tap.equal(libxsos.format(s), 'x| |o\n |x| \n | |o\n');
tap.equal(libxsos.select(s, 8), 0);

s = libxsos.select(s, 5);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'x o xx  o');
tap.equal(libxsos.format(s), 'x| |o\n |x|x\n | |o\n');
tap.equal(libxsos.select(s, 5), 0);

s = libxsos.select(s, 3);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'x ooxx  o');
tap.equal(libxsos.format(s), 'x| |o\no|x|x\n | |o\n');
tap.equal(libxsos.select(s, 3), 0);

s = libxsos.select(s, 1);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xxooxx  o');
tap.equal(libxsos.format(s), 'x|x|o\no|x|x\n | |o\n');
tap.equal(libxsos.select(s, 1), 0);

s = libxsos.select(s, 7);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xxooxx oo');
tap.equal(libxsos.format(s), 'x|x|o\no|x|x\n |o|o\n');
tap.equal(libxsos.select(s, 7), 0);

s = libxsos.select(s, 6);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), true);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xxooxxxoo');
tap.equal(libxsos.format(s), 'x|x|o\no|x|x\nx|o|o\n');
tap.equal(libxsos.select(s, 6), 0);

/*
 * New Game
 */

s = libxsos.start(1, 1, 'starting a new game');
tap.equal(s, 0x40402);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), ' x       ');
tap.equal(libxsos.format(s), ' |x| \n | | \n | | \n');
tap.equal(libxsos.select(s, 1), 0);

s = libxsos.select(s, 6);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), ' x    o  ');
tap.equal(libxsos.format(s), ' |x| \n | | \no| | \n');
tap.equal(libxsos.select(s, 6), 0);

s = libxsos.select(s, 0);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xx    o  ');
tap.equal(libxsos.format(s), 'x|x| \n | | \no| | \n');
tap.equal(libxsos.select(s, 0), 0);

s = libxsos.select(s, 2);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xxo   o  ');
tap.equal(libxsos.format(s), 'x|x|o\n | | \no| | \n');
tap.equal(libxsos.select(s, 2), 0);

s = libxsos.select(s, 4);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xxo x o  ');
tap.equal(libxsos.format(s), 'x|x|o\n |x| \no| | \n');
tap.equal(libxsos.select(s, 4), 0);

s = libxsos.select(s, 7);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), false);
tap.equal(libxsos.winner(s), 0);
tap.equal(libxsos.string(s), 'xxo x oo ');
tap.equal(libxsos.format(s), 'x|x|o\n |x| \no|o| \n');
tap.equal(libxsos.select(s, 7), 0);

s = libxsos.select(s, 8);
tap.inequal(s, 0);
tap.equal(libxsos.done(s), true);
tap.equal(libxsos.winner(s), 0x111);
tap.equal(libxsos.string(s), 'Xxo X ooX');
tap.equal(libxsos.format(s), 'X|x|o\n |X| \no|o|X\n');
tap.equal(libxsos.select(s, 8), 0);
