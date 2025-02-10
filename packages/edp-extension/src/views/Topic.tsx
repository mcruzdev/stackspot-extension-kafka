import { Text } from '@citric/core'
import { ViewPropsOf } from 'navigation'
import { styled } from 'styled-components'
import topics from '../mock/topics.json'

interface Props {
  topicName: string,
}
const Styled = styled.div`

  display: flex;
`

export const Topic = ({ params: { id }, route }: ViewPropsOf<'root.topic'>) => {

  const topic = topics.find(t => t.id === id)
  
  return (
    <Styled>
      < Text > {topic?.name}</Text>
    </Styled >

  )
}
