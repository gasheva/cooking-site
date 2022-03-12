/**
 * Format ingredient string
 * @param{Array} value the array of ingredients
 * */
export default function (value) {
    try {
        return `${value.amount} ${value.measure} ${value.name}`;
    } catch (e) {
        return '';
    }
}