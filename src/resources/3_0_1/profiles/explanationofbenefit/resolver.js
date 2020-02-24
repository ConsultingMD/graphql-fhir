/**
 * @name exports.getExplanationOfBenefit
 * @static
 * @summary ExplanationOfBenefit resolver.
 */
module.exports.getExplanationOfBenefit = function getExplanationOfBenefit(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.getExplanationOfBenefitList
 * @static
 * @summary ExplanationOfBenefit list resolver.
 */
module.exports.getExplanationOfBenefitList = function getExplanationOfBenefitList(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.getExplanationOfBenefitInstance
 * @static
 * @summary ExplanationOfBenefit instance resolver.
 */
module.exports.getExplanationOfBenefitInstance = function getExplanationOfBenefitInstance(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.createExplanationOfBenefit
 * @static
 * @summary Create ExplanationOfBenefit resolver.
 */
module.exports.createExplanationOfBenefit = function createExplanationOfBenefit(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.updateExplanationOfBenefit
 * @static
 * @summary Update ExplanationOfBenefit resolver.
 */
module.exports.updateExplanationOfBenefit = function updateExplanationOfBenefit(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.removeExplanationOfBenefit
 * @static
 * @summary Remove ExplanationOfBenefit resolver.
 */
module.exports.removeExplanationOfBenefit = function removeExplanationOfBenefit(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.getExplanationOfBenefitByPatientPII
 * @static
 * @summary getExplanationOfBenefitByPatientPII.
 */
module.exports.getExplanationOfBenefitByPatientPII = function getExplanationOfBenefitByPatientPII(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	const bearerToken = require('../../../../utils/auth0.js')
	const fetch = require('node-fetch')
	return fetch('https://fhir.uat.grandrounds.com/fhir/ExplanationOfBenefit/_search?_count=25&_query=byPatientPII&_sort=-entry.response.created&_lastUpdated=gt2018-06-01', {
		headers: {
		  'Authorization': 'Bearer ' + bearerToken,
		  'Content-Type': 'application/json'
		},
		body: `[{ "family": "${args.family}", "ss_last4": "${args.usSsnLast4}", "dob": "${args.birthdate}", "primary": true }]`,
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
