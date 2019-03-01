const hostCheck = (req) => {
  let host = req.get('Host')
  if (host === 'localhost:5000') {
    return true
  }
  else if (host === 'designrr.netlify.com') {
    return true
  }
  else {
    return false
  }
}

module.exports = hostCheck;