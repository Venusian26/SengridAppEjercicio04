const sendmail = require("./sendmail");
const nombre = " Juan Figueroa";

const env = {
    to:"juanfigueroac26@gmail.com",
    subject: " Ejercicio 04 - AE2019",
    text:` Este es un mensaje que se envio a ${nombre}`,
    html : `<strong> Envio por HTML </strong>`
}

sendmail.send(env);