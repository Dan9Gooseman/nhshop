import mongoose from "mongoose";

const Schema = mongoose.Schema
const productSchema = new Schema(
    {
        // "id": 1,
        // "image": "https://picsum.photos/300/300",
        // "name": "Comfortable Sofa",
        // "category": "sofa",
        // "description": "A cozy sofa perfect for relaxing evenings",
        // "price_old": 500,
        // "discount": 50
        title:{type:String,required:true},
        rate:{type:Number, min:1, max:10, default:5},
        description:{type:String, required:true},
        year:{type:Number, required:true},
        active:{type:Boolean,default:true}
    }
)

const productModel = mongoose.model('product', productSchema)

export default productModel