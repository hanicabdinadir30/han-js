const items=[{n:"Lipliner",p:10,i:"https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=200"},
{n:"Foundation",p:12,i:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200"},
{n:"Perfume",p:65,i:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=200"}];

let picked=null,cart=[];
const $=id=>document.getElementById(id);

$("products").innerHTML=items.map((x,idx)=>`
<div class="item" data-i="${idx}">
<img src="${x.i}"><br>${x.n}<br>$${x.p}</div>`).join("");

document.querySelectorAll(".item").forEach(el=>el.onclick=()=>{
picked=items[el.dataset.i];
document.querySelectorAll(".item").forEach(a=>a.classList.remove("active"));
el.classList.add("active");
});

function update(){
$("cart").innerHTML=cart.length?cart.map(x=>`<div>${x.n} - $${x.p}</div>`).join(""):"Cart is empty";
$("total").textContent=cart.reduce((s,x)=>s+x.p,0);
}

$("addBtn").onclick=()=>{
if(!picked||+$("age").value<18||!$("name").value.trim()) return alert("Select product, enter name, and age 18+");
cart.push(picked); update();
};

$("buyBtn").onclick=()=>{
if(!cart.length) return alert("Cart is empty!");
alert("Success! Order placed."); cart=[]; update();
};