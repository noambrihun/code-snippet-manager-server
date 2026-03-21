const Snippet = require("../models/Snippet")

const createSnippet = async (req,res) => {

  try {

    const snippet = new Snippet(req.body)

    await snippet.save()

    res.status(201).json({
      success:true,
      data:snippet
    })

  } catch(error){

    res.status(400).json({
      success:false,
      error:error.message
    })

  }

}

const getSnippets = async (req,res) => {

  try{

    const snippets = await Snippet.find()

    res.status(200).json({
      success:true,
      count:snippets.length,
      data:snippets
    })

  }catch(error){

    res.status(500).json({
      success:false,
      error:error.message
    })

  }

}

const updateSnippet = async (req, res) => {

 try {

  const snippet = await Snippet.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  )

  res.status(200).json({
   success: true,
   data: snippet
  })

 } catch (error) {

  res.status(400).json({
   success: false,
   error: error.message
  })

 }

}

const deleteSnippet = async (req, res) => {

 try {

  await Snippet.findByIdAndDelete(req.params.id)

  res.status(200).json({
   success: true,
   message: "Snippet deleted"
  })

 } catch (error) {

  res.status(400).json({
   success: false,
   error: error.message
  })

 }

}

module.exports = {
  createSnippet,
  getSnippets,
  updateSnippet,
  deleteSnippet
}