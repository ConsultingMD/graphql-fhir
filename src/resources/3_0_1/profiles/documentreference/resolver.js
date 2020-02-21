/**
 * @name exports.getDocumentReference
 * @static
 * @summary DocumentReference resolver.
 */
module.exports.getDocumentReference = function getDocumentReference(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	console.log("Request:");
	console.log(args);
	return {};
};
		

/**
 * @name exports.getDocumentReferenceList
 * @static
 * @summary DocumentReference list resolver.
 */
module.exports.getDocumentReferenceList = function getDocumentReferenceList(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.getDocumentReferenceByPatientPII
 * @static
 * @summary getDocumentReferenceByPatientPII.
 */
module.exports.getDocumentReferenceByPatientPII = function getDocumentReferenceByPatientPII(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	const bearerToken = require('../../../../utils/auth0.js')
	const fetch = require('node-fetch')
	return fetch('https://fhir.uat.grandrounds.com/fhir/DocumentReference/_search?_query=byPatientPII', {
		headers: {
		  'Authorization': 'Bearer ' + bearerToken,
		  'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `family=${args.family}&usSsnLast4=${args.usSsnLast4}&birthdate=${args.birthdate}`,
		method: 'POST'
	  })
	  .then(response => {
		  return response.json();
	   })
	   .then(response => {
		   console.log(response)
		   return response;
	   });
};

/**
 * @name exports.getDocumentReferenceInstance
 * @static
 * @summary DocumentReference instance resolver.
 */
module.exports.getDocumentReferenceInstance = function getDocumentReferenceInstance(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.createDocumentReference
 * @static
 * @summary Create DocumentReference resolver.
 */
module.exports.createDocumentReference = function createDocumentReference(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.updateDocumentReference
 * @static
 * @summary Update DocumentReference resolver.
 */
module.exports.updateDocumentReference = function updateDocumentReference(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.removeDocumentReference
 * @static
 * @summary Remove DocumentReference resolver.
 */
module.exports.removeDocumentReference = function removeDocumentReference(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};
