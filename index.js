const express = require('express')
const _ = require('lodash')
const fs = require('fs')
const PORT = process.env.PORT || 5000
const app = express()

// Cors
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
}
app.use(allowCrossDomain)

// Any
app.get('/any', (req, res) => {
  let category = _.random(1)
  // 0 is branding, 1 is ui
  if (category === 0) {
    fs.readFile('./briefs/branding.json', (err, data) => {
      // If there is an error
      if (err) res.json({ error: true })
  
      // Get a random branding brief
      let branding = JSON.parse(data)
      let index = _.random(branding.length - 1)
      res.json({
        brief: branding[index]
      })
    })
  }
  else if (category === 1) {
    fs.readFile('./briefs/ui.json', (err, data) => {
      // If there is an error
      if (err) res.json({ error: true })
  
      // Get a random branding brief
      let ui = JSON.parse(data)
      let index = _.random(ui.length - 1)
      res.json({
        brief: ui[index]
      })
    })
  }
})

// Branding
app.get('/branding', (req, res) => {
  fs.readFile('./briefs/branding.json', (err, data) => {
    // If there is an error
    if (err) res.json({ error: true })

    // Get a random branding brief
    let branding = JSON.parse(data)
    let index = _.random(branding.length - 1)
    res.json({
      brief: branding[index]
    })
  })
})

// UI
app.get('/ui', (req, res) => {
  fs.readFile('./briefs/ui.json', (err, data) => {
    // If there is an error
    if (err) res.json({ error: true })

    // Get a random branding brief
    let ui = JSON.parse(data)
    let index = _.random(ui.length - 1)
    res.json({
      brief: ui[index]
    })
  })
})

// Listen on the port
app.listen(PORT, () => console.log('App running on ' + PORT))