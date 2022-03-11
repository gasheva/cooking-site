export default {
    install(Vue) {
        /**
         * simple logger
         * @param{string} level can be ['error', 'info', 'warn']
         * */
        Vue.prototype.$log = function (message, level = 'info') {
            if (process.env.NODE_ENV !== 'production') {
                const levels = new Set(['error', 'info', 'warn']);
                if (!levels.has(level)) return;
                switch (level) {
                    case 'error':
                        console.error(message);
                        break;
                    case 'info':
                        console.log(message);
                        break;
                    case 'warn':
                        console.log(message);
                        break;
                }
            }
        };
    },
};