// import { mount as mountAuth } from "../apps/auth/dist/auth.js";
// import { mount as mountHome } from "../apps/home/dist/Home.js";
// import { mount as mountSetting } from "../apps/setting/dist/Setting.js";
// import { mount as mountTree } from "../apps/tree/dist/Tree.js";
// import { useAuth } from './composables/useAuth.js'; 


// export function mountMicroFrontends() {
//   const { isAuthenticated } = useAuth();
//   const authContainer = document.getElementById('auth');

//   if (!isAuthenticated.value) {
  
//     if (!authContainer) {
//       const newAuthContainer = document.createElement('div');
//       newAuthContainer.id = 'auth';
//       document.body.appendChild(newAuthContainer);
//       mountAuth(newAuthContainer);
//     } else {
//       mountAuth(authContainer)
//     }

//     removeMicrofrontend('home');
//     removeMicrofrontend('setting');
//     removeMicrofrontend('tree');

//   } else {
 
//     mountHome(document.querySelector('#home'));
//     mountSetting(document.querySelector('#setting'));
//     mountTree(document.querySelector('#tree'));

//     if (authContainer) {
//         document.body.removeChild(authContainer);
//     }
//   }
// }

// function removeMicrofrontend(id){
//     const element = document.getElementById(id);
//     if (element){
//         element.remove();
//     }
// }