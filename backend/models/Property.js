const mongoose=require("mongoose")

const propSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Description:{type:String,required:true},
    Size:{type:String,required:true}
})

const Property=mongoose.model("Property",propSchema)

module.exports=Property