const {qcms, addQcm} = require('../model/inmemory');
const Qcms = require('../model/qcms');
const qcMs = require('../model/qcms');

const WelcomeMessage = (req, res) =>{

    res.render('qcm', {qcms, qcMs});
}

const createForm = (req, res) =>{
    console.log(req.body);

    addQcm({
        title: req.body.title,
    });
    res.redirect('/qcm');

}


const WelcomeMessageFunction = function (req, res){
    res.render('index');
}

const testEjsView = (req, res) =>{
    res.render('welcome');
}
const newQcms = (req, res) =>{
    res.render('newQcms');
}

module.exports = {WelcomeMessage, WelcomeMessageFunction, testEjsView, newQcms, createForm};