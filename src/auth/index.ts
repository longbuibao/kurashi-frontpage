import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { strictCheckString } from '@/utils'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { User } from '@prisma/client'

interface CheckUserPasswordResult {
  isOkay: boolean
  user: User | null
}

const checkUserPassword = async (plainText: string, userId: string): Promise<CheckUserPasswordResult> => {
  const user = await prisma.user.findFirst({ where: { userId } })
  if (user === null) {
    return {
      isOkay: false,
      user: null
    }
  }
  const hashedPassword = user.password
  const isOkay = await bcrypt.compare(plainText, hashedPassword)
  return {
    isOkay,
    user: isOkay ? user : null
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        userId: {},
        password: {}
      },
      authorize: async (credentials, request) => {
        if (credentials === null || credentials === undefined) {
          throw new Error('credentials is null')
        }

        const password = credentials.password as string
        const userId = credentials.userId as string

        if (strictCheckString(password) || strictCheckString(userId)) {
          throw new Error('password or userId is null')
        }

        const result = await checkUserPassword(password, userId)
        const user = result.user

        return result.isOkay && user !== null ? { ...user, id: user.userId } : null
      }

    })
  ],
  callbacks: {
    async jwt ({ token, user }) {
      return { ...token, ...user }
    },
    async session ({ session, user, token }) {
      return { ...token, ...user, ...session }
    }
  }
})
