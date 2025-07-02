const express = require('express')
const menuRoutes = express.Router()
const MenuItem = require('../module/MenuItem')

menuRoutes.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data)
    const response = await newMenu.save()
    console.log('data saves menu items')
    res.status(200).json(response)


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'internal server Error menu' })
  }
})



menuRoutes.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find()
    console.log('fetch menu items')
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: "internal Error" })
  }
})

menuRoutes.get("/:tasteType", async (req, res) => {

  try {
    let tasteType = req.params.tasteType
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const data = await MenuItem.find({ taste: tasteType })
      res.status(200).json(data)
      console.log('fetch menu type')
    } else {
      res.status(404).json({ massage: " invalid work type" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: "interval server Error" })
  }


})

menuRoutes.get("/:id", async (req, res) => {

  try {
    let select_id = req.params.id

    const data = await MenuItem.find({ _id: select_id })
    res.status(200).json(data)
    console.log('fetch menu type')

  } catch (error) {
    console.log(error)
    res.status(500).json({ err: "interval server Error" })
  }


})


menuRoutes.post('/', async (req, res) => {
  try {
    let data = req.body
    let newItem = new MenuItem(data)
    let response = await newItem.save()
    console.log('post- data menu')
    res.status(200).json(response)
 
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "internal Error" })
  }
})
menuRoutes.put('/:id', async (req, res) => {
  try {
    let select_id = req.params.id
    let updateData = req.body
    let response = await MenuItem.findByIdAndUpdate(select_id, updateData, {
      new: true,
      runValidators: true
    })
    console.log('updates')
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server Error" })
  }

})

menuRoutes.delete('/:id',async(req,res)=>{
try{
  let select_id = req.params.id
  let response =await MenuItem.findByIdAndDelete(select_id)
   if (!response) {
      return res.status(404).json({ error: "Person not found" })
    }
  res.status(200).json({massage:"delete"})
}catch(error){
  console.log(error)
  res.status(500).json({error:'internal server error'})

}
})
module.exports = menuRoutes