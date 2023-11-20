import React from "react";

interface IProps {
  from?: number;
  to?: number;
}

const HanldeAnimationCircular = (props: IProps) => {
  const { from = 0, to } = props;

  const [currentCount, setCount] = React.useState<number>(from);

  const timer = () => setCount((currentCount) => currentCount + 2);

  React.useEffect(() => {
    const handle = setInterval(timer, 100);
    if (currentCount === to) {
      clearInterval(handle);
      return;
    }
    return () => clearInterval(handle);
  }, [currentCount]);

  return { currentCount };
};
export default HanldeAnimationCircular;
