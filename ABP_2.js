import express from "express";
const app = express();

let dato = new Date('2023-02-28')
let dia = dato.getDate() + 1;
let mes = dato.getMonth() + 1;

app.get("/zodiaco/:yyyyddmm", (req, res) => {
    let fecha = req.params.yyyyddmm;
    let dato = new Date(2023, fecha.slice(6, 8), fecha.slice(4, 6));
    let dia = dato.getDate();
    let mes = dato.getMonth();

    if (mes == 3 && dia >= 21 || mes == 4 && dia <= 19) {
        console.log('Aries');
    }
    if (mes == 4 && dia >= 20 || mes == 5 && dia <= 20) {
        console.log('Tauro');
    }
    if (mes == 5 && dia >= 21 || mes == 6 && dia <= 20) {
        console.log('Géminis');
    }
    if (mes == 6 && dia >= 21 || mes == 7 && dia <= 22) {
        console.log('Cáncer');
    }
    if (mes == 7 && dia >= 23 || mes == 8 && dia <= 22) {
        console.log('Leo');
    }
    if (mes == 8 && dia >= 23 || mes == 9 && dia <= 22) {
        console.log('Virgo');
    }
    if (mes == 9 && dia >= 23 || mes == 10 && dia <= 22) {
        console.log('Libra');
    }
    if (mes == 10 && dia >= 23 || mes == 11 && dia <= 21) {
        console.log('Escorpio');
    }
    if (mes == 11 && dia >= 22 || mes == 12 && dia <= 21) {
        console.log('Sagitario');
    }
    if (mes == 12 && dia >= 22 || mes == 1 && dia <= 20) {
        console.log('Capricornio');
    }
    if (mes == 1 && dia >= 21 || mes == 2 && dia <= 19) {
        console.log('Acuario');
    }
    if (mes == 2 && dia >= 20 || mes == 3 && dia <= 20) {
        console.log('Piscis');
    }
});

app.listen("3000", () => {
  console.log("Servicio levantado");
});
