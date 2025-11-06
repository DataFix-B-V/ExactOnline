import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExactOnlineApiOAuth2Api implements ICredentialType {
	name = 'exactOnlineApiOAuth2Api';
	extends = ['oAuth2Api'];
	//icon = 'file:exactOnline.svg';
	displayName = 'Exact Online API OAuth2 API';
	documentationUrl = 'https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-Content-gettingstarted';
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: '={{$self["url"]}}/api/oauth2/auth',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: '={{$self["url"]}}/api/oauth2/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Country',
			name: 'url',
			type: 'options',
			default: 'nl',
			options: [
					{
							name: 'Belgium',
							value: 'https://start.exactonline.be',
					},
					{
							name: 'France',
							value: 'https://start.exactonline.fr',
					},
					{
							name: 'Germany',
							value: 'https://start.exactonline.de',
					},
					{
							name: 'Spain',
							value: 'https://start.exactonline.es',
					},
					{
							name: 'The Netherlands',
							value: 'https://start.exactonline.nl',
					},
					{
							name: 'United Kingdom',
							value: 'https://start.exactonline.co.uk',
					},
					{
							name: 'United States of America',
							value: 'https://start.exactonline.com',
					},
			],
	},
	// {
	// 		displayName: 'URL',
	// 		name: 'url',
	// 		type: 'hidden',
	// 		default: '=https://start.exactonline.{{$self["country"]}}',
	// },
	];

}
