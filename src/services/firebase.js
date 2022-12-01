import {initializeApp} from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    writeBatch,
    documentId,
  } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCkwvkxbbA_gavBJxuGAzRF5ZiS7woOqQ8",
    authDomain: "mistermusic-ecc17.firebaseapp.com",
    projectId: "mistermusic-ecc17",
    storageBucket: "mistermusic-ecc17.appspot.com",
    messagingSenderId: "149002987655",
    appId: "1:149002987655:web:669946fe0ed76584e2b022"
  };

  const FirebaseApp = initializeApp(firebaseConfig);

  const DB = getFirestore(FirebaseApp);

  export function testDatabase() {
    console.log(FirebaseApp);
  }

  export async function getSingleItemFromAPI(id) {
    try { 
      const docRef = doc(DB, "products", id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return {
          ...docSnap.data(),
          id: docSnap.id,
        };
      } else {
        throw new Error("El producto no existe");
      }
    }
    catch(error){
      throw error;
    }
  }

  export async function getItemsFromAPI() {
    try {
      const collectionProducts = collection(DB, "products");
  
      let respuesta = await getDocs(collectionProducts);
  
      const products = respuesta.docs.map((docu) => {
        return {
          ...docu.data(),
          id: docu.id,
        };
      });
  
      return products;
    } catch (error) {
      console.error(error);
    }
  }  

  export async function getItemsFromAPIByCategory(categoryId) {
    const productsRef = collection(DB, "products");
    const myQuery = query(productsRef, where("category", "==", categoryId));
  
    const productsSnap = await getDocs(myQuery);
  
    const emptyArray = productsSnap.docs.length < 1;
  
    if (emptyArray) throw new Error("Categoría sin resultados");
  
    const products = productsSnap.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });
  
    return products;
  }

  export async function createBuyOrderFirestore(buyOrderData) {
    const collectionRef = collection(DB, "buyorders");
    const docRef = await addDoc(collectionRef, buyOrderData);
  
    return docRef.id;
  }

  export async function createBuyOrderFirestoreWithStock(buyOrderData) {
    const collectionProductsRef = collection(DB, "products");
    const collectionOrdersRef = collection(DB, "buyorders");
    const batch = writeBatch(DB);
  
    let arrayIds = buyOrderData.items.map((item) => {
      return item.id;
    });
  
    const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));
  
    let productsSnapshot = await getDocs(q);
  
    productsSnapshot.docs.forEach((doc) => {
      let stockActual = doc.data().stock;
      let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
      let stockActualizado = stockActual - itemInCart.count;
  
      batch.update(doc.ref, { stock: stockActualizado });
    });
  
    const docOrderRef = doc(collectionOrdersRef);
    batch.set(docOrderRef, buyOrderData);
  
    batch.commit();
  
    return docOrderRef.id;
  }

   async function exportItemsToFirestore(params) {
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
            name :"Fender",
            price : 220.000,
            stock:35,
            category:"Amplificadores",
            image:"https://i.ibb.co/6FHm1GM/fender-Ampli.webp",
            description:"Amplificador Fender Champion Series 100 Valvular para guitarra de 100W color negro/plata 220V"
        },
        {
            id : 16,
            name :"Trompeta Getzen",
            price : 995.000,
            stock:5,
            category:"Vientos",
            image:"https://i.ibb.co/3d77q2K/trompeta.webp",
            description:"Trompeta Getzen Eterna 900dlx 80th Copper Bell"
        },
        {
            id : 17,
            name :"Guitarra gibson",
            price : 550.000,
            stock:18,
            category:"Guitarras",
            image:"https://i.ibb.co/tQtS3ff/gibson-Heave.webp",
            description:"Guitarra Heavy Gibson 1963 Firebird V Reissue Vos"
        },
        {
            id : 18,
            name :"Sintetizador korg",
            price : 750.000,
            stock:15,
            category:"Teclados",
            image:"https://i.ibb.co/2P8nnQ2/sinte-Korg.webp",
            description:"Sintetizador Workstation Korg Nautilus 88 Teclas"
        },
        {
            id : 19,
            name :"Blackstar",
            price : 750.000,
            stock:45,
            category:"Amplificadores",
            image:"https://i.ibb.co/f2TQXrz/blackstar-Ampli.webp",
            description:"Amplificador Blackstar ID Core Stereo 100 Valvular para guitarra de 100W color negro 100V/240V"
        },
        {
            id : 20,
            name :"Trombón yamaha",
            price : 995.000,
            stock:5,
            category:"Vientos",
            image:"https://i.ibb.co/nbNrP6p/trombon.webp",
            description:"Trombón Bajo Yamaha Ybl-620g"
        },
        {
            id : 21,
            name :"Guitarra fender",
            price : 550.000,
            stock:18,
            category:"Guitarras",
            image:"https://i.ibb.co/Y49z102/fender-VIola.webp",
            description:"Guitarra Fender Cus Shop 1963 Telecaster"
        },
        {
            id : 22,
            name :"Sintetizador yamaha",
            price : 750.000,
            stock:15,
            category:"Teclados",
            image:"https://i.ibb.co/HqQpP5w/sinte-Yamaha.webp",
            description:"Yamaha Sintetizador Mini Teclado Portatil Reface Yc"
        },
        {
            id : 23,
            name :"Orange",
            price : 750.000,
            stock:45,
            category:"Amplificadores",
            image:"https://i.ibb.co/qY0rZfZ/orange-Ampli.webp",
            description:"Amplificador Orange Crush Pro CR120C Transistor para guitarra de 120W color naranja 230V - 240V"
        },
        {
            id : 24,
            name :"Gaita",
            price : 995.000,
            stock:5,
            category:"Vientos",
            image:"https://i.ibb.co/FDLTfyx/gaita.webp",
            description:"Gaita Escocesa Importada"
        },
        {
            id : 25,
            name :"Guitarra gretsch",
            price : 550.000,
            stock:18,
            category:"Guitarras",
            image:"https://i.ibb.co/TrKgBDt/viola-Gretsch.webp",
            description:"Guitarra Electrica Gretsch G6120ssu Brian Setzer Orange Btq"
        },
        {
            id : 26,
            name :"Sintetizador roland",
            price : 750.000,
            stock:15,
            category:"Teclados",
            image:"https://i.ibb.co/7rvSYp6/sinte-Roland.webp",
            description:"Sintetizador Roland Xps30 Teclado 61 Teclas"
        },
    ]
    
    const collectionRef = collection(DB, "products");
    
    for (let item of products) {
        item.index = item.id;
        delete item.id;
        const docRef = await addDoc(collectionRef, item);
        console.log("Document created with ID", docRef.id);
      }
  }

