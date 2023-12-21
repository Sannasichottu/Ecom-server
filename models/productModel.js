const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter Product name"],
        trim : true,
        maxLength : [100,"Product name cannot exceed 100 characters"]
    },
    price : {
        type : Number,
        default: 0.0
    },
    description : {
        type:String,
        required:[true,"Please enter Product description"]
    },
    ratings : {
        type:String,
        default:0
    },
    images : [
        {
            image : {
                type : String,
                required: true
            }
        }
    ],
    category : {
        type: String,
        required : [true, "Please enter Product category"],
        enum : {
            values : [
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message : "Please select correct category"
        }
    },
    seller : {
        type : String,
        required:[true, "please enter Product seller"]
    },
    stock : {
        type : Number,
        required : [true, "Please enter Product stock"],
        maxLength:[40,"Product stock cannot exceed 40"]
    },
    numOfReviews : {
        type : Number,
        default:0
    },
    reviews : [
        {
            name : {
                type:String,
                required : true
            },
            rating : {
                type : String,
                required : true
            },
            comment : {
                type : String,
                required : true
            }
        }
    ],
    createdAt:{
        type : Date,
        default: Date.now()
    }
})


let schema = mongoose.model('Product',productSchema)

module.exports = schema