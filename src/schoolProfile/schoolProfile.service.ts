import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { extactData } from '../utils/extractData';
import { SchoolProfileDTO } from './dto/schoolProfile.dto';
import { SchoolProfile } from './schoolProfile.entity';

@Injectable()
export class SchoolProfileService {
  constructor(
    @Inject('USER_REPOSITORY')
    private schoolProfileRepository: Repository<SchoolProfile>,
  ) {}

  findAll() {
    return this.schoolProfileRepository.find();
  }

  async registerSchoolProfile(dto: SchoolProfileDTO) {
    const data = extactData(dto);

    const principleName = data.principleName;
    const principleFile = data.principleFile;
    const principleGreeting = data.principleGreeting;
    const visionMissionFile = data.visionMissionFile;
    const orgStructureFile = data.orgStructureFile;
    const academicCalenderFile = data.academicCalenderFile;

    const selectQuery = 'SELECT * FROM school_profile';
    const executeSelectQuery =
      await this.schoolProfileRepository.query(selectQuery);
    if (executeSelectQuery.length > 0) {
      const updateQuery = `UPDATE school_profile 
                            SET principleName="${principleName}",
                            principleFile="${principleFile}",
                            principleGreeting="${principleGreeting}",
                            visionMissionFile="${visionMissionFile}",
                            orgStructureFile="${orgStructureFile}",
                            academicCalenderFile="${academicCalenderFile}" 
                            WHERE id=${executeSelectQuery[0].id}`;
      const executeUpdateQuery =
        await this.schoolProfileRepository.query(updateQuery);
      if (executeUpdateQuery !== undefined) {
        return { data: principleName };
      }
    } else {
      const insertQuery =
        'INSERT INTO school_profile ( `principleName`, `principleFile`, `principleGreeting`, `visionMissionFile`, `orgStructureFile`, `academicCalenderFile`) VALUES (' +
        `"${principleName}","${principleFile}","${principleGreeting}","${visionMissionFile}","${orgStructureFile}","${academicCalenderFile}"` +
        ');';

      const executeInsertQuery =
        await this.schoolProfileRepository.query(insertQuery);
      if (executeInsertQuery !== undefined) {
        return { data: principleName };
      }
    }

    return { data: null };
  }

  async deleteSchoolProfile(id: number) {
    const executeQuery = await this.schoolProfileRepository.delete(id);
    if (executeQuery !== undefined) {
      return { data: id };
    }
    return { data: null };
  }
}
