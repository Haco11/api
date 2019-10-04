const express = require('express')

const logger = require('morgan')

const errorhandler = require('errorhandler')

const bodyParser = require('body-parser')

)

module.exports = {
  let store = {},
  store.posts = [],

  let app = express(),
  app.use(bodyParser.json()),
  app.use(logger('dev')),
  app.use(errorhandler(),
  //Här hämtar den informationen

  getComments(req,res) {
    app.get('/post', (req, res) => {
      res.status(200).send(store.posts)
    })
  },
  //här så lägger man till post

  addComment(req,res){
    app.post('/post', (req, res) => {
      let newPost = req.body
      let id = store.posts.length
      store.posts.push(newPost)
      res.status(201).send({id: id})
    })
  },
  //upptaterar

  updateComment(req,res) {
    app.put('/post/:id', (req, res) => {
      store.posts[req.params.id] = req.body
      res.status(200).send(store.posts[req.params.id])
    })
  },
  // tarbort posten

  removeCommnt(req,res){
    app.delete('/post/:id', (req, res) => {
      store.posts.splice(req.params.id, 1)
      res.status(204).send()
    })
  }
}
