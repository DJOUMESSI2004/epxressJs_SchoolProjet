const express = require('express');

// const {WelcomeMessage, WelcomeMessageFunction, testEjsView, newQcms, createForm} = require('./controller/welcome')

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const qcmsRouter = require('./router/qcmroute');


app.use(qcmsRouter);


// app.get('/index', testEjsView);
// app.get('/qcm', WelcomeMessage);
// app.get('/index', WelcomeMessageFunction);
// app.get('/newQcms', newQcms);
// app.post('/newQcms', createForm);

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
});
