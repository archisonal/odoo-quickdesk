const mongoose = require('mongoose')

const tktSchema = new mongoose.Schema({
    subject: String,
    desc: String,
    categ: String,
    attatchment: String,
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
        default: 'Open'
    },
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comments: [{
        text: String,
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        createdAt: { type: Date, default: Date.now }
    }],
    review: {
        up: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        down: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Ticket', tktSchema);