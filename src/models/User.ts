import { Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
  tableName: 'usuarios',
  timestamps: true,
})
export class User extends Model<User> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
