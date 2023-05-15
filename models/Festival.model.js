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