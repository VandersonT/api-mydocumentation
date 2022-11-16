import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface TesteInstance extends Model {
    id: number;
    name: string;
}

export const Teste = sequelize.define<TesteInstance>('Teste', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    }
},
{
    tableName: 'teste',
    timestamps: false
});