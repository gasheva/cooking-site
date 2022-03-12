/**
 * Time filter
 * @param{Number|Date} value time in minutes or Date
 * @param{String} format can be 'minutes' or 'date'
 * @return{string} time in format 'x h y mins' or date format
 * */
export default function (value, format = 'minutes') {
    if (!value) return '';
    const options = {};
    if (format.includes('date')) {
        options.day   = '2-digit';
        options.month = '2-digit';
        options.year  = 'numeric';
        return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value));
    }
    if (typeof (value) !== 'number' || value < 0) return '';
    let hours        = Math.floor(value / 60);
    let hoursDisplay = hours > 0 ? `${hours} h ` : '';
    let mins         = value - hours * 60;
    let minsDisplay  = mins > 0 ? `${mins} mins` : '';
    return hoursDisplay + minsDisplay;
}