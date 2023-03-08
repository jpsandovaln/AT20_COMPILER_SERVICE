var express = require('express');
var multiparty = require('multiparty');
const dotenv = require('dotenv');
var app = express();
dotenv.config();

app.post('/hello',(req,res) => {
    res.send('Hello world!');
});
app.post('/postUserInfo',(req,res) => {

    var form = new multiparty.Form();
    form.parse(req, (err,fields,files) => {
        if(err) {
            return res.send({error : err.message});
        }
        var response= fields;
        res.send('Hello '+response.name+'! your birthday is '+response.birthday+' congratulations! ,your income is '+response.wage);

    }); 

});

app.post('/postBody', (req,res,next) => {
    var form = new multiparty.Form();
    form.parse(req, (err,fields,files) => {
        if(err) {
            return res.send({error : err.message});
        }
        res.send(fields.name);
    });
 
});

app.post('/compilePython', (req,res,next) => {
    var form = new multiparty.Form({uploadDir: process.env.UploadPath});
    form.parse(req, (err,fields,files) => {
        if(err) {
            return res.send({error : err.message});
        }
        var fieldName=files["python"][0]["fieldName"];
        console.log(fieldName);
        if(fieldName=="python") {
            console.log("Is python");

        }       
        res.send(files);
    });
 
});

app.listen(process.env.PORT, () => { 
    console.info("Compiler APi running ...");
});

module.exports=app;