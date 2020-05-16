import {define, createExtWebComponent} from 'doz'
import cmp from './src'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define('your-component-tag', cmp);
        createExtWebComponent('your-component-tag', cmp, [/*attributes you want observe*/]);
    }
}

register();

export default cmp

if (module.hot) {
    module.hot.dispose(function () {
        register();
    })
}
