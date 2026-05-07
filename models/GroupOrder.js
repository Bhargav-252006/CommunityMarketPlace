const mongoose = require('mongoose');

const groupOrderSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommunityUser',
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
        default: 'Pending'
    },
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Online', 'Wallet', 'Bank Transfer'],
        default: 'Bank Transfer'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('GroupOrder', groupOrderSchema); 