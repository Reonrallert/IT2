window.onlead= oppstart;

function oppstart(){
    document.getElementById="knapp".onclick = neste;
}
var current= 0;
//viser hvilken av resturangene som skal vises fra listen.
var resturang = [
//legger inn navn og info om resturangene
// kan bruke 'resturang ["0,""1","2","3"] så img ["0","1","2","3"]
//lager alle listene i en liste,
 { //resturang 1
     name: "Lett og mett",
     img: '<img src=https://img.foodyas.com/1/v/t1.0-0/p180x540/28577074_2379947052030839_1111642595711697064_n.jpg?_nc_cat=108&oh=b97e5eaf1894cbe4889458d8ecfc2ffc&oe=5C618F81>', 
     adr:"Storgata 139, 3915 Porsgrunn",
     tlf:"35 55 55 55",
     score: [] 
 },
 { //resturang 2
    name:"Dominos pizza",
    img:"'<src=https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_480_319_l_f/0000/teav/2015/1/29/16/20150130-165330-0_1.jpg?chk=B52B5A",
    adr:"Storgata 106, 3921 Porsgrunn",
    tlf:"03 330",
    score: [] 
},
{ //resturang 3
    name:"Resturang 3",
    img:"'<img src=https://media-cdn.tripadvisor.com/media/photo-s/07/1c/76/48/inside-the-restaurant.jpg",
    adr:"storgata 104, 3921 Porgrunn",
    tlf:"55 99 22 44",
    score: []
} ,
{ //resturang 4
    name:"resturang 4",
    img:"'img src=https://cdn10.phillymag.com/wp-content/uploads/sites/3/2017/11/the-love-credit-alex-jones-interior2-900x600.jpg",
    adr:"storgata 1025, 3921 Porsgrunn",
    tlf:"89 44 77 23",
    score: [] 
} 
] 
function neste(){

    console.log("funksjonen fungerer");
    
}
