import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface IProps {
  listData: { id: number; title: string | React.ReactNode; detail: string | React.ReactNode; icon?: React.ReactNode }[];
  openDefault?: number;
}

const useStyles = makeStyles(() => {
  return {
    containerHeaderItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      padding: "10px",
    },
    detailItem: {
      maxHeight: "0",
      overflow: "hidden",
      transition: ".5s ease",
    },
    textHeaderItem: {
      fontWeight: "bold",
    },
    showDetailItem: {
      maxHeight: "500px",
      transition: ".5s ease",
    },
    showIdIcon: {
      transform: "rotate(180deg)",
      transition: ".5s ease",
    },
    hideIdIcon: {
      transform: "rotate(0deg)",
      transition: ".5s ease",
    },
  };
});

const Collapses = (props: IProps) => {
  const { listData, openDefault } = props;
  const [idOpen, setIdOpen] = useState<number | null>(openDefault ?? null);

  const classes = useStyles();

  const onHanldeSetIdOpoen = (id: number) => {
    if (id === idOpen) {
      setIdOpen(null);
    } else {
      setIdOpen(id);
    }
  };

  return (
    <div>
      {listData.map((item) => {
        return (
          <div key={item.id} className="">
            <div className={classes.containerHeaderItem} onClick={() => onHanldeSetIdOpoen(item.id)}>
              <div className={classes.textHeaderItem}>{item.title}</div>
              <span className={`${item.id === idOpen ? classes.showIdIcon : classes.hideIdIcon}`}>
                <KeyboardArrowDownRoundedIcon />
              </span>
            </div>
            <div className={`${classes.detailItem} ${item.id === idOpen && classes.showDetailItem}`}>{item.detail}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Collapses;

export const listDataCollapseTest = [
  {
    id: 1,
    title: "day la collapse 1",
    detail: "detail 1 fsdflsdnlfnlsdnflsdnflnsdlfnlsdnflsdnflnsdlfnlsdnflnsdlfnlsdnflsdnflnsdlfnlsdnf sfdflsdnflnsdlfnsldnflsdnf",
  },
  {
    id: 2,
    title: "day la collapse 2",
    detail: "detail 2 fsdnflsdnflnsdlfnsdlfnlsdnflsdnflnsdlfnlsdnflsdnflnsdlnflsdnflsdnflnsldnflsdnflnsdlfnlsdnflsdnflnsdflnsdlfn",
  },
];
