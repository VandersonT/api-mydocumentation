import { Model, DataTypes, BelongsTo } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface Doc_viewInstance extends Model {
    id: number;
    ip: string;
    doc_id: number;
}

export const DocView = sequelize.define<Doc_viewInstance>('doc_view', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ip: {
        type: DataTypes.STRING,
    },
    doc_id: {
        type: DataTypes.INTEGER,
    },
},
{
    tableName: 'doc_view',
    timestamps: false
});