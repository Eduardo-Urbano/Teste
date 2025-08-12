import express from 'express';

var app = express();
app.get('/',(req, res)=>{
    res.send(' Hello World');
});

app.listen(3000, ()=>{
    console.log('Server is running')
});

export default app;