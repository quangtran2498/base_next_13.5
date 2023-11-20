import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HanldeAnimationCircular from "./hanldeAnimation";

interface IProps {
  percentage: number;
  strokeWidth?: number;
  textColor?: string;
  trailColor?: string;
  pathColor?: string;
  textSize?: string;
  animation?: boolean;
  type?: "base" | "custom-inside";
  childrenCustom?: React.ReactNode;
}

const CircularCustom = (props: IProps) => {
  const { percentage, strokeWidth, textColor, trailColor, pathColor, textSize, animation, type = "base", childrenCustom } = props;

  const hanldePercentage = () => {
    if (animation) {
      const { currentCount } = HanldeAnimationCircular({ to: percentage });
      return currentCount;
    } else {
      return percentage;
    }
  };

  return (
    <div className="">
      {type === "base" ? (
        <>
          <CircularProgressbar
            value={hanldePercentage()}
            text={`${hanldePercentage()}%`}
            strokeWidth={strokeWidth ?? 10}
            styles={buildStyles({
              textColor: textColor,
              pathColor: pathColor,
              trailColor: trailColor,
              textSize: textSize,
              pathTransition: "stroke-dashoffset 0.5s ease 0s",
            })}
          />
        </>
      ) : (
        <>
          <CircularProgressbarWithChildren value={percentage}>
            <div className="">{childrenCustom}</div>
          </CircularProgressbarWithChildren>
        </>
      )}
    </div>
  );
};

export default CircularCustom;
