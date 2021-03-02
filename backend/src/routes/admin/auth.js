const express = require("express");
const { signup, signin ,signout} = require("../../controller/admin/auth");
const router = express.Router();
const {validatSignupeRequest, isRequestValidated ,validatSignineRequest} = require('../validators/auth')
const {requireSignin} = require ('../../common-middleware');

router.post("/admin/signup", validatSignupeRequest,isRequestValidated,signup);
router.post("/admin/signin", validatSignineRequest,isRequestValidated,signin);
router.post('/admin/signout',requireSignin ,signout)
module.exports = router;

