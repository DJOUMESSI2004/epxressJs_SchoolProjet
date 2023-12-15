const express = require('express');

const {WelcomeMessage, WelcomeMessageFunction, testEjsView, newQcms, createForm} = require('../controller/welcome')

const router = express.Router();


router.get('/index', testEjsView);
router.get('/qcm', WelcomeMessage);
router.get('/index', WelcomeMessageFunction);
router.get('/newQcms', newQcms);
router.post('/newQcms', createForm);

module.exports = router;