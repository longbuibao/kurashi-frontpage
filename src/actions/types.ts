import * as z from 'zod'

export const DoLoginReturnType = z.object({
  success: z.string().optional(),
  error: z.string().optional()
})
