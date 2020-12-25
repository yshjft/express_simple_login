module.exports =  (sequelize, DataTypes) => (
    sequelize.define('user', {
        nickName : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        charset: 'utf8',
        collate : 'utf8_general_ci',
    })
)