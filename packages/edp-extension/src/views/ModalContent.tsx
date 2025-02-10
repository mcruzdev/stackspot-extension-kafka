import { Button, Flex, Input, Label } from '@citric/core'
import { showToaster } from '@stack-spot/portal-extension'
import { ViewPropsOf } from 'navigation'
import { useState } from 'react'
import { styled } from 'styled-components'

const StyledInput = styled(Flex)`
  gap: 2px;
  width: 100%;
`

const Styled = styled(Flex)`
  gap: 20px;
`

export const CreateNewTopicPanel = ({ route }: ViewPropsOf<'root.modal'>) => {
  const [topicName, setTopicName] = useState<string>('')
  return (<Styled flexDirection="column" alignItems="start">
    <StyledInput>
      <Label>Name</Label>
      <Input type="text" onChange={v => setTopicName(v.target.value)} value={topicName} />
    </StyledInput>

    <StyledInput>
      <Label>Cluster</Label>
      <Input type="search" />
    </StyledInput>

    <StyledInput>
      <Label>Partitions</Label>
      <Input type="number" max={3}></Input>
    </StyledInput>

    <StyledInput>
      <Label>Replication Factor</Label>
      <Input type="number"></Input>
    </StyledInput>

    <Flex flexDirection="row" >
      <Button appearance="contained" onClick={() => {
        showToaster({
          message: 'Your request was created successfully!',
          type: 'success',
        })
      }}>
        Create
      </Button>
    </Flex>
  </Styled>

  )
}

