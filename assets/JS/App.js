// import { Article } from "./conponents/article.js";  
  
// let App = {  
//     data () {  
//         return {  
//             articles : [  
//                 {},  
//                 {},  
//                 {}  
//             ]  
//         }  
//     },  
//     components : {  
//       Article  
//     },  
//     template: `  
//     <h1>Articles</h1>    
//     <Article v-for="article in articles" />
//     `  
// };  
  
// export { App };

import { Header } from "./conponents/header.js";
import { Main } from "./conponents/main.js";
import { Footer } from "./conponents/footer.js";
  
let App = {  
    data () {
      return{
        navLinks: [
          { id: 1, text: 'Accueil' },
          { id: 2, text: 'À propos' },
          { id: 3, text: 'Contact' }
        ]
      }
    },  
    components : {  
      Header,
      Main,
      Footer
    },
    template : `
    <Header/>
    <Main/>
    <Footer/>
    `
};  
  
export { App };

// import Header from './components/Header.js';
// import Main from './components/Main.js';
// import Footer from './components/Footer.js';

// export default {
//   components: {
//     Header,
//     Main,
//     Footer
//   },
  // Autres configurations de l'application
// }