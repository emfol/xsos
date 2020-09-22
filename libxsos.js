
/**
 * Start a game by selecting a position (between 0 and 8 inclusive)
 * and a symbol (X = 1, O = 0)
 * @param {number} position Starting position (between 0 and 8 inclusive)
 * @param {number} symbol The starting symbol (X = 1, O = 0)
 * @returns {number} The internal state of the game represented as an integer
 */
function start(position, symbol) {
  return select((symbol & 1) << 18, position);
}

/**
 * Select the next position within the game
 * @param {number} state The current state of the game
 * @param {number} position The next position to be selected (between 0 and 8 inclusive)
 * @returns {number} The updated state of the game when successful or 0 on failure
 */
function select(state, position) {
  const s = state & 0x7ffff;
  const c = bits(s & 0x1ff);
  if (c < 9) {
    const p = (position | 0) % 9;
    const sel = (s >>> p) & 1;
    if (sel === 0) {
      const sym = ((s >>> 18) + (c & 1)) & 1;
      return s | (sym << (p + 9)) | (1 << p);
    }
  }
  return 0;
}

/**
 * Check if there is a winner
 * @param {number} state The current state of the game
 * @returns {number} The 9-bit representation of the winner triplet or 0 (zero) for no winner
 */
function winner(state) {
  const s = state & 0x7ffff;
  const sels = s & 0x1ff;
  const syms = (s >>> 9) & 0x1ff;
  const patterns = [0x007, 0x038, 0x049, 0x054, 0x092, 0x111, 0x124, 0x1c0];
  for (let i = patterns.length - 1; i >= 0; --i) {
    const pattern = patterns[i];
    if ((sels & pattern) === pattern) {
      const symp = syms & pattern;
      if (symp === pattern || symp === 0) {
        return (pattern & 0x1ff);
      }
    }
  }
  return 0;
}

/**
 * Check if a game has finished
 * @param {number} state The state of the game
 * @returns {boolean} True if the game has finished, false otherwise
 */
function done(state) {
  const s = state & 0x7ffff;
  return bits(s & 0x1ff) === 9 || winner(s) !== 0;
}

/**
 * Returns a 9-char string representation of the given state of the game
 * @param {number} state The state of the game
 * @returns {string} The string representation of the game
 */
function string(state) {
  let str = '';
  const s = state & 0x7ffff;
  const sels = s & 0x1ff;
  const syms = (s >>> 9) & 0x1ff;
  const wins = winner(s);
  for (let i = 0; i < 9; ++i) {
    if (((sels >>> i) & 1) === 1) {
      let sym = (((syms >>> i) & 1) === 1) ? 'x' : 'o';
      if (((wins >>> i) & 1) === 1) {
        sym = sym.toUpperCase();
      }
      str += sym;
    } else {
      str += ' ';
    }
  }
  return str;
}

/**
 * Returns a formatted string representation of the given state of the game
 * @param {number} state The state of the game
 * @returns {string} The formatted string representation of the game
 */
function format(state) {
  let f = '';
  const s = string(state);
  for (let i = 0; i < 3; ++i) {
    const n = i * 3;
    f += `${s[n + 0]}|${s[n + 1]}|${s[n + 2]}\n`;
  }
  return f;
}

/*
 * Helpers
 */

function bits(number) {
  let c = 0, n = number & 0xffff;
  while (n !== 0) {
    if ((n & 1) === 1) {
      c++;
    }
    n = n >>> 1;
  }
  return c;
}

/*
 * Exports
 */

module.exports.start = start;
module.exports.select = select;
module.exports.winner = winner;
module.exports.done = done;
module.exports.string = string;
module.exports.format = format;
