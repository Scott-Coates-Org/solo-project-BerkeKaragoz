import { useDispatch } from "react-redux";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Progress,
  Row,
} from "reactstrap";
import Layout from "../Layout";
import Dock from "./Dock";
import { obs } from "../../web-socket/obs";
import ConnectionSettings from "./docks/ConnectionSettings";
import { useObs } from "components/obs/ObsProvider";
import SceneList from "./docks/SceneList";

const FCol = (props) => <Col className="d-flex" {...props} />;

export default function Desk(props) {
  const dispatch = useDispatch();
  const { isLoading, isConnected, connInfo } = useObs();

  return (
    <Layout {...props}>
      <Card className="rounded-0">
        <CardBody className="p-0">
          <Container fluid className="p-0">
            <Row noGutters>
              <FCol>
                <SceneList />
              </FCol>
              <FCol>
                <ConnectionSettings />
              </FCol>
            </Row>
          </Container>
        </CardBody>
        <CardFooter className="p-1">
          {isLoading ? (
            <Progress value={100} animated />
          ) : (
            <Container
              fluid
              className="d-flex p-1 justify-content-between align-items-center"
            >
              {isConnected ? (
                <Badge color="success">Connected.</Badge>
              ) : (
                <Badge>Not connected.</Badge>
              )}
              {connInfo && (
                <span>
                  {Object.entries(connInfo).map(
                    (e, i, arr) =>
                      `${e[0]}: ${e[1]}${arr.length - 1 === i ? "" : ", "}`,
                  )}
                </span>
              )}
            </Container>
          )}
        </CardFooter>
      </Card>
    </Layout>
  );
}
