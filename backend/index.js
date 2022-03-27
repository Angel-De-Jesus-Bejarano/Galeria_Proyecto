const app = require("./app/app");

app.listen(app.get('port'),(err) => {

    if(err){
        console.error(`there was an error: ${err}`)
    }else{
        console.log(`server is running on port ${app.get('port')}`);

    }
})
