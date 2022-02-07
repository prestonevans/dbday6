const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res)=> {
    res.send('Hello')
})

app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`)
})