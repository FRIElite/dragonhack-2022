import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@entities/users.entity';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { hash } from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class UserService extends Repository<User> {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = await User.find();
    return users;
  }

  public async findUserById(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await User.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await User.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await User.create({ ...userData, password: hashedPassword }).save();

    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await User.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    const hashedPassword = await hash(userData.password, 10);
    await User.update(userId, { ...userData, password: hashedPassword });

    const updateUser: User = await User.findOne({ where: { id: userId } });
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await User.findOne({ where: { id: userId } });
    if (!findUser) throw new HttpException(409, "You're not user");

    await User.delete({ id: userId });
    return findUser;
  }
}

export default UserService;
