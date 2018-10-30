const jose = require('node-jose')
process.stdin.setEncoding('utf8');

let data
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    data += chunk
  }
});

process.stdin.on('end', () => {
  jose.JWK.asKey(data, 'pem').
    then(function(result) {
      console.log(JSON.stringify(result.toJSON(true), null, 2))
    });
});