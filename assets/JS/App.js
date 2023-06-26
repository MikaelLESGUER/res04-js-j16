import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { Footer } from "./components/footer.js"; 

let App = {
    data () {
        return {

        }
    },
    components : {
            Header,
            Main,
            Footer
        },
    template :`
        <Header/>
        <Main/>
        <Footer/>
        `
};

export { App };