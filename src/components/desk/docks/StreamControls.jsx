import obs from "../../../web-socket/obs";
import Dock from "../Dock";
import { useObs } from "components/obs/ObsProvider";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function StreamControls() {
  const { isConnected } = useObs();

  const handlers = {
    startStream: () => {
      obs.call("StartStream");
    },
    stopStream: () => {
      obs.call("StopStream");
    },
    startRecord: () => {
      obs.call("StartRecord");
    },
    stopRecord: () => {
      obs.call("StopRecord");
    },
  };

  return (
    <Dock header="Stream Controls">
      {isConnected && (
        <ListGroup>
          <ListGroupItem
            action
            active={false}
            tag="button"
            className="p-2"
            onClick={handlers.startStream}
          >
            Start Stream
          </ListGroupItem>
          <ListGroupItem
            action
            active={false}
            tag="button"
            className="p-2"
            onClick={handlers.stopStream}
          >
            Stop Stream
          </ListGroupItem>
          <ListGroupItem
            action
            active={false}
            tag="button"
            className="p-2"
            onClick={handlers.startRecord}
          >
            Start Record
          </ListGroupItem>
          <ListGroupItem
            action
            active={false}
            tag="button"
            className="p-2"
            onClick={handlers.stopRecord}
          >
            Stop Record
          </ListGroupItem>
        </ListGroup>
      )}
    </Dock>
  );
}
