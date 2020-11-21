const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sandy123:sandy123@cluster0.5klbd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err) {
        console.log('Some problem with the connection ' + err);
    } else {
        console.log('The Mongoose connection is ready');
    }
});