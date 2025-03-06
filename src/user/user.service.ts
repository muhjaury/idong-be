import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { decryptData, hashData } from 'src/utils/dataManipulation';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(dto: CreateUserDTO): Promise<User | null> {
    const data = {
      username: hashData(decryptData(dto.username)),
      password: hashData(decryptData(dto.password)),
    };
    return this.userRepository.findOneBy(data);
  }

  async create(dto: CreateUserDTO) {
    const init = this.userRepository.create(dto);
    return await this.userRepository.save(init);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
