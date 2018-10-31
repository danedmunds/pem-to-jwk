const jose = require('node-jose')
process.stdin.setEncoding('utf8')

let args = process.argv.splice(2)
const publicOnly = args.includes('--public')
const wrapInJwks = args.includes('--jwks-out')

let data
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    data += chunk
  }
})

process.stdin.on('end', () => {
  jose.JWK.asKey(data, 'pem')
    .then(function (result) {
      let res = result.toJSON(!publicOnly)
      if (wrapInJwks) {
        res = {
          keys: res
        }
      }
      console.log(JSON.stringify(res, null, 2))
    })
})
