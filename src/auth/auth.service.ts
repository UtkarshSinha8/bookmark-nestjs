import { Injectable, ForbiddenException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AuthDto } from './dto/auth.dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    const hash = await bcrypt.hash(dto.password, 10)

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash,
        },
      })

      return this.signToken(user.id, user.email)

    } catch (e) {
      throw new ForbiddenException('Email already taken')
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    })

    if (!user) {
      throw new ForbiddenException('Invalid credentials')
    }

    const passwordMatches = await bcrypt.compare(
      dto.password,
      user.password,
    )

    if (!passwordMatches) {
      throw new ForbiddenException('Invalid credentials')
    }

    return this.signToken(user.id, user.email)
  }

  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email: email,
    }

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: 'secret',
    })

    return {
      access_token: token,
    }
  }
}
