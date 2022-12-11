export function flagExternalToLocal(flagExternalURL: string) {
  let country = flagExternalURL.replace('https://cdn.sofifa.net/flags/', '')
  country = country.replace('.png', '')
  const flagURL = `/images/flags/${country}.svg`
  return { country, flagURL }
}
