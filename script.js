const image = document.querySelector('.image')
const buttons = document.querySelectorAll('button')
const joueur_image = document.querySelector('.image_joueur')
const div_ordinateur = document.querySelector('.score_ordinateur')
const div_joueur = document.querySelector('.score_joueur')
const btn_demarer = document.querySelector('.btn_demarer')
const section = document.querySelector('section')
const h1 = document.querySelector('h1')
const p5 = document.querySelector('p5')

let score_joueur = 0
let score_ordinateur = 0
function aleatoire(max){
    return Math.floor(Math.random()*(max+1))
}

function creer(type){
   return document.createElement(type)
}
btn_demarer.addEventListener('click', e=>{
//----------------Netoiyage de la feuille avant chargement--------------//
    section.classList.add('section_jeu')
    section.classList.remove('section')
    h1.remove()
    p5.remove()
    btn_demarer.remove()
    //----------------------------------------------------------------//

    //----------remplisage de la feuille après chargement -------------//
     const contener = creer('div')
    contener.classList.add('contener')
    section.append(contener)
    //partie informations et score
    const info = creer('div')
    info.classList.add('info')
    contener.append(info)
    const jeux = creer('div')
    contener.append(jeux)
    jeux.classList.add('jeux')

    const titre = creer('div')
    titre.innerHTML = 'Pierre-Feuille-ciseaux'
    titre.classList.add('titre')
       info.append(titre)  
    
    const div_score = creer('div')
    div_score.innerHTML = `0 - 0`
    div_score.classList.add('score')
    info.append(div_score)
   // message ----------------------------------------------------
    const message = creer('div')
    message.classList.add('message1')
    message.innerHTML = 'Bravo vous avez gagner!'
    info.append(message)
// partie ordinateur-------------------------------------------------
    const ordinateur = creer('div')
    jeux.append(ordinateur)

    const h1_ordinateur = creer('h1')
    h1_ordinateur.innerHTML = 'Ordinateur'
   // h1_ordinateur.classList.add('h1')
    ordinateur.append(h1_ordinateur)

    const div_image =  creer('div')
    div_image.classList.add('image')
    ordinateur.append(div_image)
//partie  jouuer------------------------

const joueur = creer('div')
jeux.append(joueur)

    const h1_joueur = creer('h1')
    h1_joueur.innerHTML = 'Joueur'
    joueur.append(h1_joueur)
    const div_image_joueur =  creer('div')
    div_image_joueur.classList.add('image_joueur')
    joueur.append(div_image_joueur)

// bouttons -----------------------

const btn_fonction = creer('div')
 btn_fonction.classList.add('buttons_fonctions')
    section.append(btn_fonction)

    const btn_pierre = creer('button')
    btn_pierre.classList.add('button')
    btn_pierre.innerHTML = 'Pierre'
    btn_fonction.append(btn_pierre)

    const btn_feuille = creer('button')
    btn_feuille.classList.add('button')
    btn_feuille.innerHTML = 'Feuille'
   btn_fonction.append(btn_feuille)

   const btn_ciseaux = creer('button')
   btn_ciseaux.classList.add('button')
   btn_ciseaux.innerHTML = 'Ciseaux'
   btn_fonction.append(btn_ciseaux)

//-------------------------partie backend----------------------

const fonction = document.querySelectorAll('button')
fonction.forEach(e => {
        e.addEventListener('click', e=>{
            const index = aleatoire(2)

            
            if(index===0){
                div_image.classList.remove('feuille')   
                div_image.classList.remove('ciseaux')   
                div_image.classList.add('pierre')   
                
            }
            else if(index===1){
                div_image.classList.remove('pierre')   
                div_image.classList.remove('ciseaux')   
                div_image.classList.add('feuille')  
            }
            else if(index===2){              
                div_image.classList.remove('feuille')   
                div_image.classList.remove('pierre')   
                div_image.classList.add('ciseaux')
                
            }
            // identificaiton des differents bouttons
            const choix = e.currentTarget.innerHTML
            if(choix==='Pierre'){
                div_image_joueur.classList.remove('feuille_joueur')
                div_image_joueur.classList.remove('ciseaux_joueur')
                div_image_joueur.classList.add('pierre_joueur')
            }
            else if(choix==='Feuille'){
                div_image_joueur.classList.remove('pierre_joueur')
                div_image_joueur.classList.remove('ciseaux_joueur')
                div_image_joueur.classList.add('feuille_joueur')

            }
            else if(choix==='Ciseaux'){
                div_image_joueur.classList.add('ciseaux_joueur')

            }
            //Consultation des differents resultas
            if( choix==='Pierre'&&index===2){
                // message.innerHTML = 'Bravo vous avez gagné!'
                 score_joueur+= 1
                 div_score.innerHTML = `${score_ordinateur} - ${score_joueur}`
             }
             else if(choix==='Ciseaux' && index===1){
               //  message.innerHTML = 'Bravo vous avez gagné!'
                 score_joueur+= 1 
                 div_score.innerHTML = `${score_ordinateur} - ${score_joueur}`

             }
             else if(choix==='Feuille' && index===0){
               //  message.innerHTML = 'Bravo vous avez gagné!'
                 score_joueur+= 1
                 div_score.innerHTML = `${score_ordinateur} - ${score_joueur}`
             }
             //test d'egalité
             else if( choix==='Pierre'&&index===0){
  
              }
              else if(choix==='Ciseaux' && index===2){
                 // message.innerHTML = 'Vous etez excegaux'
              }
              else if(choix==='Feuille' && index===1){
   //               message.innerHTML = 'Vous etez excegaux'
              }
             else{
                score_ordinateur+=1
                div_score.innerHTML = `${score_ordinateur} - ${score_joueur}`
             }
             // maitre fin à la partie
             if((score_joueur===3)||(score_ordinateur===3)){
               btn_ciseaux.remove()
               btn_feuille.remove()
                btn_pierre.remove()
                // affichage du message---------------------------------------
                message.classList.add('message')
                message.classList.remove('message1')
                if(score_joueur===3){
                    message.innerHTML= 'Bravo vous avez gagné!'
                }
                else if(score_ordinateur===3){
                    message.innerHTML = 'Dommage vous avez perdu !'
                }
                // buttons replay et quitter---------------------
                const replay = creer('button')
                replay.innerHTML = 'Replay'
                replay.classList.add('replay')
                btn_fonction.append(replay)
               

                replay.addEventListener('click', e=>{
                    score_joueur = 0
                    score_ordinateur = 0
                    div_score.innerHTML = `${score_ordinateur} - ${score_joueur}`
                    e.currentTarget.remove()
                    //retour des images d'origines
                    //ordinateur
                    div_image.classList.add('image')
                    div_image.classList.remove('feuille')   
                    div_image.classList.remove('ciseaux')   
                    div_image.classList.remove('pierre')   
                    // joueur----------------------------
                      div_image_joueur.classList.remove('feuille_joueur')
                      div_image_joueur.classList.remove('ciseaux_joueur')
                      div_image_joueur.classList.remove('pierre_joueur')
                      div_image_joueur.classList.add('image_joueur')
                      //supression du message---------------------------------
                      message.classList.remove('message')
                      message.classList.add('message1')
                    //retablisement des boutons de fonction
                    btn_fonction.append(btn_pierre)
                    btn_fonction.append(btn_feuille)
                    btn_fonction.append(btn_ciseaux)

                })
                    
               
             }
            
        })
});










})



























/* div_joueur.innerHTML=`score: 0`
div_ordinateur.innerHTML=`score: 0`

// lancement de la boucle
buttons.forEach(button => {
        button.addEventListener('click', e=>{
            

            const index = aleatoire(2)

            
            if(index===0){
                image.classList.remove('feuille')   
                image.classList.remove('ciseaux')   
                image.classList.add('pierre')   
                
            }
            else if(index===1){
                image.classList.remove('pierre')   
                image.classList.remove('ciseaux')   
                image.classList.add('feuille')  
            }
            else if(index===2){              
                image.classList.remove('feuille')   
                image.classList.remove('pierre')   
                image.classList.add('ciseaux')
                
            }
            // identificaiton des differents bouttons
            const choix = e.currentTarget.innerHTML
            if(choix==='Pierre'){
                joueur_image.classList.remove('feuille_joueur')
                joueur_image.classList.remove('ciseaux_joueur')
                joueur_image.classList.add('pierre_joueur')
            }
            else if(choix==='Feuille'){
                joueur_image.classList.remove('pierre_joueur')
                joueur_image.classList.remove('ciseaux_joueur')
                joueur_image.classList.add('feuille_joueur')

            }
            else if(choix==='ciseaux'){
                joueur_image.classList.add('ciseaux_joueur')

            }


            //test des resultats
            if( choix==='Pierre'&&index===2){
               // message.innerHTML = 'Bravo vous avez gagné!'
                score_joueur+= 1
                div_joueur.innerHTML = `score : ${score_joueur}`
            }
            else if(choix==='ciseaux' && index===1){
              //  message.innerHTML = 'Bravo vous avez gagné!'
                score_joueur+= 1
                div_joueur.innerHTML = `score : ${score_joueur}`

            }
            else if(choix==='Feuille' && index===0){
              //  message.innerHTML = 'Bravo vous avez gagné!'
                score_joueur+= 1
                div_joueur.innerHTML = `score : ${score_joueur}`

            }
            
            // test d'egaliter
            else if( choix==='Pierre'&&index===0){
              //  message.innerHTML = 'Vous etez excegaux'

            }
            else if(choix==='ciseaux' && index===2){
               // message.innerHTML = 'Vous etez excegaux'
            }
            else if(choix==='Feuille' && index===1){
 //               message.innerHTML = 'Vous etez excegaux'
            }
            // cas de perte
            else{
              //  message.innerHTML = 'Dommage Vous avez perdu!'
                score_ordinateur+=1
                div_ordinateur.innerHTML = `score : ${score_ordinateur}`
            }
            // mettre fin à la partie
            if(score_joueur===3){
                console.log(score_joueur)
                message.innerHTML= 'Fin de la partie Bravo vous avez gagné'
                score_joueur =0
                score_ordinateur=0
                div_joueur.innerHTML=`score: 0`
                div_ordinateur.innerHTML=`score: 0`
                

            }
            else if(score_ordinateur===3){
                console.log(score_ordinateur)
                message.innerHTML= 'Fin de la partie Dommage vous avez perdus'
                score_joueur=0
                score_ordinateur=0
                div_joueur.innerHTML=`score: 0`
                div_ordinateur.innerHTML=`score: 0`

            }

        }) 
}); 

   

 */