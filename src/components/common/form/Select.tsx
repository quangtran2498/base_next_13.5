import { colors } from "@/colors";
import { Autocomplete, Box, TextField, Typography, createFilterOptions } from "@mui/material";
import { withStyles } from "@mui/styles";
import { FastFieldProps } from "formik";
import React, { CSSProperties } from "react";
import FormLabel from "./FormLabel";

interface IEntitySelect extends FastFieldProps {
  options: any[]; //! list data
  renderLabel: (option: any[]) => string;
  open?: boolean;
  renderValue?: string;
  noOptionsText?: string;
  placeholder?: string;
  disabled?: boolean;
  disableClearable?: boolean;
  sublabel?: (option: any[]) => string;
  forcePopupIcon?: boolean;
  getOptionDisabled?: (option: number) => boolean;
  loading?: boolean;
  disablePortal?: boolean;
  onChangeSelect?: (id: string | null, event?: React.SyntheticEvent<Element, Event>) => Promise<void> | void;
  endAdornment?: any;
  label?: string;
  required?: boolean;
  styleInput?: CSSProperties;
  styleFieldset?: CSSProperties;
  styleInputRoot?: CSSProperties;
  SelectOption?: any;
  styleLabel?: CSSProperties;
  iconInput?: React.ReactNode;
}

export interface Label {
  id?: any;
  name: string;
  caption: string | null;
}

const CssTextField = withStyles((_theme) => {
  return {
    root: () => ({
      "& .MuiOutlinedInput-root": {
        borderRadius: "4px",
        textOverflow: "ellipsis",
        margin: "0",
        padding: "0 !important",
        "& input": {
          borderRadius: "4px",
          minHeight: "0",
        },
        "& select": {
          background: colors.input.background.main,
          borderRadius: "4px",
          border: `1px solid ${colors.input.border.main}`,
          textOverflow: "ellipsis",
          padding: "0 19px",
        },
        "& textarea": {
          background: colors.input.background.main,
          borderRadius: "4px",
          textOverflow: "ellipsis",
          border: `1px solid ${colors.input.border.main}`,
          "&::placeholder": {
            color: "red",
          },
        },
        "& .Mui-disabled": {
          textOverflow: "ellipsis",
          background: colors.input.background.disable,
        },
        "& .MuiInputBase-inputAdornedEnd": {
          border: "none",
          textOverflow: "ellipsis",
          background: "none",
        },

        "& fieldset": {
          borderRadius: "4px",
        },
      },
    }),
  };
})(TextField);

const EntitySelecter = (props: IEntitySelect) => {
  const {
    options,
    label,
    required,
    endAdornment,
    onChangeSelect,
    disablePortal = true,
    renderValue,
    loading,
    sublabel,
    forcePopupIcon,
    getOptionDisabled,
    renderLabel,
    noOptionsText,
    disableClearable = true,
    disabled,
    form,
    field,
    placeholder,
    open,
    SelectOption,
    styleLabel,
    iconInput,
  } = props;
  const { name, value } = field;

  const { errors, touched } = form;
  const labels =
    options?.reduce((acc: Record<number, Label>, option) => {
      const id = renderValue ? option[renderValue] : option?.id;
      const caption = sublabel ? sublabel(option) : null;
      acc[id] = { id, name: renderLabel(option), caption };
      return acc;
    }, {}) || {};
  return (
    <>
      <Autocomplete
        id={name}
        open={open}
        disabled={disabled}
        forcePopupIcon={forcePopupIcon}
        options={
          options?.map((option) => {
            return renderValue ? option[renderValue] : option?.id;
          }) || []
        }
        getOptionLabel={(option) => {
          return labels[option as number]?.name ?? "";
        }}
        noOptionsText={noOptionsText ?? "Không có kết quả"}
        getOptionDisabled={getOptionDisabled}
        multiple={false}
        loading={loading}
        fullWidth
        autoComplete={false}
        disablePortal={disablePortal}
        loadingText={"Đang tải..."}
        disableClearable={disableClearable}
        popupIcon={endAdornment}
        filterOptions={createFilterOptions({ trim: true })}
        blurOnSelect
        renderInput={(params) => {
          return (
            <>
              {label && <FormLabel required={required} name={name} title={label} styleLabel={styleLabel}></FormLabel>}
              <CssTextField
                {...params}
                error={touched[name] && Boolean(errors[name])}
                helperText={touched[name] && errors[name] && <span style={{ margin: "0px 0px 8px" }}>{`${errors[name]}`}</span>}
                placeholder={placeholder}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: iconInput ? iconInput : params.InputProps.endAdornment,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "44px",
                    padding: "0",
                    ...props.styleInputRoot,
                    "& input": {
                      ...props.styleInput,
                      paddingLeft: "16px !important",
                    },
                    // "& .MuiSvgIcon-root": {
                    //   marginRight: "16px",
                    // },
                    "& .MuiAutocomplete-endAdornment": {
                      marginRight: "6px",
                      "& button": {
                        background: "none",
                        transition: "all 0.5s !important",
                      },
                    },
                    "& fieldset": {
                      borderColor: "#E0E0E0",
                      ...props.styleFieldset,
                    },
                  },
                }}
              />
            </>
          );
        }}
        renderOption={(props, option: number | string | any) => {
          const { name, caption } = labels[option];
          return (
            <>
              {SelectOption ? (
                <SelectOption props={props} option={option} name={name} caption={caption} />
              ) : (
                <Box component="li" {...props} key={option}>
                  <Box>
                    {name || ""}
                    {caption && (
                      <Typography variant="caption" display="block">
                        {caption}
                      </Typography>
                    )}
                  </Box>
                </Box>
              )}
            </>
          );
        }}
        onChange={(_event, value: any) => {
          if (onChangeSelect) {
            field.onChange(name)(`${value}`);
            onChangeSelect(value);
          } else {
            field.onChange(name)(`${value}`);
          }
        }}
        value={value}
        sx={{
          "& + .MuiAutocomplete-popper": {
            zIndex: 9999,
            "& .MuiPaper-root": {
              borderRadius: "10px",
            },
            "& .MuiAutocomplete-listbox": {
              padding: "0",
            },
          },
        }}
      />
    </>
  );
};

export default EntitySelecter;
