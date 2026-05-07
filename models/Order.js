const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VendorItem',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending'
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommunityUser',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    isGroupOrder: {
        type: Boolean,
        default: false
    },
    groupOrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GroupOrder'
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
        default: 'Pending'
    },
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Online', 'Wallet'],
        default: 'Cash'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema); 