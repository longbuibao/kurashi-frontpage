import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { strictCheckString } from '@/utils'

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

        const password = credentials.password as string
        const userId = credentials.userId as string

        if (strictCheckString(password) || strictCheckString(userId)) {
          throw new Error('password or userId is null')
        }

        return null
      }
    })
  ]
})
