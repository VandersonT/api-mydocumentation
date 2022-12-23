import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface MediaInstance extends Model {
    id: number;
    name: string;
    alternative_text: string;
    author: number;
    created_at: Date;
}

export const Media = sequelize.define<MediaInstance>('media', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    alternative_text: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.NUMBER,
    },
    created_at: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'media',
    timestamps: false
});