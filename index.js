const jose = require('node-jose')
process.stdin.setEncoding('utf8');

let args = process.argv.splice(2)
const publicOnly = args.includes('--public')

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
      console.log(JSON.stringify(result.toJSON(!publicOnly), null, 2))
    });
});