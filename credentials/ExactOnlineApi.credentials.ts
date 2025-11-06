import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExactOnlineApi implements ICredentialType {
	name = 'exactOnlineApi';
	//icon = 'file:exactOnline.svg';
	displayName = 'Exact Online API With AccessToken API';
	documentationUrl = 'https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-Content-gettingstarted';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
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
	];

}
