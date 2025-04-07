import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataDTO } from '../dto/data.dto';
import { extactData } from '../utils/extractData';
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

  async registerSchoolProfile(dto: DataDTO) {
    const data = extactData(dto);

    const id = data?.id;
    const principleName = data.principleName;
    const principleFile = data.principleFile;
    const principleGreeting = data.principleGreeting;
    const visionMissionFile = data.visionMissionFile;
    const orgStructureFile = data.orgStructureFile;
    const academicCalenderFile = data.academicCalenderFile;

    if (id) {
      const updateQuery = `UPDATE school_profile 
                            SET principleName="${principleName}",
                            principleFile="${principleFile}",
                            principleGreeting="${principleGreeting}",
                            visionMissionFile="${visionMissionFile}",
                            orgStructureFile="${orgStructureFile}",
                            academicCalenderFile="${academicCalenderFile}" 
                            WHERE id=${id}`;
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

  async kepalaSekolah() {
    const query =
      'SELECT `principleName`, `principleFile`, `principleGreeting` FROM school_profile;';
    const executeQuery = await this.schoolProfileRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }

  async strukturOrganisasi() {
    const query = 'SELECT `orgStructureFile` FROM school_profile;';
    const executeQuery = await this.schoolProfileRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }

  async visiMisi() {
    const query = 'SELECT `visionMissionFile` FROM school_profile;';
    const executeQuery = await this.schoolProfileRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }

  async kalenderAkademik() {
    const query = 'SELECT `academicCalenderFile` FROM school_profile;';
    const executeQuery = await this.schoolProfileRepository.query(query);
    if (executeQuery !== undefined) {
      return executeQuery;
    }
  }
}
