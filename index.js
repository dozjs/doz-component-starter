import Doz from 'doz'
import cmp from './lib'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        Doz.component('your-component-tag', cmp)
    }
}

register();

export default cmp

if (module.hot) {
    module.hot.dispose(function () {
        console.log('Accepting the updated module!');
        register();
    })
}