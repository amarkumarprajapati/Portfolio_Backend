const express = require('express')
const router = express.Router()
const chatcontroller = require('../controller/ChatBot')


router.post('/chatbot', chatcontroller)