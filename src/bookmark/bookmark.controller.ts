import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common'
import { BookmarkService } from './bookmark.service'
import { JwtGuard } from '../auth/guard/jwt.guard'

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {

  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@Req() req: any) {
    const userId = req.user.id
    return this.bookmarkService.getBookmarks(userId)
  }

  @Post()
  createBookmark(@Req() req: any, @Body() dto: any) {
    const userId = req.user.id
    return this.bookmarkService.createBookmark(userId, dto)
  }

}