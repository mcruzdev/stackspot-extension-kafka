import { ReactElement, useState } from 'react'
import { useNavigationContext } from '../generated/navigation'
import { Home } from './Home'
import { CreateNewTopicPanel } from './ModalContent'
import { ReusableComponent } from './ReusableComponent'
import { Topic } from './Topic'

export function useContent() {
  const [content, setContent] = useState<ReactElement>(<></>)
  useNavigationContext((context) => {
    context
      .when('root', (props) => setContent(<Home {...props} />))
      .when('root.component', (props) => setContent(<ReusableComponent {...props} />))
      .when('root.modal', (props) => setContent(<CreateNewTopicPanel {...props} />))
      .when('root.topic', (props) => setContent(<Topic {...props} />))
      .whenNotFound(() => setContent(<h1>404: Not Found</h1>))
  })

  return content
}
