const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3000;
const Snippet = require("./models/Snippet")
const snippetsRoutes = require("./routes/snippetRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", snippetsRoutes)

mongoose.connect("mongodb+srv://Iamnoam_23:kingbr123@noam.cyi4okn.mongodb.net/snippets")
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

app.get("/", (req,res)=>{
  res.send("Code Snippet Manager API is running")
})



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});