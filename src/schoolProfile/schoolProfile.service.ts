import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { decryptData } from '../utils/dataManipulation';
import { extactData } from '../utils/extractData';
import { SchoolProfileDTO } from './dto/schoolProfile.dto';
import { SchoolProfile } from './schoolProfile.entity';

@Injectable()
export class SchoolProfileService {
  constructor(
    @Inject('USER_REPOSITORY')
    private profileRepository: Repository<SchoolProfile>,
  ) {}

  async registerSchoolProfile(dto: SchoolProfileDTO) {
    const data = extactData(dto);

    const principleName = decryptData(data.principleName);
    const principleFile = data.principleFile;
    const principleGreeting = decryptData(data.principleGreeting);
    const visionMissionFile = data.visionMissionFile;
    const orgStructureFile = data.orgStructureFile;
    const academicCalenderFile = data.academicCalenderFile;

    const query =
      'INSERT INTO school_profile ( `principleName`, `principleFile`, `principleGreeting`, `visionMissionFile`, `orgStructureFile`, `academicCalenderFile`) VALUES (' +
      `"${principleName}","${principleFile}","${principleGreeting}","${visionMissionFile}","${orgStructureFile}","${academicCalenderFile}"` +
      ');';

    const executeQuery = await this.profileRepository.query(query);
    if (executeQuery !== undefined) {
      return { data: principleName };
    }
    return { data: null };
  }
}
