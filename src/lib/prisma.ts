import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Create Prisma client with proper configuration
const createPrismaClient = () => {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    errorFormat: 'pretty'
  })

  // Note: Don't call $connect() here as it's lazy-loaded by Prisma
  // The connection will be established on first query

  return client
}

// Use global singleton in both development and production to prevent connection issues
// This is critical for preventing "too many connections" errors
export const prisma = globalForPrisma.prisma || createPrismaClient()

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma
}

// Handle graceful shutdown
const disconnect = async () => {
  await prisma.$disconnect()
}

if (typeof window === 'undefined') {
  // Server-side only
  process.on('beforeExit', disconnect)
  process.on('SIGINT', disconnect)
  process.on('SIGTERM', disconnect)
}

export default prisma
