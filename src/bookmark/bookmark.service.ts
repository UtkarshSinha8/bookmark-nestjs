import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class BookmarkService {

  constructor(private prisma: PrismaService) {}

  async getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId
      }
    })
  }

  async createBookmark(userId: number, dto: any) {
    return this.prisma.bookmark.create({
      data: {
        title: dto.title,
        url: dto.url,
        userId: userId
      }
    })
  }

}
