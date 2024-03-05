export const kurashiFetcher = async (url: string): Promise<any> => await fetch(url, { cache: 'no-cache' }).then(async (res) => await res.json())
