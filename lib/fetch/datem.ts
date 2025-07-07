import { format, parseISO } from "date-fns";


export function getDateOrTime(time:string) {
    return format(parseISO(time), "MMMM dd yyyy");
}