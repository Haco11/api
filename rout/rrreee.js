const express = require('express')

const logger = require('morgan')

const errorhandler = require('errorhandler')

const bodyParser = require('body-parser')

let store = {}
store.comments = []

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

module.exports = {
  getComments(req,res) {
    app.get('/comment', (req, res) => {
      res.status(200).send(store.comments)
    })
  },

  addComment(req,res){
    app.post('/comment', (req, res) => {
      let newComment = req.body
      let id = store.comments.length
      store.comments.push(newComment)
      res.status(201).send({id: id})
    })
  },
  updateComment(req,res) {
    app.put('/comment/:id', (req, res) => {
      store.comments[req.params.id] = req.body
      res.status(200).send(store.comments[req.params.id])
    })
  },

  removeCommnt(req,res){
    app.delete('/comment/:id', (req, res) => {
      store.comments.splice(req.params.id, 1)
      res.status(204).send()
    })
  }
}
