import { Inject, Injectable } from '@nestjs/common';
import { decryptData, hashData } from 'src/utils/dataManipulation';
import { extactData } from 'src/utils/extractData';
import { Repository } from 'typeorm';
import { UserDTO, VerifyUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  // Example
  // async create(dto: CreateUserDTO) {
  //   const init = this.userRepository.create(dto);
  //   return await this.userRepository.save(init);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.userRepository.delete(id);
  // }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(dto: VerifyUserDTO) {
    const request = {
      email: decryptData(dto.email),
      password: hashData(decryptData(dto.password)),
    };

    const executeQuery = await this.userRepository.findOneBy(request);
    if (executeQuery !== undefined) {
      return { name: executeQuery?.name, role: executeQuery?.role };
    }
    return null;
  }

  async registerUser(dto: UserDTO) {
    const data = extactData(dto);
    const name = decryptData(data.name);
    const email = decryptData(data.email);
    const role = decryptData(data.role);

    const password = hashData(decryptData(data.password));

    const query =
      'INSERT INTO user (`name`, `email`, `password`, `role`) VALUES (' +
      `"${name}","${email}","${password}","${role}"` +
      ');';

    const executeQuery = await this.userRepository.query(query);
    if (executeQuery !== undefined) {
      return { data: decryptData(data.name) };
    }
    return { data: null };
  }

  async findAllAdmin() {
    const executeQuery = await this.userRepository.findBy({ role: 'ADMIN' });
    if (executeQuery !== undefined) {
      return { data: executeQuery };
    }
    return { data: null };
  }

  async deleteUser(id: number) {
    const executeQuery = await this.userRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
