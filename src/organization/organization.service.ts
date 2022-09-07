import { Organization } from './entities/organization.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async createOrganization(
    CreateOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    const { name_organization } = CreateOrganizationDto;
    const organizations = this.organizationRepository.create({
      name_organization,
    });

    return this.organizationRepository.save(organizations);
    return organizations;
  }

  async getAllOrganizations(): Promise<Organization[]> {
    const query = await this.organizationRepository.find({});
    return query;
  }

  async getOrganizationById(id: number): Promise<Organization> {
    const found = await this.organizationRepository.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new NotFoundException(`Organization with ID "${id}" not found.`);
    }

    return found;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
