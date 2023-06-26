let Nav = {  
    props: {
        props : ["links"],
    },
    template: `  
    <nav>
        <ul>
        <li v-for="link in links" :key="link.id">{{ link.text }}</li>
        </ul>
    </nav>
	`};  
  
export { Nav };

// let Nav = {  
//     data() {  
//         return {  
//         }  
//     },  
//     template: `  
//     <nav>
//         <ul>
//             <li>Accueil</li>
//             <li>À propos</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// 	`};  
  
// export { Nav };