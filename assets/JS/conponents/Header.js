import { Nav } from "./nav.js";

let Header = {  
  components: {
          Nav
         },
    data() {  
        return { 
        }  
    },  
    template: `  
    <header>
    <Nav :links="navLinks" />
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