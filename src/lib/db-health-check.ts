import prisma from './prisma'

/**
 * Health check function to verify database connection
 * Use this in API routes or middleware to ensure DB is accessible
 */
export async function checkDatabaseConnection (): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error('Database connection check failed:', error)
    return false
  }
}

/**
 * Retry database query with exponential backoff
 */
export async function retryDatabaseQuery<T> (
  queryFn: () => Promise<T>,
  maxRetries = 3,
  delayMs = 1000
): Promise<T> {
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await queryFn()
    } catch (error) {
      lastError = error as Error
      console.warn(`Database query attempt ${attempt}/${maxRetries} failed:`, error)

      if (attempt < maxRetries) {
        const waitTime = delayMs * Math.pow(2, attempt - 1) // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, waitTime))
      }
    }
  }

  throw (lastError != null) || new Error('Database query failed after retries')
}
