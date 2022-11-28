import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface SystemInstance extends Model {
    id: number;
    is_active: boolean;
    version: string;
}

export const System = sequelize.define<SystemInstance>('system', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
    },
    version: {
        type: DataTypes.STRING,
    },
},
{
    tableName: 'system',
    timestamps: false
});