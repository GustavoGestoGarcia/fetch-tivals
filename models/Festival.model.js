const { Schema, model } = require("mongoose");

const festivalSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        reviews: [{
            rate: Number,
            comment: String
        }],
        start: {
            type: Date,
            required: true
        },
        end: {
            type: Date,
            required: true
        },
        imagFest: {
            type: String,
            default: 'https://i.stack.imgur.com/l60Hf.png'
        },
        location: {
            type: {
                type: String,
            },
            coordinates: [Number]
        },
        assistants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true
    }
);

const Festival = model("Festival", festivalSchema);

module.exports = Festival