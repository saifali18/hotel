const express = require('express')
const router = express.Router()

const Person = require('../module/person')


router.post('/', async (req, res) => {
  try {
    const data = req.body //Assuming the request body contains the person data

    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data)
    // save the new person to the database
    const response = await newPerson.save()
    console.log('data saved')
    res.status(200).json(response)

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal server Error' })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await Person.find()
    console.log('data fetch')
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json(err, "internal Error")
  }
})


router.put('/:id', async (req, res) => {
  try {
    let person_id = req.params.id;//Extract the id from the Url parameter
    let updatePersonData = req.body;//Update data for the person
    let response = await Person.findByIdAndUpdate(person_id, updatePersonData, {
      new: true,//return the updated document 
      runValidators: true // Run Mongoose validation
    })
    if (!response) {
      return res.status(404).json({ error: "Person not found" })
    }
    console.log('data update')
    res.status(200).json(response)


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Interval Server error' })
  }
})

router.get('/:workType', async (req, res) => {
  try {
    let workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      let response = await Person.find({ work: workType })
      console.log("fetch workType")
      res.status(200).json(response)
    } else {
      res.status(404).json({ error: 'invalid wwork Type' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Interval Server error' })
  }
})
router.delete('/:id',async (req, res) => {
  try {
    let id = req.params.id
    let response = await Person.findByIdAndDelete(id)

    if (!response) {
      return res.status(404).json({ error: "Person not found" })
    }
    console.log("delete item")
    res.status(200).json({ massage: "person Delete SuccessFully" })

  } catch (error) {
    console.log(error)
    res.status(500).json({error:"internal Server error"})
  }
})


module.exports = router