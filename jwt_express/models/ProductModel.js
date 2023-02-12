import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('Product',{
    name:{
        type: DataTypes.STRING
    },
    p_type:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER(245)
    }
},{
    freezeTableName:true
});
 
export default Product;