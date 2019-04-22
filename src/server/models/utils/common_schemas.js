const { Schema } = require('mongoose')
const extendSchema = require('./extend_schema')


const defaultToNow = {
	type: Date,
	default: Date.now
}


const updatedCreated = {
    updated: defaultToNow,
    created: defaultToNow
}


const updatedCreatedSchema = new Schema(updatedCreated)


const nameSortOrder = {
    name: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },

    sortOrder: {
        type: Number,
        default: 0
    }
}


const nameSortOrderSchema = new Schema(nameSortOrder)


const genericSchema = extendSchema(updatedCreatedSchema, nameSortOrder)



module.exports = {
    updatedCreatedSchema,
    nameSortOrderSchema,
    genericSchema,
    extendSchema
}