import { Flex, Link, Text } from '@citric/core'
import { Badge, Card, Tabs, TabsItem } from '@citric/ui'
import { getThemeName, theme } from '@stack-spot/portal-theme'
import { ViewPropsOf } from 'navigation'
import { useState } from 'react'
import { SiDatadog, SiGithub } from 'react-icons/si'
import { styled } from 'styled-components'
import topics from '../mock/topics.json'
import { envColor } from '../shared/environment-color'

const Styled = styled.div`
  header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    margin-bottom: 30px;
    .badge {
      align-self: flex-start;
    }
    .footer {
      display: flex;
      gap: 30px;
      align-items: center;
      .reuse {
        display: flex;
        gap: 16px;
        align-items: center;
      }
    }
    .related {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 20px;
      width: 250px;
      background-color: ${theme.color.light[500]};
      ul {
        padding: 0;
        margin: 20px 0 0 0;
        list-style: none;
      }
    }
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Topic = ({ params: { id }, route }: ViewPropsOf<'root.topic'>) => {
  const topic = topics.find(t => t.id === id)
  const [activeTab, setActiveTab] = useState(0)
  const theme = getThemeName()

  return (
    <Styled>
      <Card as="header">
        <Text appearance="h2" colorScheme="primary">{topic?.name}</Text>
        <Badge palette={envColor(topic?.environment)} appearance="square" className="badge">{topic?.environment}</Badge>
        <div className="footer"></div>
        <Card className="related" style={{ gap: 12, display: 'flex', flexDirection: 'column' }}>
          <Text weight="bold">Links</Text>
          <Flex flexDirection="row" style={{ gap: 12, alignContent: 'center' }}>
            <Link href="https://www.datadoghq.com" target="_blank"><SiDatadog size={30}
              color={theme === 'dark' ? 'white' : '#632ca6'} /></Link>
            <Link href="https://www.github.com" target="_blank"><SiGithub size={30}
              color={theme === 'dark' ? 'white' : 'black'} /></Link>
          </Flex>

        </Card>
      </Card>
      <Tabs activeIndex={activeTab} onChange={setActiveTab}>
        <TabsItem title="Details">
          ...
        </TabsItem>
        <TabsItem title="Consumers">
          ...
        </TabsItem>
        <TabsItem title="Producers">
          ...
        </TabsItem>
      </Tabs>
    </Styled>
  )
}

