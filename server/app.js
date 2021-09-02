const express = require('express');
const app = express();

app.use(express.static('public/dist'));
app.use('/', require('./routes/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening for requests');
});
