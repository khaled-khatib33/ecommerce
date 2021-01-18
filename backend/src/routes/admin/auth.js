const express = require("express");
const { signup, signin} = require("../../controller/admin/auth");
const router = express.Router();
const {validatSignupeRequest, isRequestValidated ,validatSignineRequest} = require('../validators/auth')

router.post("/admin/signup", validatSignupeRequest,isRequestValidated,signup);

router.post("/admin/signin", validatSignineRequest,isRequestValidated,signin);

module.exports = router;

