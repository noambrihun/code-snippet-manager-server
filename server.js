const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000;


const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://Iamnoam_23:kingbr123@noam.cyi4okn.mongodb.net/snippets")
.then(() => {
    console.log("MongoDB connected")
})
.catch((err) => {
    console.log(err)
})

const snippetsSchema = new mongoose.Schema({
title:String,
language:String,
code:[String],
description:String,
createdAt:Date,
})

const Snippet = mongoose.model("Recipe", snippetsSchema)

app.get('/', (req, res) => {
  res.send('Code Snippet Manager API is running');
});


app.post('/snippets', async (req, res) => {
  try {
    const snippet = new Snippet(req.body);
    await snippet.save();
    res.status(201).json({ success: true, data: snippet });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
