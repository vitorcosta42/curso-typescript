"use strict";
// criar função que recebe reviews
//as possibilidades são boolean e number
// serão enviados numeros de 1 a 5 estrelas,
//prever uma mensagem pra cada uma destas notas
// ou false, que é quando o usuário não deixa um review
class Review {
    constructor(name, star) {
        this.name = name;
        if (star) {
            this.star = star;
        }
    }
}
const usuario1 = new Review("Usuário 1", 2);
const usuario2 = new Review("Usuário 2", 4);
const usuario3 = new Review("Usuário 3", 5);
const usuario4 = new Review("Usuário 4", 1);
const usuario5 = new Review("Usuário 5", 3);
const usuario6 = new Review("Usuário 6", false);
function showReviews(reviewer) {
    if ("star" in reviewer) {
        console.log(`O ${reviewer.name} deu ${reviewer.star} estrelas!`);
    }
    else {
        console.log(`O ${reviewer.name} não deixou uma avaliação.`);
       
    }
}
showReviews(usuario1);
showReviews(usuario2);
showReviews(usuario3);
showReviews(usuario4);
showReviews(usuario5);
showReviews(usuario6);
