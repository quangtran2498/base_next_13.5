import moment from "moment";

export const convertDatemMoment = {
  format: (date: string, patternDate?: string, patternConvert?: string) =>
    moment(date, patternDate ?? "DD-MM-YYYY").format(patternConvert ?? "YYYY-MM-DD"),
};
