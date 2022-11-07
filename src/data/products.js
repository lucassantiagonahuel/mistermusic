const products = [
    {
        id : 1,
        name :"Sonor Sq1",
        price : 950.000,
        stock:25,
        category:"Bateria",
        image: "https://i.ibb.co/YQH6tZY/sq1.jpg",
        description:"Bateria Sonor Sq1 3 Cuerpos Birch Hot Rod Red"
    },
    {
        id : 2,
        name :"Dw Collectors",
        price : 999.999,
        stock:7,
        category:"Bateria",
        image:"https://i.ibb.co/GpGCRbQ/dwbillard.webp",
        description:"Batería Dw Collectors Eeuu Color Billard Maple 7 Cascos"
    },
    {
        id : 3,
        name :"Mapex Black Panther ",
        price : 970.000,
        stock:25,
        category:"Bateria",
        image:"https://i.ibb.co/0GccMhH/mapexblack.webp",
        description:"Bateria Mapex Black Panther Desing Lab 4 Cuerpos Maple Birch"
    },
    {
        id : 4,
        name :"Gretsch Brooklyn Usa",
        price : 960.000,
        stock:20,
        category:"Bateria",
        image:"https://i.ibb.co/M1XLf97/gretschbrooklyn.webp",
        description:"Gretsch Brooklyn Usa Black Marine Pearl,4 Cuerpos Maple/Poplar 10x7/12x8/16x14/22x18 / Aros Vintage / Deep Black Marine Pearl - NO incluye Bass Drum Mount"
    },
    {
        id : 5,
        name :"Pearl Reference Pure",
        price : 980.000,
        stock:18,
        category:"Bateria",
        image:"https://i.ibb.co/Fn2Lnyd/pearlreference.webp",
        description:"Bateria Pearl Reference Pure, 3 Cuerpos B24x14 T13x9 Tf16x16"
    },
    {
        id : 6,
        name :"Ludwig Classic Maple",
        price : 990.000,
        stock:27,
        category:"Bateria",
        image:"https://i.ibb.co/RSZMyxL/ludwigmaple.webp",
        description:"Batería Ludwig Classic Maple Exotic 4 Cascos Made In Usa"
    },
    {
        id : 7,
        name :"Tama Starclassic Maple",
        price : 850.000,
        stock:1,
        category:"Bateria",
        image:"https://i.ibb.co/FDsxgS4/tamastar.webp",
        description:"Tama Starclassic Maple Ma32 3 Cascos Champagne Sparkle"
    },
    {
        id : 8,
        name :"Sjc Pathfinder",
        price : 450.000,
        stock:35,
        category:"Bateria",
        image:"https://i.ibb.co/Lp9mqXZ/sjcBateria.webp",
        description:"Batería Sjc Pathfinder 4 Piece Kit "
    },
    {
        id : 9,
        name :"Premier Xpk",
        price : 950.000,
        stock:25,
        category:"Bateria",
        image:"https://i.ibb.co/yRqk4QB/bateriapremier.webp",
        description:"Bateria Premier Xpk Stage 22 5 Cuerpos Maple"
    },
    {
        id : 10,
        name :"Pdp Concept Exotic",
        price : 950.000,
        stock:25,
        category:"Bateria",
        image:"https://i.ibb.co/RpBL0tY/bateriapdp.webp",
        description:"Bateria Pdp 5 Cpos Pdcmx2215wc Concept Exotic 22-10-12-16-14"
    },
    {
        id : 11,
        name :"Marshall",
        price : 750.000,
        stock:45,
        category:"Amplificadores",
        image:"https://i.ibb.co/48tgXpz/marshall.webp",
        description:"Amplificador marshall valvular"
    },
    {
        id : 12,
        name :"Saxo yamaha",
        price : 995.000,
        stock:5,
        category:"Vientos",
        image:"https://i.ibb.co/cDND54r/saxo.webp",
        description:"Saxo tenor yamaha"
    },
    {
        id : 13,
        name :"Guitarra gibson",
        price : 550.000,
        stock:18,
        category:"Guitarras",
        image:"https://i.ibb.co/zbhsQKT/gibson.webp",
        description:"Guitarra electrica gibson"
    },
    {
        id : 14,
        name :"Sintetizador nord",
        price : 750.000,
        stock:15,
        category:"Teclados",
        image:"https://i.ibb.co/7K8Gqrb/nord.webp",
        description:"Sintetizador nord electric"
    },
    {
        id : 15,
        name :"Marshall",
        price : 750.000,
        stock:45,
        category:"Amplificadores",
        image:"https://i.ibb.co/48tgXpz/marshall.webp",
        description:"Amplificador marshall valvular"
    },
    {
        id : 16,
        name :"Saxo yamaha",
        price : 995.000,
        stock:5,
        category:"Vientos",
        image:"https://i.ibb.co/cDND54r/saxo.webp",
        description:"Saxo tenor yamaha"
    },
    {
        id : 17,
        name :"Guitarra gibson",
        price : 550.000,
        stock:18,
        category:"Guitarras",
        image:"https://i.ibb.co/zbhsQKT/gibson.webp",
        description:"Guitarra electrica gibson"
    },
    {
        id : 18,
        name :"Sintetizador nord",
        price : 750.000,
        stock:15,
        category:"Teclados",
        image:"https://i.ibb.co/7K8Gqrb/nord.webp",
        description:"Sintetizador nord electric"
    },
    {
        id : 19,
        name :"Marshall",
        price : 750.000,
        stock:45,
        category:"Amplificadores",
        image:"https://i.ibb.co/48tgXpz/marshall.webp",
        description:"Amplificador marshall valvular"
    },
    {
        id : 20,
        name :"Saxo yamaha",
        price : 995.000,
        stock:5,
        category:"Vientos",
        image:"https://i.ibb.co/cDND54r/saxo.webp",
        description:"Saxo tenor yamaha"
    },
    {
        id : 21,
        name :"Guitarra gibson",
        price : 550.000,
        stock:18,
        category:"Guitarras",
        image:"https://i.ibb.co/zbhsQKT/gibson.webp",
        description:"Guitarra electrica gibson"
    },
    {
        id : 22,
        name :"Sintetizador nord",
        price : 750.000,
        stock:15,
        category:"Teclados",
        image:"https://i.ibb.co/7K8Gqrb/nord.webp",
        description:"Sintetizador nord electric"
    },
    {
        id : 23,
        name :"Marshall",
        price : 750.000,
        stock:45,
        category:"Amplificadores",
        image:"https://i.ibb.co/48tgXpz/marshall.webp",
        description:"Amplificador marshall valvular"
    },
    {
        id : 24,
        name :"Saxo yamaha",
        price : 995.000,
        stock:5,
        category:"Vientos",
        image:"https://i.ibb.co/cDND54r/saxo.webp",
        description:"Saxo tenor yamaha"
    },
    {
        id : 25,
        name :"Guitarra gibson",
        price : 550.000,
        stock:18,
        category:"Guitarras",
        image:"https://i.ibb.co/zbhsQKT/gibson.webp",
        description:"Guitarra electrica gibson"
    },
    {
        id : 26,
        name :"Sintetizador nord",
        price : 750.000,
        stock:15,
        category:"Teclados",
        image:"https://i.ibb.co/7K8Gqrb/nord.webp",
        description:"Sintetizador nord electric"
    },
]

export default function getProductsFromAPI(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    },500);
});
}

export function getSingleItemFromAPI(IdParams){
    return new Promise((resolve,reject) => { 
        setTimeout (()=>{
            let itemRequested = products.find((product) => product.id === Number(IdParams));
            if (itemRequested) {
                resolve(itemRequested);
            } else {
                reject(new Error("El producto no existe"))
            }
        },500)
    });
}

export function getItemsFromAPIByCategory(categoryid){
    return new Promise((resolve)=>{
        setTimeout(() => {
          let itemRequested = products.filter(
            (product) => product.category === categoryid
          );
          console.log(itemRequested);
          resolve(itemRequested);
        },500);
    });
}