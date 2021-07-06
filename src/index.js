import {Component} from "doz";

export default class MyComponent extends Component{

    constructor(o) {
        super(o);

        this.props = {
            name: 'Doz'
        }
    }

    template(h) {
        
        //language=HTML
        return h`
            <style> 
                button {
                    font-size: 24px;
                    padding: 20px;
                }
            </style>
            
            <button 
                onclick="${this.clickMe}">
                hello ${this.props.name}
            </button>
        `
    }

    clickMe() {
        alert('Ciao!');
    }

    onCreate() {

    }

    onMount() {

    }

    onUpdate() {

    }

    onDestroy() {

    }

};
