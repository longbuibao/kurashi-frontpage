import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

import prisma from '@/lib/prisma'

const saltAndHashPassword = async (plainText: string): Promise<string> => {
  const rounds = 10
  const salt = await bcrypt.genSalt(rounds)
  const hashPassword = await bcrypt.hash(plainText, salt)
  return hashPassword
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        userId: {},
        password: {}
      },
      authorize: async (credentials) => {
        if (credentials === null || credentials === undefined) {
          throw new Error('credentials is null')
        }
        if (!credentials.password || !credentials.userId) {
          throw new Error('password or userId is null')
        }
        const pwHash = await saltAndHashPassword(credentials.password)
        const user = await prisma.user.findFirst({ where: { userId: credentials.userId, password: pwHash } })
        if (user == null) {
          throw new Error('User not found.')
        }
        return user
      }
    })
  ]
})
