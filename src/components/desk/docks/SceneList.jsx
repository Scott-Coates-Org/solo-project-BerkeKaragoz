import obs from "../../../web-socket/obs";
import Dock from "../Dock";
import { useObs } from "components/obs/ObsProvider";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function SceneList() {
  const { isConnected, scenes, currentScene, setScenes, setCurrentScene } =
    useObs();

  React.useEffect(() => {
    if (!isConnected) return;

    obs.call("GetSceneList").then((res) => {
      console.log(res);
      setScenes(res.scenes);
      setCurrentScene(res.currentProgramSceneName);
    });
  }, [isConnected]);

  const onSceneChange = (sceneName) => {
    obs
      .call("SetCurrentProgramScene", { sceneName })
      .then(() => {
        setCurrentScene(sceneName);
      })
      .catch((err) => console.error("SetCurrentScene", err));
  };

  return (
    <Dock header="Scenes">
      {isConnected && scenes && (
        <ListGroup>
          {scenes.map((s) => (
            <ListGroupItem
              key={`${s.sceneIndex}-${s.sceneName}`}
              action
              active={currentScene === s.sceneName}
              tag="button"
              className="p-2"
              onClick={() => onSceneChange(s.sceneName)}
            >
              {s.sceneName}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Dock>
  );
}
