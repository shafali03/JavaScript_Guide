function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');
}

module.exports = isAnagram


/*
package-json File can add watch 

"test": "jest",
"testwatch": "jest --watchAll"


to run command the watch command 
npm run testwatch
*/