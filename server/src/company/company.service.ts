import { Company } from '@app/company/entities/company.entity'
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCompanyInput } from './dto/create-company.input'
import { UpdateCompanyInput } from './dto/update-company.input'

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {}
  create(createCompanyInput: CreateCompanyInput) {
    try {
      const company = this.companyRepository.create(createCompanyInput)
      return this.companyRepository.save(company)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  findAll() {
    return `This action returns all company`
  }

  findOne(id: number) {
    return `This action returns a #${id} company`
  }

  async update(id: string, updateCompanyInput: UpdateCompanyInput) {
    try {
      const finance = await this.companyRepository.preload({ id, ...updateCompanyInput })
      if (!finance) throw new NotFoundException(`Company was not found`)

      return this.companyRepository.save(finance)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} company`
  }
}
