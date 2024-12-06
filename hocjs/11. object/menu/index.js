const menus = [
  {
    id: 1,
    name: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Menu 4",
    parent: 0,
  },
  {
    id: 5,
    name: "Menu 2.1",
    parent: 2,
  },
  {
    id: 6,
    name: "Menu 2.2",
    parent: 2,
  },
  {
    id: 7,
    name: "Menu 2.3",
    parent: 2,
  },
  {
    id: 8,
    name: "Menu 2.2.1",
    parent: 6,
  },
  {
    id: 9,
    name: "Menu 2.2.2",
    parent: 6,
  },
  {
    id: 10,
    name: "Menu 2.2.3",
    parent: 6,
  },
];
const menusTree = function (menus, parent = 0) {
  const result = [];
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].parent === parent) {
      result.push(menus[i]);
      const sub = menusTree(menus, menus[i].id);
      if (sub.length) {
        menus[i].children = sub;
      }
    }
  }
  return result;
};

const renderMenu = function (menusTree, isSub = false) {
  output += isSub ? `<ul>\n` : `<ul class="menu">\n`;
  menusTree.forEach(function (menu) {
    output += `<li><a href="#">${menu.name}</a>`;
    //Submenu
    if (menu.children) {
      output += `\n`;
      renderMenu(menu.children, true);
    }
    output += "</li>\n";
  });
  output += `</ul>`;
};
const tree = menusTree(menus);
let output = "";
renderMenu(tree);
console.log(output);

// const html = `<ul class="menu">
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li>
//         <a href="#">Blog</a>
//         <ul>
//           <li>
//             <a href="#">Blog 1</a>
//             <ul>
//               <li><a href="#">Blog 1.1</a></li>
//               <li><a href="#">Blog 1.2</a></li>
//               <li><a href="#">Blog 1.3</a></li>
//             </ul>
//           </li>
//           <li>
//             <a href="#">Blog 2</a>
//             <ul>
//               <li><a href="#">Blog 2.1</a></li>
//               <li>
//                 <a href="#">Blog 2.2</a>
//                 <ul>
//                   <li><a href="#">Blog 2.2.1</a></li>
//                   <li><a href="#">Blog 2.2.2</a></li>
//                   <li><a href="#">Blog 2.2.3</a></li>
//                 </ul>
//               </li>
//               <li><a href="#">Blog 2.3</a></li>
//             </ul>
//           </li>
//           <li>
//             <a href="#">Blog 3</a>
//             <ul>
//               <li><a href="#">Blog 3.1</a></li>
//               <li><a href="#">Blog 3.2</a></li>
//               <li><a href="#">Blog 3.3</a></li>
//             </ul>
//           </li>
//           <li><a href="#">Blog 4</a></li>
//         </ul>
//       </li>
//       <li>
//         <a href="#">Portfolio</a>
//         <ul>
//           <li><a href="#">Portfolio 1</a></li>
//           <li><a href="#">Portfolio 2</a></li>
//           <li><a href="#">Portfolio 3</a></li>
//           <li><a href="#">Portfolio 4</a></li>
//         </ul>
//       </li>
//       <li><a href="#">Contact</a></li>
//     </ul>`;
document.body.innerHTML = output;
