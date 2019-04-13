module.exports = (req, res) => {
    res.writeHead(302, {
      'Location': 'https://youtu.be/IRvGZffXhfk?t=22'
    })
    res.end()
  }