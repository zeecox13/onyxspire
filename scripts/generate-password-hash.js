const bcrypt = require('bcryptjs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter password to hash: ', async (password) => {
  const hash = await bcrypt.hash(password, 10)
  console.log('\nAdd this to your .env.local file:')
  console.log(`ADMIN_PASSWORD_HASH=${hash}`)
  console.log('\nAlso add a JWT secret (generate a random string):')
  console.log('JWT_SECRET=your-random-secret-key-here')
  rl.close()
})



