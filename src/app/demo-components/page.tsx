"use client";
import ButtonCommon from "@/components/common/button";
import ButtonUpload from "@/components/common/button/ButtonUpload";
import CircularCustom from "@/components/common/circular-process/CircularCustom";
import Loading from "@/components/common/circular-process/Loading";
import Collapses, { listDataCollapseTest } from "@/components/common/collapse";
import CheckBox from "@/components/common/form/CheckBox";
import GroupRadioCustom, { listDefault } from "@/components/common/form/GroupRadio";
import EntitySelecter from "@/components/common/form/Select";
import { TextField } from "@/components/common/form/TextField";
import Text from "@/components/common/text";
import LoadingPageService from "@/helpers/LoadingPageService";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { FastField, Formik } from "formik";
import Image from "next/image";
import dog from "@/assets/images/dog.png";
import DataPicker from "@/components/common/form/DatePickerCustom";
import { labelInput, placeholderInput } from "@/constants/common";
import PopupService from "@/helpers/PopupService";

const useStyles = makeStyles(() => {
  const theme = useTheme();

  return {
    test: {
      color: theme.palette.success.light,
    },
    componentItem: {
      margin: "16px 0",
    },
    title: {
      margin: "0 0 16px 0",
    },
    subTitle: {
      margin: "0 0 16px 0",
    },
  };
});

const DemoComponents = () => {
  const classes = useStyles();

  const onLoading = () => {
    LoadingPageService?.instance?.current?.open();
    setTimeout(() => {
      LoadingPageService?.instance?.current?.close();
    }, 3000);
  };

  const onOpenPopup = () => {
    PopupService?.instance?.current.open({
      visible: true,
      content: <>test</>,
      onHidePopup: () => {
        PopupService?.instance?.current?.close();
      },
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", padding: "100px 50px 0 50px" }}>
      <Formik initialValues={{ name: "quang", gender: "", checkbox: "", select: "1", date: "" }} onSubmit={() => {}}>
        {(props) => {
          console.log(props.values);

          return (
            <div className="">
              <div className={classes.componentItem}>
                <h1>Text</h1>
                <Text.TextTitle styleProps={{ color: "red" }}>text title</Text.TextTitle>
                <Text.TextDesc styleProps={{ color: "green" }}>text desc</Text.TextDesc>
                <Text.TextSpan>
                  <span className="">text </span>
                  <strong>
                    nhiều màu và style khác nhau <mark>trên cùng 1 dòng</mark>
                  </strong>
                </Text.TextSpan>
              </div>
              <div className={classes.componentItem}>
                <h1>Button</h1>
                <ButtonCommon variant="text" styleAdd={{ display: "block", marginTop: "16px" }}>
                  button text
                </ButtonCommon>
                <ButtonCommon styleAdd={{ display: "block", marginTop: "16px", color: "#fff" }}>button full bg</ButtonCommon>
                <ButtonCommon variant="outlined" styleAdd={{ display: "block", marginTop: "16px" }}>
                  button outline
                </ButtonCommon>
                <ButtonCommon styleAdd={{ marginTop: "16px", color: "#fff" }} icon={<KeyboardArrowDownRoundedIcon />}>
                  button icon right
                </ButtonCommon>
                <div className="">
                  <ButtonCommon
                    styleAdd={{ marginTop: "16px", color: "#fff" }}
                    icon={<KeyboardArrowDownRoundedIcon />}
                    positionIcon={"start"}
                  >
                    button icon left
                  </ButtonCommon>
                </div>
                <div className="" style={{ margin: "16px 0" }}>
                  <ButtonUpload title="upload" name={"upload"} onTakingFile={(e) => {}} />
                </div>
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Input</h1>
                <h3 className={classes.subTitle}>input thường</h3>
                <FastField
                  component={TextField}
                  placeholder={placeholderInput.name}
                  label={labelInput.name}
                  {...props.getFieldProps("name")}
                  required
                />
                <h3 className={classes.subTitle}>input có icon bên phải</h3>
                <FastField
                  component={TextField}
                  placeholder={placeholderInput.name}
                  label={labelInput.name}
                  {...props.getFieldProps("name")}
                  icon={<KeyboardArrowDownRoundedIcon />}
                  required
                />
                <h3 className={classes.subTitle}>input có icon bên trái</h3>
                <FastField
                  component={TextField}
                  placeholder={placeholderInput.name}
                  label={labelInput.name}
                  {...props.getFieldProps("name")}
                  icon={<KeyboardArrowDownRoundedIcon />}
                  positionIcon={"start"}
                  required
                />
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Date picker</h1>

                <FastField component={DataPicker} {...props.getFieldProps("date")} />
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Group radio</h1>
                <GroupRadioCustom name="gender" list={listDefault} />
              </div>
              <div className={classes.componentItem}>
                <h3 className={classes.subTitle}>Group radio đảo chiều</h3>
                <GroupRadioCustom name="gender" list={listDefault} labelPlacement={"end"} />
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Checkbox</h1>
                <h3 className={classes.subTitle}>check thường</h3>
                <FastField component={CheckBox} {...props.getFieldProps("checkbox")} />
                <h3 className={classes.subTitle}>Checkbox thay icon</h3>
                <FastField
                  component={CheckBox}
                  {...props.getFieldProps("checkbox")}
                  icon={<FavoriteBorderIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Select input</h1>
                <FastField
                  component={EntitySelecter}
                  {...props.getFieldProps("select")}
                  options={dataSelect}
                  renderLabel={(field: any) => field.label} //! để hiển thị ra option item
                  endAdornment={<KeyboardArrowDownRoundedIcon />}
                />
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Loading</h1>
                <h3 className={classes.subTitle} onClick={() => onLoading()} style={{ cursor: "pointer" }}>
                  open loading
                </h3>
                <Loading />
                <div className="" style={{ width: "160px" }}>
                  <h3 className={classes.subTitle}>ko animation</h3>
                  <CircularCustom percentage={50} />
                  <h3 className={classes.subTitle}>thay đổi size path</h3>
                  <CircularCustom percentage={50} strokeWidth={5} />
                  <h3 className={classes.subTitle}>có animation</h3>
                  <CircularCustom animation={true} percentage={90} />
                  <h3 className={classes.subTitle}>thay màu text,path,font size</h3>
                  <CircularCustom
                    animation={true}
                    percentage={90}
                    textColor={"red"}
                    pathColor={"yellow"}
                    trailColor={"green"}
                    textSize={"14px"}
                  />
                  <h3 className={classes.subTitle}>custom inside</h3>
                  <CircularCustom
                    animation={true}
                    percentage={88}
                    type={"custom-inside"}
                    childrenCustom={
                      <>
                        <Image src={dog} alt="dog" width={50} height={50} />
                        <div className="" style={{ textAlign: "center" }}>
                          88%
                        </div>
                      </>
                    }
                  />
                </div>
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>Collapses</h1>
                <div className="" style={{ width: "500px" }}>
                  <Collapses listData={listDataCollapseTest} openDefault={1} />
                </div>
              </div>
              <div className={classes.componentItem}>
                <h1 className={classes.title}>popup</h1>
                <h3 onClick={onOpenPopup}>open popup</h3>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default DemoComponents;

const dataSelect = [
  { id: 1, label: "option 1" },
  { id: 2, label: "option 2" },
  { id: 3, label: "option 3" },
];
