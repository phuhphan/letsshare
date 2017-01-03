/**
 * Status.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		attributes: {
		  	autoCreatedAt: false,
		    autoUpdatedAt: false,
		    tableName : 'statuses',
		    attributes: {
		        status_id: {
		            type			: 'string',
		            columnName		: 'status_id',
		            primaryKey      : true,
		            unique          : true,
		        },
		        status_name: {
			      	type			: 'text',
            		status_name		: 'status_name',
			    },
		        created: {
		            type			: 'date',
		            columnName		: 'created',
		        },
		        edited: {
		            type			: 'date',
		            columnName		: 'edited',
		        },
		    },
	  	}
	}
};

