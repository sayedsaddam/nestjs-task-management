import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';

@Injectable()
export class AmenitiesService {
  constructor(private prisma: PrismaService){}
  create(createAmenityDto: Prisma.AmenitiesCreateInput) {
    return this.prisma.amenities.create({
      data: createAmenityDto,
    });
  }

  findAll() {
    return this.prisma.amenities.findMany();
  }


  findOne(amenityWhereUniqueInput: Prisma.AmenitiesWhereUniqueInput) { // it's not working properly.
    return this.prisma.amenities.findUnique({
      where: amenityWhereUniqueInput,
    });
  }

  update(where: Prisma.AmenitiesWhereUniqueInput, data: Prisma.AmenitiesUpdateInput) {
    return this.prisma.amenities.update({
      data,
      where,
    });
  }

  remove(where: Prisma.AmenitiesWhereUniqueInput) {
    return this.prisma.amenities.delete({
      where,
    });
  }
}
