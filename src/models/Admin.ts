import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface AdminInstance extends Model {
    id: number;
    name: string;
    email: string;
    pass: string;
    token: string;
    phone: string;
    position: number;
    created_at: Date;
}

export const Admin = sequelize.define<AdminInstance>('Admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    pass: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    position: {
        type: DataTypes.NUMBER,
    },
    created_at: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'admin',
    timestamps: false
});