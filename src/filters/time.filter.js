/**
 * Time filter
 * @param{Number} value time in minutes
 * @return{string} time in format 'x h y mins'
 * */
export default function (value) {
    if (value < 0) return '';
    let hours        = Math.floor(value / 60);
    let hoursDisplay = hours > 0 ? `${hours} h ` : '';
    let mins = value - hours * 60;
    let minsDisplay = mins > 0 ? `${mins} mins` : '';
    return hoursDisplay + minsDisplay;
}