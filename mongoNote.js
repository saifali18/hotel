// show dbs            // list all databases
// use mydb            // switch/create database
// db.createCollection("users") // create collection
// db.users.insertOne({name: "Sanu", age: 25}) // insert data
// db.users.find()     // show all data
// db.users.find({ age: { $gt: 25 } })(greater than)
// db.users.find({ age: { $gt: 25 } })(less than)
// Example: Find users between 20 and 30
// db.users.find({ age: { $gt: 20, $lt: 30 } })
// db.users.updateOne(
//   { name: "Aftab" },                // Filter
//   { $set: { age: 30 } }             // Update
// )


// db.users.updateMany(
//   { gender: "male" },
//   { $set: { verified: true } }
// )

// Show databases -	show dbs

// Use a database	- use myDatabase
// Show collections --	show collections
// Show current database --	db
// Find all documents ---	db.collection.find()
// Insert one document	--- db.collection.insertOne({...})
// Delete --
// db.users.deleteOne({id:2}) 

