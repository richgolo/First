const express = require("express")

const {
    createUser,
    retrieveUser,
    getUserById,
    updateUser,
    deleteUser,
} = require("../Controllers/studentControllers")

const router = express.Router()

router.post("/student", createUser)
router.get("/student", retrieveUser)
router.get("/student/:id", getUserById)
router.put("/student/:id", updateUser)
router.delete("/student/:id", deleteUser)

module.exports = router
