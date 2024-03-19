import React from "react";
import Window from "../Window/Window";
import "./windowContainer.scss";

function WindowContainer() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <Window className="window1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            voluptatibus a sunt ducimus veniam, mollitia provident atque
            doloribus totam modi omnis. Eligendi consectetur sint expedita in
            iure, error sit quibusdam?
          </Window>
          <Window className="window2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            voluptatibus a sunt ducimus veniam, mollitia provident atque
            doloribus totam modi omnis. Eligendi consectetur sint expedita in
            iure, error sit quibusdam?
          </Window>
        </div>
        <Window className="window3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          voluptatibus a sunt ducimus veniam, mollitia provident atque doloribus
          totam modi omnis. Eligendi consectetur sint expedita in iure, error
          sit quibusdam?
        </Window>
      </div>
    </>
  );
}

export default WindowContainer;
