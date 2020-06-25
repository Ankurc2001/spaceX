const express = require('express'),
graphqlHTTP = require('express-graphql'),
cors = require('cors')
graphql = require('graphql')
const Path = require('path');
app = express();

const schema = require('./schema')

//Allowing Cors

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.use(express.static('public'));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})

const PORT = process.env.PORT || 5000;

 app.listen(PORT,()=> console.log(`Server is up at ${PORT}`))