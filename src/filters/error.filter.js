/**
 * @param{String} error_code - error code
 * @param{String} lang - language
 * */
import errors from '@/constants/errors';

export default function (error_code, lang = 'en') {
    const langs = new Set(['en', 'ru']);
    // english by default
    if (!lang || !langs.has(lang)) {
        lang = 'en';
    }
    // TODO (interpolation in progress)
    lang = 'en';
    if (!errors[error_code]) return errors.some_error[lang];
    return errors[error_code][lang];

}