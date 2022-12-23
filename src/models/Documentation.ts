import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface DocumentationInstance extends Model {
    id: number;
    name: string;
    description: string;
    image: string;
    create_at: Date;
    author: number;
    updated_at: Date;
    last_author: number;
}

export const Doc = sequelize.define<DocumentationInstance>('documentation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE,
    },
    author: {
        type: DataTypes.NUMBER,
    },
    updated_at: {
        type: DataTypes.DATE,
    },
    last_author: {
        type: DataTypes.NUMBER,
    },
},
{
    tableName: 'documentation',
    timestamps: false
});