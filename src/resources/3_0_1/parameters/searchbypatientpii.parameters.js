const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaire query
 */
module.exports = {
	family: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchByPatientPII.family',
		description: 'Family name',
    },
	usSsnLast4: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchByPatientPII.usSsnLast4',
		description: 'usSsnLast4',
    },    
    birthdate: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchByPatientPII.birthdate',
		description: 'birthdate',
	},    
};
