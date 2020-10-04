const express=require('express')
const router=express.Router()
const urlsCltr=require('../app/controllers/urlsCltr')



router.get('/post/link',urlsCltr.list)
router.post('/post/link',urlsCltr.create)



module.exports=router