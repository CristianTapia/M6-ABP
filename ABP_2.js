import express from "express";
const app = express();

app.get("/zodiaco/:yyyyddmm", (req, res) => {
  let fecha = req.params.yyyyddmm;
  let dato = new Date(2023, fecha.slice(6, 8), fecha.slice(4, 6));
  let dia = dato.getDate();
  let mes = dato.getMonth();

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    console.log("\nAries");
    console.log(`
        Aries forma parte de los signos cardinales y al mismo tiempo es un signo
        de fuego; también es el primer signo del zodíaco, precisamente por eso,
        simboliza el inicio, la creación. Se caracteriza por ser una persona
        rebosante de energía y entusiasmo; avanzada y aventurera, adora la
        libertad, los retos y las nuevas ideas.`);
  }
  if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    console.log("\nTauro");
    console.log(`
        Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. 
        La proyección del Sol en su nacimiento suele influir para que sean personas 
        firmes, decididas y constantes en varios sentidos. También adoran sentir 
        seguridad, por eso la buscan tanto, es como una necesidad constante en sus 
        vidas.`);
  }
  if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    console.log("Géminis");
    res.send("Géminis");
  }
  if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    console.log("Cáncer");
    res.send("Cáncer");
  }
  if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    console.log("Leo");
    res.send("Leo");
  }
  if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    console.log("Virgo");
    res.send("Virgo");
  }
  if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    console.log("Libra");
    res.send("Libra");
  }
  if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    console.log("Escorpio");
    res.send("Escorpio");
  }
  if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    console.log("Sagitario");
    res.send("Sagitario");
  }
  if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    console.log("Capricornio");
    res.send("Capricornio");
  }
  if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
    console.log("Acuario");
    res.send("Acuario");
  }
  if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
    console.log("Piscis");
    res.send("Piscis");
  }
});

app.get("/astrología-china/:yyyyddmm", (req, res) => {
  let fecha = req.params.yyyyddmm;
  let dato = new Date(2023, fecha.slice(6, 8), fecha.slice(4, 6));
  let dia = dato.getDate();
  let mes = dato.getMonth();

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    console.log("Aries");
    res.send("Aries");
  }
  if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    console.log("Tauro");
    res.send("Tauro");
  }
  if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    console.log("Géminis");
    res.send("Géminis");
  }
  if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    console.log("Cáncer");
    res.send("Cáncer");
  }
  if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    console.log("Leo");
    res.send("Leo");
  }
  if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    console.log("Virgo");
    res.send("Virgo");
  }
  if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    console.log("Libra");
    res.send("Libra");
  }
  if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    console.log("Escorpio");
    res.send("Escorpio");
  }
  if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    console.log("Sagitario");
    res.send("Sagitario");
  }
  if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    console.log("Capricornio");
    res.send("Capricornio");
  }
  if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
    console.log("Acuario");
    res.send("Acuario");
  }
  if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
    console.log("Piscis");
    res.send("Piscis");
  }
});

app.listen("3000", () => {
  console.log("Servicio levantado");
});
