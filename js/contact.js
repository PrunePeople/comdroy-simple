//Récuperer le formulaire

const formulaire = document.getElementById("myForm");

const name = document.getElementById("idName");
const firstname = document.getElementById("idFirstName");
const mail = document.getElementById("idMail");
const entreprise = document.getElementById("idEntreprise");
const phone = document.getElementById("idPhone");
const comment = document.getElementById("textarea");
const mailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const telRegex = new RegExp("^[0-9]{10}$");

// Soumission évenement au formulaire

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  recap();
});

function recap() {
  if (
    !name.value ||
    !firstname.value ||
    !mail.value ||
    !phone.value ||
    !comment.value
  ) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (!mailRegex.test(mail.value)) {
    alert("Veuillez fournir une adresse e-mail valide.");
    return;
  }

  if (!telRegex.test(phone.value)) {
    alert("Veuillez fournir un numéro de téléphone valide");
    return;
  }

  if (
    name.value &&
    firstname.value &&
    mail.value &&
    phone.value &&
    comment.value
  ) {
    alert("Votre formulaire a été soumis avec succès !");
    return;
  }
  formulaire.submit();
  formulaire.reset();
}