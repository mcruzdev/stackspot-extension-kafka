import { OneOfPalettes } from '@citric/core'

const colorMap: Record<string, OneOfPalettes> = {
  dev: 'cyan',
  stage: 'blue',
  production: 'orange',
}

export const envColor = (name: string | undefined): OneOfPalettes => {

  if (!name) {
    return 'cyan'
  }

  return colorMap[name] || 'cyan'
}
