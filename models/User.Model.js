import sequelize from "../config/Db.Config";

const User  = sequelize.define('User', {
  id: {   
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
    },
}
)

export default User
