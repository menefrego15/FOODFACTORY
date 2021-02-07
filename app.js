window.onload = function() {
    document.getElementById("submit").addEventListener("click", generate);
}


function generate() {
    
    //ENTREE VALUE
    if (document.getElementById('salad').checked) {
        entree = document.getElementById('salad').value;
      }

    if (document.getElementById('fromage').checked) {
        entree = document.getElementById('fromage').value;
      }
    
      if (document.getElementById('poisson').checked) {
        entree = document.getElementById('poisson').value;
      }

      if (document.getElementById('oeufs').checked) {
        entree = document.getElementById('oeufs').value;
      }


    //PLAT VALUE
    if (document.getElementById('vrouge').checked) {
        plat = document.getElementById('vrouge').value;
      }

    if (document.getElementById('poissonp').checked) {
        plat = document.getElementById('poissonp').value;
      }
    
      if (document.getElementById('vblanche').checked) {
        plat = document.getElementById('vblanche').value;
      }

      if (document.getElementById('legumes').checked) {
        plat = document.getElementById('legumes').value;
      }
    

    //DESSERT VALUE

    if (document.getElementById('gateau').checked) {
      dessert = document.getElementById('gateau').value;
    }

  if (document.getElementById('glace').checked) {
      dessert = document.getElementById('glace').value;
    }
  
    if (document.getElementById('fruit').checked) {
      dessert = document.getElementById('fruit').value;
    }

    if (document.getElementById('yaourt').checked) {
      dessert = document.getElementById('yaourt').value;
    }


    class Entrée {
      constructor(name, recipe, time, type) {
        this.name = name;
        this.time = time;
        this.type = type;
        this.recipe = recipe;
      }
      
      get_name() {
        return this.name;
      }

      get_recipe() {
        return this.recipe;
      }

      get_time() {
        return this.time;
      }
}

class Plat {
  constructor(name, recipe, time, type) {
    this.name = name;
    this.time = time;
    this.type = type;
    this.recipe = recipe;
  }
  
  get_name() {
    return this.name;
  }

  get_recipe() {
    return this.recipe;
  }

  get_time() {
    return this.time;
  }
}

class Dessert {
  constructor(name, recipe, time, type) {
    this.name = name;
    this.time = time;
    this.type = type;
    this.recipe = recipe;
  }

}




var Plat1 = new Entrée("Salade melon, feta, jambon","https://www.marmiton.org/recettes/recette_salade-melon-feta-jambon_17933.aspx","15mn","Salade");
var Plat2 = new Entrée("Salade de Kiwi et tomates","https://www.marmiton.org/recettes/recette_salade-de-kiwis-et-tomates-de-lili_28806.aspx","5mn","Salade");
var Plat3 = new Entrée("Soufflé au fromage","https://www.marmiton.org/recettes/recette_souffle-au-fromage_69641.aspx","50mn","Fromage");
var Plat4 = new Entrée("Chèvre en feuilleté","https://www.marmiton.org/recettes/recette_chevre-en-feuillete_11921.aspx","35mn","Fromage");
var Plat5 = new Entrée("Oeuf cocotte au bacon","https://www.marmiton.org/recettes/recette_oeuf-cocotte-au-bacon_51038.aspx","25mn","Oeuf");
var Plat6 = new Entrée("Oeuf nuage","https://www.marmiton.org/recettes/recette_oeuf-nuage_348215.aspx","22mn","Oeuf");
var Plat7 = new Entrée("Roulade de saumon fumé ","https://www.marmiton.org/recettes/recette_roulade-de-saumon-fume-aux-asperges-sauce-aux-crevettes-et-au-chevre-frais_15079.aspx","30mn","Poisson");
var Plat8 = new Entrée("Cake au thon","https://www.marmiton.org/recettes/recette_cake-au-thon-rapide_16045.aspx","55mn","Poisson");

var Plat9 = new Plat("Chili con carne","https://www.marmiton.org/recettes/recette_chili-con-carne-facile_15415.aspx","35mn","Viande Rouge");
var Plat10 = new Plat("Boeuf Stroganoff","https://www.marmiton.org/recettes/recette_boeuf-stroganoff_28441.aspx","35mn","Viande Rouge");
var Plat11 = new Plat("Poulet Basquaise","https://www.marmiton.org/recettes/recette_poulet-basquaise_16969.aspx","80mn","Viande Blanche");
var Plat12 = new Plat("Roti de porc à la moutarde et au miel","https://www.marmiton.org/recettes/recette_roti-de-porc-a-la-moutarde-et-au-miel_17178.aspx","70mn","Viande Blanche");
var Plat13 = new Plat("Risotto aux poireaux","https://www.marmiton.org/recettes/recette_risotto-aux-poireaux_19753.aspx","30mn","Légume");
var Plat14 = new Plat("Jardinière de légumes","https://www.marmiton.org/recettes/recette_jardiniere-de-legumes_20282.aspx","50mn","Légume");
var Plat15 = new Plat("Cabillaud à la sauce Korma Patak’s","https://www.marmiton.org/recettes/recette_cabillaud-poisson-a-la-sauce-korma_391511.aspx","45mn","Poisson");
var Plat16 = new Plat("Crevettes au curry","https://www.marmiton.org/recettes/recette_crevettes-au-curry-express_12645.aspx","15mn","Poisson");

var Plat17 = new Dessert("Flan pâtissier traditionnel","https://www.marmiton.org/recettes/recette_flan-patissier-traditionnel_15330.aspx","60mn","Gateau");
var Plat18 = new Dessert("Fondant au chocolat","https://www.marmiton.org/recettes/recette_ramequins-fondants-au-chocolat_15816.aspx","22mn","Gateau");
var Plat19 = new Dessert("Tarte aux pommes à l’alsacienne","https://www.marmiton.org/recettes/recette_tarte-aux-pommes-a-l-alsacienne_11457.aspx","55mn","Fruit");
var Plat20 = new Dessert("Tiramisu aux framboises","https://www.marmiton.org/recettes/recette_tiramisu-aux-framboises_28919.aspx","25mn","Fruit");
var Plat21 = new Dessert("Glace Vanille","https://www.marmiton.org/recettes/recette_glace-vanille_18488.aspx","20mn","Glace");
var Plat22 = new Dessert("Café glacé","https://www.marmiton.org/recettes/recette_cafe-glace_49856.aspx","2mn","Glace");
var Plat23 = new Dessert("Yaourt au chocolat","https://www.marmiton.org/recettes/recette_yahourt-au-chocolat_195693.aspx","20mn","Yaourt");
var Plat24 = new Dessert("Yaourt à la grecque, miel et noix","https://www.marmiton.org/recettes/recette_yaourt-a-la-grecque-miel-et-noix_392595.aspx","10mn","Yaourt");

L = [Plat1, Plat2, Plat3, Plat4, Plat5, Plat6, Plat7, Plat8];
M = [Plat9, Plat10, Plat11, Plat12, Plat13, Plat14, Plat15, Plat16];
N = [Plat17, Plat18, Plat19, Plat20, Plat21, Plat22, Plat23, Plat24];


function random(L){
    var l = L.length;
    var x = Math.floor(Math.random() * l);
    return L[x];
}



if (entree == "salad") {
  var K = [];
  for (var i = 0; i < L.length; i++) {
    if (L[i].type == "Salade") {
      K.push(L[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-result").innerHTML = x.name;
  document.getElementById("time-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe").href = x.recipe;
  
}else if (entree == "fromage"){
  var K = [];
  for (var i = 0; i < L.length; i++) {
    if (L[i].type == "Fromage") {
      K.push(L[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-result").innerHTML = x.name;
  document.getElementById("time-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe").href = x.recipe;
}else if (entree == "poisson"){
  var K = [];
  for (var i = 0; i < L.length; i++) {
    if (L[i].type == "Poisson") {
      K.push(L[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-result").innerHTML = x.name;
  document.getElementById("time-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe").href = x.recipe;
}else if(entree == "oeufs"){
  var K = [];
  for (var i = 0; i < L.length; i++) {
    if (L[i].type == "Oeuf") {
      K.push(L[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-result").innerHTML = x.name;
  document.getElementById("time-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe").href = x.recipe;
}

if (plat == "vrouge"){
  var K = [];
  for (var i = 0; i < M.length; i++) {
    if (M[i].type == "Viande Rouge") {
      K.push(M[i]);
    }
  }
  var x = random(K);
  console.log(K);
  document.getElementById("name-plat-result").innerHTML = x.name;
  document.getElementById("time-plat-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-plat").href = x.recipe;
}else if (plat == "poissonp"){
  var K = [];
  for (var i = 0; i < M.length; i++) {
    if (M[i].type == "Poisson") {
      K.push(M[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-plat-result").innerHTML = x.name;
  document.getElementById("time-plat-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-plat").href = x.recipe;
}else if (plat == "vblanche"){
  var K = [];
  for (var i = 0; i < M.length; i++) {
    if (M[i].type == "Viande Blanche") {
      K.push(M[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-plat-result").innerHTML = x.name;
  document.getElementById("time-plat-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-plat").href = x.recipe;

}else if (plat == "legumes"){
  var K = [];
  for (var i = 0; i < M.length; i++) {
    if (M[i].type == "Légume") {
      K.push(M[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-plat-result").innerHTML = x.name;
  document.getElementById("time-plat-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-plat").href = x.recipe;

}if (dessert == "gateau"){
  var K = [];
  for (var i = 0; i < N.length; i++) {
    if (N[i].type == "Gateau") {
      K.push(N[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-dessert-result").innerHTML = x.name;
  document.getElementById("time-dessert-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-dessert").href = x.recipe;

}else if (dessert == "glace"){
  var K = [];
  for (var i = 0; i < N.length; i++) {
    if (N[i].type == "Glace") {
      K.push(N[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-dessert-result").innerHTML = x.name;
  document.getElementById("time-dessert-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-dessert").href = x.recipe;

}else if (dessert == "fruit"){
  var K = [];
  for (var i = 0; i < N.length; i++) {
    if (N[i].type == "Fruit") {
      K.push(N[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-dessert-result").innerHTML = x.name;
  document.getElementById("time-dessert-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-dessert").href = x.recipe;


}else if (dessert == "yaourt"){
  var K = [];
  for (var i = 0; i < N.length; i++) {
    if (N[i].type == "Yaourt") {
      K.push(N[i]);
    }
  }
  var x = random(K);
  document.getElementById("name-dessert-result").innerHTML = x.name;
  document.getElementById("time-dessert-result").innerHTML = 'Temps de preparation: ' + x.time;
  document.getElementById("recipe-dessert").href = x.recipe;


}

}

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}