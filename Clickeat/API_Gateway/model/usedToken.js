const mongoose = require('mongoose');
const usedTokenSchema = mongoose.Schema({
    _id: { type: String, required: true },
    expireAt: {
        type: Date,
        default: null,
    }
}, {
    versionKey: false
},
);

usedTokenSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('usedToken', usedTokenSchema);
