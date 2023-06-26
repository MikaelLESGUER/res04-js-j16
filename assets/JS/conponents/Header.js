import { Nav } from "./nav.js";

let Header = {
    data() {  
        return { 
          navLinks: [
            { id: 1, text: 'Accueil' },
            { id: 2, text: 'À propos' },
            { id: 3, text: 'Contact' }
          ]
        }  
    },  
      
  components: {
    Nav
   },
    template: `  
    <header>
      <Nav :links="navLinks" /></Nav>
    </header>
	`};  
  
export { Header };

// let Header = {
//     components: {
//       Nav
//     },
//     data() {
//       return {
//         // Données du Header
//       };
//     },
//     template: `
//       <header>
//         <Nav />
//       </header>
//     `
//   };

//   export { Header };