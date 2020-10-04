const mongoose=require('mongoose')
const validator=require('validator')
const short = require('short-uuid')

const Schema=mongoose.Schema
const urlSchema=new Schema({
    originalUrl:{
        type:String,
        validate:{
            validator:function(value){
                validator.isEmail(value)
                // return true
                },
    message:function(){
        return ('invalid email')
         }
       }
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    },
    ShortUrl:{
        type:String,
    },
    urlHash:{
        type:String
    }
})

urlSchema.pre('save',function(next){
  this.ShortUrl=short.generate(this.originalUrl)
  next()
})

  


//create a model//
const Url=mongoose.model('Url',urlSchema)

module.exports=Url


