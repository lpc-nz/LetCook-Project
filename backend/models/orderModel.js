import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        orderItems: [
            {
                name: { type: String, required: true },
                image: { type: String, required: true },
                ingredients: { type: Array, required: true },
                time: { type: String, required: true },
                nutritional: { type: Array, required: true },
                serving: { type: String, required: true },
                description: { type: String, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                }
            }
        ],

        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order