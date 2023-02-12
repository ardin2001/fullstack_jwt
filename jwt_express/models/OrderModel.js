import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./ProductModel.js";
import Users from "./UserModel.js";
const { DataTypes } = Sequelize;
 
const Order = db.define('Order',{
    id_product:{
        type: DataTypes.INTEGER(245)
    },
    id_user:{
        type: DataTypes.INTEGER(245)
    },
    jumlah:{
        type: DataTypes.INTEGER(245)
    },
    status:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
Product.hasMany(Order,{foreignKey : 'id_product'});
Order.belongsTo(Product,{foreignKey : 'id_product'});
Users.hasMany(Order, {foreignKey : 'id_user'});
Order.belongsTo(Users,{foreignKey : 'id_user'});
 
export default Order;