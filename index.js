const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// schema
const schema = require('./schema');

const app = express();
const PORT = 5000;

// graphQL server
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true
	})
);

app.listen(PORT, function() {
	console.log('Server is listening on port', PORT);
});
