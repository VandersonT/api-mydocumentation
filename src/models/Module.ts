import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface ModuleInstance extends Model {
    id: number;
    title: string;
    doc_id: number;
}

export const Module = sequelize.define<ModuleInstance>('module', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    doc_id: {
        type: DataTypes.NUMBER,
    },
},
{
    tableName: 'module',
    timestamps: false
});