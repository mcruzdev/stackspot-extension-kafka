import { Button, Flex, Text } from '@citric/core'
import { showRightPanel } from '@stack-spot/portal-extension'
import { TopicCard } from 'components/TopicCard'
import { root, ViewPropsOf } from 'navigation'
import { styled } from 'styled-components'
import topics from '../mock/topics.json'

const Styled = styled.div`
  h3 {
    margin: 40px 0;
  }
  .card-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: stretch;

    li {
      flex: 1;
      display: flex;
    }
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home = ({ route }: ViewPropsOf<'root'>) => (
  <Styled>
    <Text appearance="h2" colorScheme="primary">
      KaaS Platform
    </Text>
    <Text appearance="subtitle1">Kafka as a Service Platform</Text>
    <Flex alignItems="center" justifyContent="space-between">
      <Text appearance="h3">Your topics</Text>
      <Button appearance="outlined" colorScheme="inverse" onClick={() =>
        showRightPanel({
          title: 'Create new topic',
          subtitle: 'Creates a new Kafka topic',
          path: root.modal.$link(),
        })
      }>
        New topic
      </Button>
    </Flex>
    <ul className="card-list">
      {topics.map((p) => (
        <li key={p.id}>
          <TopicCard
            name={p.name}
            environment={p.environment}
            partitions={p.partitions}
            replicationFactor={p.replicationFactor}
            href={root.topic.$link({ id: p.id })}
          />
        </li>
      ))}
    </ul>
  </Styled>
)
