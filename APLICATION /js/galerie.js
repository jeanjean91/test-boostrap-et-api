var mesimages = [
    "https://saatyphotography.com/wp-content/uploads/2015/05/1-Icon-e1433962128825.jpg",
    "https://i.pinimg.com/originals/5c/4b/67/5c4b672e04cc92914959cc8e9e8125c7.jpg",
    "https://www.naturettl.com/wp-content/uploads/2017/11/best-iceland-landscape-photography-locations-J%C3%B6kuls%C3%A1rl%C3%B3n-Glacier-Lagoon-900x600.jpg",
    "https://i.ytimg.com/vi/OPO7Ba8iMdw/maxresdefault.jpg",
    "https://avatars.mds.yandex.net/get-pdb/231404/255f5254-d617-44ab-b28f-49afd2d91cc3/orig",
    "https://d.ibtimes.co.uk/en/full/1650607/masters-landscape-photography.jpg?w=1180&e=6f5ee65d89705538ba5c142ce82c0f19",
    "https://alk3r.files.wordpress.com/2017/03/brighton-queensland-australia.jpg",
    "http://urbantoronto.ca/sites/default/files/imagecache/display-slideshow/images/articles/2013/03/7237/urbantoronto-7237-24504.jpg",
    "https://fotoworkshops.com.au/wp-content/uploads/2017/05/Central-Coast-Landscape-Photography.jpg",
     "https://i.ytimg.com/vi/V1pD-HGxysM/maxresdefault.jpg",
   
]

////////////////////////////////////////
// Début du code de déclaration
// Ce code n'est pas exécuté tant
// qu'il n'y a pas d'instanciation
////////////////////////////////////////

// Modèle Galerie, dont les instances contiendront les images
function Galerie() {
    // Déclaration d'attributs
    // Noter que images est initialisé à tableau vide
    // Les autres attributs sont undefined
    this.nom;
    this.images = [];
    this.galdiv;
    this.lightbox;
    this.currentIndex;

    // Déclaration de la méthode init qui prend
    // deux paramètres:
    // - divId: l'Id de la div qui contiendra la galerie
    // - nom: le nom a donné à la galerie (facultatif)
    this.init = function(divId, nom) {
        this.nom = nom;
        this.galdiv = document.getElementById(divId);
        var lightboxes = document.getElementsByClassName("lightbox");
        // On vérifie qu'il y a bien une balise avec la classe lightbox
        if (lightboxes.length == 0) {
            console.debug("Aucun element .lightbox dans le HTML");
            return;
        }
        this.lightbox = lightboxes[0];

        // récupération des boutons de navigation
        var navbuttons = document.getElementsByClassName("nav");
        if (navbuttons.length == 0) {
            console.debug("Aucun element .nav dans le HTML");
            return;
        }

        // pour chaque bouton (parcours du tableau)
        // ajout d'un callback à l'événement onclick
        for (var i = 0; i < navbuttons.length; i++) {
            var navbutton = navbuttons[i];
            navbutton.onclick = function(e) {
                // trouve l'image du lightbox et son URL
                var lightbox = document.getElementById("lightbox-img");
                var currentUrl = lightbox.src;
                // trouve l'indice de l'url de l'image du lightbox dans le tableau
                // des urls
                var currentIndex;
                for (var i = 0; i < mesimages.length; i++) {
                    if (currentUrl == mesimages[i]) {
                        currentIndex = i;
                    }
                }

                // on teste quel bouton a été cliqué
                // en fonction du bouton, on décrémente ou incrémente l'indice.
                if (e.target.classList.contains("previous")) {
                    currentIndex -= 1;
                } else {
                    currentIndex += 1;
                }
                // charger l'url de l'image dans le lightbox
                console.log((currentIndex + mesimages.length) % mesimages.length);
                lightbox.src = mesimages[(currentIndex + mesimages.length) % mesimages.length];
            }
        }

        // On rend la div "dynamique" en ajoutant un
        // callback à l'événement "click"
        this.galdiv.onclick = function(e) {
            // on vérifie que le clic a été fait SUR
            // une image
            if (e.target.id.indexOf("image") != -1) {
                // affecter la valeur de this.currentIndex
                this.currentIndex = e.target.id
                // Si oui, on redimensionne l'image et
                // on affiche le lightbox
                var imgWidth = e.target.naturalWidth,
                    imgHeight = e.target.naturalHeight;

                var ratio = (1 * window.outerWidth) / imgWidth;
                imgWidth *= ratio;
                imgHeight *= ratio;

                if (imgHeight > 2.5 * window.outerHeight) {
                    ratio = (2.5 * window.outerHeight) / imgHeight;
                    imgWidth *= ratio;
                    imgHeight *= ratio;
                }
                var x = (window.outerWidth - imgWidth) / 20,
                    y = (window.outerHeight - imgHeight) / 20;

                var lightbox = document.getElementById("lightbox-img");
                lightbox.src = e.target.src;
                lightbox.style.left = x + "px";
                lightbox.style.top = y + "px";
                lightbox.style.width = imgWidth + "px";
                lightbox.style.height = imgHeight + "px";

                magalerie.lightbox.classList.add("visible");
                magalerie.lightbox.classList.remove("cache");
            } else {
                //Sinon, on cache le lightbox
                if (e.target.tagName != "I") {
                    magalerie.lightbox.classList.remove("visible");
                    magalerie.lightbox.classList.add("cache");
                }
            }
        }
    }

    // méthode pour ajouter une image dans la Galerie
    this.addImage = function(image) {
        this.images.push(image);
    }

    // méthode pour ajouter dans l'arbre DOM les images
    // enregistrées dans la Galerie
    this.update = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.galdiv.appendChild(this.images[i].figure);
        }
        this.lightbox.style.height = document.body.clientHeight;
    }
}

// Modèle Image, dont les instances contiendront chacune une image
function Image() {
    // Déclaration des attributs
    this.nom;
    this.url;
    this.figure;
    // Déclaration de la méthode init qui prend 2 params:
    // - nom: qui servira d'id unique
    // - url: qui servira de src à l'image
    this.init = function(nom, url) {
        // Element<figure class="galimage">
        this.figure = document.createElement("figure");
        this.figure.classList.add("galimage");
        // Element <img id="" src="url">
        var img = document.createElement("img");
        img.src = this.url = url;
        img.id = this.nom = nom;

        this.figure.appendChild(img);
    }
}


////////////////////////////////////////
// Debut du code d'instanciation
////////////////////////////////////////

// Création d'un instance de Galerie
var magalerie = new Galerie();
// Appel de la méthode 'init'
// de l'instance 'magalerie'
// du modèle 'Galerie'
magalerie.init("magallery", "b&w");

//creer une boucle qui parcourt le tableau mesimages
for (var i = 0; i < mesimages.length; i++) {
    // Création d'un instance de Image
    var image = new Image();
    // Appel de ma méthode 'init' de l'instance 'image'
    // du modèle 'Image'
    image.init("image-" + i, mesimages[i]);
    // Appel de la méthode 'addImage'
    // de l'instance 'magalerie'
    // du modèle 'Galerie' avec le paramètre 'image'
    magalerie.addImage(image);
}

// Appel de la méthode 'update'
// de l'instance 'magalerie'
// du modèle 'Galerie'
magalerie.update();