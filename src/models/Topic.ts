import { Model, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../instances/pg';

export interface TopicInstance extends Model {
    id: number;
    title: string;
    content: Text;
    module_id: number;
    image: string;
    meta_tags: string;
    doc_id: number;
}

export const Topic = sequelize.define<TopicInstance>('topic', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    },
    module_id: {
        type: DataTypes.NUMBER,
    },
    image: {
        type: DataTypes.STRING,
    },
    meta_tags: {
        type: DataTypes.STRING,
    },
    doc_id: {
        type: DataTypes.NUMBER,
    },
},
{
    tableName: 'topic',
    timestamps: false
});