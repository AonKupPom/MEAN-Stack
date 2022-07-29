let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/MEAN-Stack-Frontend'));

app.get('/*', (req,res)=> {
  res.sendFile(__dirname+'/dist/MEAN-Stack-Frontend/index.html');
});

app.listen(process.env.PORT || 8080);
