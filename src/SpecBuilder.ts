import {
	BaseDefinition,
	OpenApiObject,
	PathsObject,
	InfoObject,
	ServerObject,
	ComponentsObject,
	SecurityRequirementObject,
	TagObject,
	ExternalDocumentationObject,
} from './exported';
import objectMerge from './util/objectMerge';

class SpecBuilder implements OpenApiObject {
	openapi: string;
	info: InfoObject;
	servers?: ServerObject[];
	paths: PathsObject;
	components?: ComponentsObject;
	security?: SecurityRequirementObject[];
	tags?: TagObject[];
	externalDocs?: ExternalDocumentationObject;

	constructor(baseDefinition: BaseDefinition) {
		this.openapi = baseDefinition.openapi;
		this.info = baseDefinition.info;
		this.servers = baseDefinition.servers;
		this.paths = baseDefinition.paths || {};
		this.components = baseDefinition.components;
		this.security = baseDefinition.security;
		this.tags = baseDefinition.tags;
		this.externalDocs = baseDefinition.externalDocs;
	}

	addData(parsedFile: OpenApiObject[]) {
		parsedFile.forEach((file) => {
			objectMerge(this, file);
		});
	}
}

export default SpecBuilder;
