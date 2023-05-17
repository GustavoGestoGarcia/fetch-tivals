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
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        },
        venue: {
            type: String,
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
        ],
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

    },
    {
        timestamps: true
    }
);

const Festival = model("Festival", festivalSchema);

module.exports = Festival