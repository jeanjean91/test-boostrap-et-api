

function galerie(){ // je declaclare ma function
	this.nom ;
	this.images = [];
	this.galerieDiv;
	this.lightbox;
	this.init =function(divId){ // je declare une  function init de galerie
		this.galerieDiv = document.getElementById(divId);  // j'afect le divId a  galerieDiv
		this.lightbox = document.getElementsByClassName('lightbox')[0];

	}
// je met la var figure dans la var gallerieDiv
		
	
		this.update = function(){  //je declare la function update
			 for (var i = 0; i<this.images.length; i++) { // je fet une boucle pour percourir le tableau image[]
				this.galerieDiv.appendChild(this.images[i].figure);	//je dit a image de s'aficher dans la galerieDiv

			}

		}

}


function Image(){ //je declar ma fonction Image
	this.nom ;
	this.url;
	this.figure ='';
	this.init = function(){ //je declare la function init de Image

		this.figure = document.createElement("figure"); //je dit a figure de creer une 
		//this.figure.id = this.nom;
		this.figure.classList.add('gal-img');//jajoute
		var figcaptur = document.createElement("figcaption");
		figcaptur.innerHTML = this.nom;
		var img = document.createElement("img");
		img.src = this.url;
		img.id = this.nom;
		this.figure.appendChild(img);
		this.figure.appendChild(figcaptur);




	}
}

var magalerie = new galerie(); // je creer une instnce de  galerie 
magalerie.nom =" wow";	
magalerie.init("maGal");// on initialise mon instance dans la div ki est dans mon html
	
for (var i =0; i< mesimages.length ; i++) { // je fet ma boucle pour ajouter les images
	var image = new Image();
	image.nom = "image" +i; 
	image.url = mesimages[i];
	image.init();
	magalerie.images.push(image);


}

magalerie.update();

magalerie.galerieDiv.onclick = function(e){
	magalerie.lightbox.classList.toggle("cacher");
	magalerie.lightbox.classList.toggle("visible");
	console.log(e.target.id);
	if (e.target.id.indexOf('image') != -1){
		document.getElementsById("lightbox-img").src = e.target.src;

	}
	
}
/**/




