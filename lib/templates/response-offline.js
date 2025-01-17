'use strict';

module.exports = {
	default: {
		responseModels: {
			'application/json;charset=UTF-8': 'Empty'
		},
		responseParameters: {
			'method.response.header.Access-Control-Allow-Credentials': "'true'",
			'method.response.header.Access-Control-Allow-Origin': "'*'",
			'method.response.header.Access-Control-Expose-Headers': "'x-janis-total,x-janis-fixed-filters'",
			'method.response.header.x-janis-total': 'integration.response.body.headers.x-janis-total',
			'method.response.header.x-janis-fixed-filters': 'integration.response.body.headers.x-janis-fixed-filters',
			'method.response.header.Set-Cookie': 'integration.response.body.headers.Set-Cookie'
		},
		responseTemplates: {
			'application/json;charset=UTF-8': ''
		},
		statusCode: 200
	},
	400: {
		statusCode: 400
	},
	401: {
		statusCode: 401
	},
	403: {
		statusCode: 403
	},
	404: {
		statusCode: 404
	},
	422: {
		statusCode: 422
	},
	500: {
		statusCode: 500
	},
	502: {
		statusCode: 502
	},
	503: {
		statusCode: 503
	}
};
