module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("USERS", {

        id_user: {
            type: Number,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        password_user: {
            type: String,
            allowNull: false
        },
        email_user: {
            type: String,
        },
        id_role: {
            type: Number
        },
        sponsored_by_user: {
            type: String,
            allowNull: true
        }
    }, {
        timestamps: false
    });
    return Tutorial;
};