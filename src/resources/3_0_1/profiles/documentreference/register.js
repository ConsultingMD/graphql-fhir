const {
	DocumentReferenceCreateMutation,
	DocumentReferenceUpdateMutation,
	DocumentReferenceRemoveMutation,
} = require('./mutation');

const {
	DocumentReferenceQuery,
	DocumentReferenceListQuery,
	DocumentReferenceInstanceQuery,
	DocumentReferenceByPatientPII
} = require('./query');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		DocumentReference: DocumentReferenceQuery,
		DocumentReferenceList: DocumentReferenceListQuery,
		DocumentReferenceByPatientPII: DocumentReferenceByPatientPII,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DocumentReferenceCreate: DocumentReferenceCreateMutation,
		DocumentReferenceUpdate: DocumentReferenceUpdateMutation,
		DocumentReferenceRemove: DocumentReferenceRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'DocumentReference',
		path: '/3_0_1/DocumentReference/:id',
		query: DocumentReferenceInstanceQuery,
	},
};
