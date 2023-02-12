import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";

export const getOrders = async(req, res) => {
    console.log('data users :',req.user_data)
    try {
        const users = await Order.findAll({
            include : [{model : Product}],
            where : {id_user : req.user_data.userId}
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}