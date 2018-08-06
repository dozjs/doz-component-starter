import style from './style.css'

export default {

    props: {
        name: 'DOZ'
    },

    template() {
        return `
            <button 
                onclick="this.$clickMe()"
                class="${style.myComponent}">
                hello ${this.props.name}
            </button>
        `
    },

    $clickMe() {
        alert('Ciao!');
    },

    onCreate() {

    },

    onMount() {

    },

    onUpdate() {

    },

    onDestroy() {

    }

};