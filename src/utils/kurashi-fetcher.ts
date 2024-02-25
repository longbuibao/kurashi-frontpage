export const kurashiFetcher = async (url: string): Promise<any> => await fetch(url).then(async (res) => await res.json())
