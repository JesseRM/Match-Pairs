const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/', require('./routes/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening for requests');
});
