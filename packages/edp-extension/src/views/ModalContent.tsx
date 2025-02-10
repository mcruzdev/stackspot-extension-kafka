import { Button, Flex, Input, Label, Option, Select } from '@citric/core'
import { showToaster } from '@stack-spot/portal-extension'
import { useState } from 'react'
import { styled } from 'styled-components'
import clusters from '../mock/clusters.json'

const StyledInput = styled(Flex)`
  gap: 2px;
  width: 100%;
`

const Styled = styled(Flex)`
  gap: 20px;
`

export const CreateNewTopicPanel = () => {
  const [topicName, setTopicName] = useState<string>('')
  return (<Styled flexDirection="column" alignItems="start">
    <StyledInput>
      <Label>Name</Label>
      <Input type="text" onChange={v => setTopicName(v.target.value)} value={topicName} />
    </StyledInput>

    <StyledInput>
      <Label>Cluster</Label>
      <Select >
        {clusters.map(cluster => (
          <Option value={cluster.name} key={cluster.name}  >{cluster.name}</Option>
        ))}
      </Select>
    </StyledInput>
    <StyledInput>
      <Label>Environment</Label>
      <Select >
        {['development', 'stage', 'production'].map(option => (
          <Option value={option} key={option}  >{option}</Option>
        ))}
      </Select>
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

