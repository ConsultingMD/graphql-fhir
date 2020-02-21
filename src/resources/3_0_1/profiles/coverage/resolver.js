/**
 * @name exports.getCoverage
 * @static
 * @summary Coverage resolver.
 */
module.exports.getCoverage = function getCoverage(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.getCoverageList
 * @static
 * @summary Coverage list resolver.
 */
module.exports.getCoverageList = function getCoverageList(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.getCoverageInstance
 * @static
 * @summary Coverage instance resolver.
 */
module.exports.getCoverageInstance = function getCoverageInstance(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.createCoverage
 * @static
 * @summary Create Coverage resolver.
 */
module.exports.createCoverage = function createCoverage(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.updateCoverage
 * @static
 * @summary Update Coverage resolver.
 */
module.exports.updateCoverage = function updateCoverage(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.removeCoverage
 * @static
 * @summary Remove Coverage resolver.
 */
module.exports.removeCoverage = function removeCoverage(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/*
* @name exports.getCoverageByPatientPII
* @static
* @summary getCoverageByPatientPII.
*/
module.exports.getCoverageByPatientPII = function getCoverageByPatientPII(
   root,
   args,
   context = {},
   info,
) {
   let { server, version, req, res } = context;
   const bearerToken = require('../../../../utils/auth0.js')
   const fetch = require('node-fetch')
   return fetch('https://fhir.uat.grandrounds.com/fhir/Coverage/_search?_query=byPatientPII', {
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