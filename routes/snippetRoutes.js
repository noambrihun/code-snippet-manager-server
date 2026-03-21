const express = require("express")
const router = express.Router()
const { createSnippet , getSnippets,updateSnippet,deleteSnippet } = require("../controllers/snippetController")


router.get("/snippets", getSnippets)

router.post("/snippets",createSnippet)

router.put("/snippets/:id",updateSnippet)

router.delete("/snippets/:id",deleteSnippet )

module.exports = router