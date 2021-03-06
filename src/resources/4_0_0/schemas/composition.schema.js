const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Composition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Composition',
	description:
		'A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Composition_Enum_schema',
					values: { Composition: { value: 'Composition' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Compositionsubject_subject_Union',
				description:
					'Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Compositionencounter_encounter_Union',
				description:
					'Describes the clinical encounter or type of care this documentation is associated with.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'Describes the clinical encounter or type of care this documentation is associated with.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The composition editing time, when the composition was last logically changed by the author.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The composition editing time, when the composition was last logically changed by the author.',
		},
		author: {
			type: new GraphQLList(
				new GraphQLNonNull(
					new GraphQLUnionType({
						name: 'Compositionauthor_author_Union',
						description:
							'Identifies who is responsible for the information in the composition, not necessarily who typed it in.',
						types: () => [
							require('./practitioner.schema.js'),
							require('./practitionerrole.schema.js'),
							require('./device.schema.js'),
							require('./patient.schema.js'),
							require('./relatedperson.schema.js'),
							require('./organization.schema.js'),
						],
						resolveType(data) {
							if (data && data.resourceType === 'Practitioner') {
								return require('./practitioner.schema.js');
							}
							if (data && data.resourceType === 'PractitionerRole') {
								return require('./practitionerrole.schema.js');
							}
							if (data && data.resourceType === 'Device') {
								return require('./device.schema.js');
							}
							if (data && data.resourceType === 'Patient') {
								return require('./patient.schema.js');
							}
							if (data && data.resourceType === 'RelatedPerson') {
								return require('./relatedperson.schema.js');
							}
							if (data && data.resourceType === 'Organization') {
								return require('./organization.schema.js');
							}
						},
					}),
				),
			),
			description:
				'Identifies who is responsible for the information in the composition, not necessarily who typed it in.',
		},
		_title: {
			type: require('./element.schema.js'),
			description: 'Official human-readable label for the composition.',
		},
		title: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Official human-readable label for the composition.',
		},
		_confidentiality: {
			type: require('./element.schema.js'),
			description:
				'The code specifying the level of confidentiality of the Composition.',
		},
		confidentiality: {
			type: CodeScalar,
			description:
				'The code specifying the level of confidentiality of the Composition.',
		},
		attester: {
			type: new GraphQLList(require('./compositionattester.schema.js')),
			description:
				'A participant who has attested to the accuracy of the composition/document.',
		},
		custodian: {
			type: new GraphQLUnionType({
				name: 'Compositioncustodian_custodian_Union',
				description:
					'Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.',
		},
		relatesTo: {
			type: new GraphQLList(require('./compositionrelatesto.schema.js')),
			description:
				'Relationships that this composition has with other compositions or documents that already exist.',
		},
		event: {
			type: new GraphQLList(require('./compositionevent.schema.js')),
			description:
				'The clinical service, such as a colonoscopy or an appendectomy, being documented.',
		},
		section: {
			type: new GraphQLList(require('./compositionsection.schema.js')),
			description: 'The root of the sections that make up the composition.',
		},
	}),
});
