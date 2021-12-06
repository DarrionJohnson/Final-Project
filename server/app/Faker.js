import faker from "faker";
import { promises as fs } from "fs";

fs.writeFile(
  "db.json",
  JSON.stringify(
    Array.from({ length: 500 }, () => ({
      ItemType: "Sport Card",
      Sport: faker.helpers.randomize([
        "BaseBall",
        "BasketBall",
        "FootBall",
        "Hockey",
        "Soccer",
      ]),
      Team:
        "The " +
        faker.address.cityName() +
        " City " +
        faker.name.lastName() +
        "s",
      "Player Name": faker.name.firstName() + " " + faker.name.lastName(),
      "Player Number": faker.datatype.number(99),
      "Printed year": faker.date.between("1978 - 01 - 01", "2020 - 12 - 31"),
      "Signed Copy": faker.helpers.randomize(["Yes", "No"]),
      Quantity: faker.datatype.number(30),
    })),
    null,
    2
  ),
  "utf8"
);
