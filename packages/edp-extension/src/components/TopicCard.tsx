import { Button, Flex, Link, Text } from '@citric/core'
import { Badge, Card } from '@citric/ui'
import styled from 'styled-components'

import { OneOfPalettes } from '@citric/core/dist/theme-types'

interface Props {
  name: string,
  environment: string,
  partitions: number,
  replcationFactor: number,
  href: string,
}

const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  flex: 1;
  cursor: pointer;
  justify-content: space-between;
  .overlay {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    left: 0;
    right: 0;
    top: 0;
  }
`

const StyledFlex = styled(Flex)`
  gap: 12px;
`

const envColor = (name: string): OneOfPalettes => {
  const colorMap: Record<string, OneOfPalettes> = {
    dev: 'cyan',
    stage: 'blue',
    production: 'orange',
  }

  return colorMap[name] || 'cyan'
}

export const TopicCard = ({ name, environment, href }: Props) => (
  <StyledCard>
    <StyledFlex>
      <Text appearance="subtitle4">{name}</Text>
      <Badge palette={envColor(environment)}>{environment}</Badge>
    </StyledFlex>
    <StyledFlex>
      <Link href={href} >
        <Button appearance="text" colorScheme="primary" >
          <Text>View</Text>
        </Button>
      </Link>
    </StyledFlex>
  </StyledCard>
)
