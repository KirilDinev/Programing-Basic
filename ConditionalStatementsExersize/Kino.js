function kino(cinemaProject, line, kolone) {
  let project = cinemaProject;
  let countLine = Number(line);
  let countKolone = Number(kolone);
  let price = 0

  let premiere = 12;
  let normal = 7.5;
  let discount = 5;

  if (project === "Premiere") {
    price = countKolone * countLine * premiere;
  } else if (project === "Normal") {
    price = countLine * countKolone * normal;
  } else if (project = "Discount") {
    price = countKolone * countLine * discount;
  }
  console.log(price.toFixed(2))

}
kino("Premiere", "10", "12");