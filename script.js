let main=document.getElementById("container");
let arr=["https://th.bing.com/th/id/OIP.-H_w3fKHSyDYw8N7EGgaNQHaHm?w=180&h=185&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.78KH0tKu9u_f4Cp4k27ErwHaGt?w=205&h=185&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.sJMB3BnaiNopRVK52mz62wAAAA?w=155&h=185&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.laUEvjE83cz0gdIhZP6bIwHaIE?w=227&h=181&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.xwFaFQV7blIn8IIto6xAggHaF-?cb=iwc1&rs=1&pid=ImgDetMain",
"https://th.bing.com/th/id/OIP.6JJmFImQdrodPKplZs3C4gHaHa?w=199&h=199&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7"
];
let f="";
for(let i=1;i<=65;i++){
    let r=Math.floor(Math.random()*arr.length);

   f+=`<div class="card">
 <img src=${arr[r]}>
</div>`;
}





main.innerHTML=f;