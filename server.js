const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
const PORT = 3000


app.use(express.static("public"))
app.use(express.json())

// API routes

// Handles getNotes
// app.get("/api/notes", (req,res) => {
//     // Read db.json content
//     fs.readFile(path.join(__dirname, "db", "db.json"), "utf-8", function(err, data) {
//         if (err) {
//             res.status(500).json(err)
//             return
//         }
//         const json = JSON.parse(data)
//         // respond with the parsed array
//         res.json(json)
//     })
// })
// Handles saveNote
// app.post("/api/notes", (req, res) => {
//     const {title, text} = req.body
//     if( !title || !text) {
//         res.status(400).json({error: "Missing title or text."})
//         return
//     }

//     const newNote = {
//         ...req.body,
//         id: Math.random()
//     }

//     //Read contents of db.json
//     fs.readFile(path.join(__dirname, "db", "db.json"), "utf-8", function(err, data) {
//         if (err) {
//             res.status(500).json(err)
//             return
//         }
//         //parse string into JSON
//         const notesData = JSON.parse(data)
//         // push new note into JSON
//         notesData.push(newNote)
//         // stringify note array and save file
//         fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(notesData), function(err){
//             if (err) {
//                 res.status(500).json(err)
//                 return
//             }
//             res.status(200).json(newNote)
//         })
//     })
// })
// Handles deleteNote
// app.delete("/api/notes/:id", (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     if (!id) {
//         return res.status(400).json({ error: "We need an id"})
//     }
//     // read json file
//     fs.readFile(path.join(__dirname, "db", "db.json"), "utf-8", function(err, data) {
//         // parse contents
//         const notesData = JSON.parse(data)
//         // modify contents
//         const updatedNotesData = notesData.filter(note => id != note.id)
//         // stringify contents and re-save
//         fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(updatedNotesData), function(err) {
//             if (err) {
//                 return res.status(500).json(err)
//             }
//             res.json(updatedNotesData)
//         })
//     })
// })


// view (html) routes
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "notes.html"))
// })

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})