import React from "react";
import MemeModel from "../models/MemeModel";
import MemeCard from "./MemeCard";

interface Props {
  memes: MemeModel[];
}

const MemeList: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.memes.map((meme: MemeModel) => (
        <MemeCard meme={meme} />
      ))}
    </div>
  );
};

export default MemeList;
