var fs = require('fs');

function createArray () {
  var i = 0, j, cells = 50, arr = [];
  for (i; i < cells; i++) {
    arr.push([]);
    for (j = 0; j < cells; j++) {
      arr[i][j] = ' ';
    }
  }
  return arr;
}

function processLine (line) {
  return line.replace(/\-/g, '\\').replace(/\|/g, '/').split('');
}

function plusLines (line) {
  var hasPlus = false;
  for (var i = 0; i < line.length; i++) {
    if (line[i] === '+') {
      hasPlus = true;
      pluses.push(i);
    }
  }
  return !hasPlus;
}

function blankLines (line) {
  return line.trim() !== '';
}

function intoPresentableGrid (line) {
  var idx = 0;
  var newL = line.filter(function (ch) {
    var result = pluses.indexOf(idx) === -1;
    idx++;
    return result;
  });
  return newL.join('');
}

function processFile (err, data) {
  if (err) {
    console.error('Could not read file. Err: ', err);
    process.exit(1);
  } else {
    var arrData = data.split('\n');
    var size    = parseInt(arrData.shift());
    var row     = col = 0;

    blankColSkip = (size % 2 === 0 ? 1 : 2);
    arrData      = arrData.map(processLine);

    arrData.forEach(function processRow (line) {
      col = 0;

      line.forEach(function processColumn (c) {
        diagonalGrid[row + col][col + size - row] = c;
        col++;
      });

      row++;
    });

    console.log(diagonalGrid.join('\n'));

    diagonalGrid = diagonalGrid
      .filter(plusLines)
      .map(intoPresentableGrid)
      .filter(blankLines);

    console.log(diagonalGrid.join('\n'));
  }
}

var pluses       = [];
var blankColSkip = 2;
var fileArg      = process.argv[2];
var diagonalGrid = createArray();

fs.readFile(fileArg, { encoding: 'utf8' }, processFile);
