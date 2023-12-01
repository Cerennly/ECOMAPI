const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId : { type: String, required:true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    amount: { type: Number, required:true },
    address: { type: Object, required:true },
    statuscargo: { type: String, default:"order processing"},
},
{ timestamps: true }
);

module.exports =mongoose.model("Order, OrderSchema");

//can I detialed status with a cargo processsing live
//client buy sometihng they get a -order number- how I can do tht?
//default:1 -sort() funct? or if function
//payment_instaracture: token or ?
