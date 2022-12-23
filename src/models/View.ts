import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface ViewInstance extends Model {
    id: number;
    ip: string;
    date: Date;
}

export const View = sequelize.define<ViewInstance>('view', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ip: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'view',
    timestamps: false
});