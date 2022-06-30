const mongoose = require('mongoose');
const requestLogSchema = mongoose.Schema({
    method: { type: String },
    url: { type: String },
    id_user: { type: Number },
    id_role: { type: Number },
    ip: { type: String },
    At: { type: Date }
}, {
    versionKey: false
},
);

module.exports = mongoose.model('logs', requestLogSchema);