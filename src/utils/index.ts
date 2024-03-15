export const sleep = async (delay: number): Promise<any> => await new Promise((resolve) => setTimeout(resolve, delay))
