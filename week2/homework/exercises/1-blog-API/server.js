const express = require('express')
const fs = require("fs");
// const { title } = require('process');
const app = express()
app.use(express.json());
 

// YOUR CODE GOES IN HERE

function error(res){
  res.status(404)
  res.send('This post does not exist!')
}

app.post('/blogs', (req, res) => {
   title = req.body.title
   content = req.body.content
  res.setHeader("Content-Type", "application/json")
  fs.writeFileSync(title, content);
  res.send('ok')
})

app.put('/post/:title', (req, res) => {
    title = req.body.title
    content= req.body.content
if ( fs.existsSync(title)){
      res.setHeader("Content-Type", "application/json")
      fs.writeFileSync(title, content);
      res.end('ok')
    } else {
      error(res)
    }
})

app.delete('/blogs/:title', (req, res) =>{
    title = req.params.title
  if ( fs.existsSync(title)){
    fs.unlinkSync(title)
    res.send('ok')
  } else {
    error(res)
  }
})

app.get('/blogs/:title', (req, res) =>{
   title = req.params.title
 if ( fs.existsSync(title)){
   res.setHeader("Content-Type", "application/json")
   res.send(fs.readFileSync(title))
 } else {
  error(res)
 }
})
 
app.listen(3000)