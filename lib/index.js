import style from './style.css'

export default {
    module,
    props: {
        name: 'DOZ'
    },

    template() {
        return `
            <div class="${style.myComponent}">
                hello ${this.props.name}
            </div>
        `
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