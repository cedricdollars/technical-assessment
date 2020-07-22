var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema, } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');

//define the schema 

var schema = buildSchema (`
    type Query {
        results(startDate: GraphQLDateTime!, endDate: GraphQLDateTime!) : [Results]
    },
    type Results {
        time : GraphQLDateTime
        count: Int
    }
`   
)


//resolvers
let root = {
    results: () => {
        return new Date();
    }
}
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Server running on localhost:4000/graphql'));