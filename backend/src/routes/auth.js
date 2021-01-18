const express = require("express");
const { signup, signin} = require("../controller/auth");
const {validatSignupeRequest, isRequestValidated ,validatSignineRequest} = require('./validators/auth')

const router = express.Router();

router.post("/signup", validatSignupeRequest,isRequestValidated,signup);
router.post("/signin", validatSignineRequest,isRequestValidated,signin);

// router.post("/profile", requireSignin,(req, res) => {
//   res.status(200).json({ user: "profile" });
// });


module.exports = router;
