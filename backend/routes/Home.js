const router=require("express").Router()
const Property=require("../models/Property.js")

router.route("/").get((req,res)=>{
    Property.find()
        .then(data=>{res.json(data)})
        .catch(err=>{res.status(400).json("Error: "+err)})
})

router.route("/add").post((req,res)=>{
    const propertyData=new Property({
        Name:req.body.fullName,
        Description:req.body.desc,
        Size:req.body.size
    })
    propertyData.save()
        .then(()=>{res.json("Property Added")})
        .catch(err=>{res.status(400).json("Error: "+err)})
})

router.route("/:id").delete((req,res)=>{
    Property.findByIdAndDelete(req.params.id)
        .then(()=>{res.json("Property Deleted")})
        .catch(err=>{res.status(400).json("Error: "+err)})
})

module.exports=router