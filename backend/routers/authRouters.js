const express = require('express');
const router = express.router();


//POST REGISTER
router.post('/register',
[],
createUser)


//POST LOGIN
router.post('/login',
[],
loginUser)


//RENEW TOKEL
router.get('/renew',validarJWT,renewToken)