/* Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
    return (year + 99) / 100 | 0;
  }
  console.log();
