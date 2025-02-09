import { Button, Flex, Text } from "@citric/core"
import { TopicCard } from "components/TopicCard"
import { ViewPropsOf } from "navigation"
import { styled } from "styled-components"
import topics from "../mock/products.json"

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

export const Home = ({ route }: ViewPropsOf<"root">) => (
  <Styled>
    <Text appearance="h2" colorScheme="primary">
      KaaS Platform
    </Text>
    <Text appearance="subtitle1">Kafka as a Service Platform</Text>
    <Flex alignItems="center" justifyContent="space-between">
      <Text appearance="h3">Your topics</Text>
      <Button appearance="outlined" colorScheme="inverse">
        New topic
      </Button>
    </Flex>
    <ul className="card-list">
      {topics.map((p) => (
        <li key={p.id}>
          <TopicCard
            name={p.name}
            environment={p.environment}
            onClick={() => console.log(p.name)}
            partitions={p.partitions}
            replcationFactor={p.replicationFactor}
          />
        </li>
      ))}
    </ul>
    <Flex justifyContent="space-between" alignItems="center">
      <Text appearance="h3">EchoBridge</Text>
      <Button appearance="outlined" colorScheme="inverse">
        New component
      </Button>
    </Flex>
    {/* <ul className="card-list">
      {reuse.map((r) => (
        <li key={r.id}>
          <ReuseCard
            description={r.description}
            name={r.name}
            requires={r.requires}
            href={route.component.$link({ id: r.id })}
          />
        </li>
      ))}
    </ul> */}
    {/* <Text appearance="h3">Exemplos de interações com overlays</Text>
    <Flex>
      <Button
        colorScheme="inverse"
        onClick={() =>
          showModal({
            title: "Minha modal",
            subtitle: "Este é um exemplo de modal",
            path: root.modal.$link(),
          })
        }
      >
        Abrir uma modal
      </Button>
      <Button
        colorScheme="inverse"
        onClick={() =>
          showRightPanel({
            title: "Meu painel",
            subtitle: "Este é um exemplo de painel",
            path: root.modal.$link(),
          })
        }
      >
        Abrir o painel lateral
      </Button>
      <Button
        colorScheme="inverse"
        onClick={() =>
          showToaster({
            message: "Hello World",
            type: "success",
          })
        }
      >
        Abrir um toaster
      </Button>
      <Button
        colorScheme="inverse"
        onClick={() =>
          alert({
            title: "Alerta",
            subtitle: "Isso é um alerta!",
          })
        }
      >
        Abrir um alerta
      </Button>
      <Button
        colorScheme="inverse"
        onClick={async () => {
          const answer = await confirm({
            title: "Confirm",
            subtitle: "Isso é uma confirmação",
          });
          // eslint-disable-next-line no-console
          console.log(answer ? "confirmado" : "cancelado");
        }}
      >
        Abrir uma confirmação
      </Button>
    </Flex> */}
    {/* <Text appearance="h3">Exemplo de chamada de rede: listagem de studios</Text> */}
    {/* The following component will render an error if the extension is not loaded from inside the real EDP Portal.
    To run the extension inside the EDP Portal, use `pnpm preview` in a terminal window. */}
    {/* <StudiosList /> */}
  </Styled>
)
