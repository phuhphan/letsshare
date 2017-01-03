/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 	attributes: {
      	autoCreatedAt: false,
        autoUpdatedAt: false,
        tableName : 'transactions',
        attributes: {
            space_id: {
                type			: 'string',
                columnName		: 'transaction_id',
                primaryKey      : true,
                unique          : true,
            },
            user_id: {
    	      	model: 'User',
    	    },
    	    space_id: {
    	      	model: 'Space',
    	    },
            status_id: {
                model: 'Status',
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
};

