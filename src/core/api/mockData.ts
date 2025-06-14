import { faker } from "@faker-js/faker";
import apart1 from "../../assets/apartment_1.jpg";
import apart2 from "../../assets/apartment_2.jpg";
import apart3 from "../../assets/apartment_3.jpg";
import apart4 from "../../assets/apartment_4.jpg";

const apartmentImages = [apart1, apart2, apart3, apart4];

const generateUnits = (count: number): Unit[] => {
  return Array.from({ length: count }, (_, i) => {
    const unitTypes = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"];
    const thumbnail = faker.helpers.arrayElement(apartmentImages);
    return {
      id: faker.string.uuid(),
      name: `Unit ${i + 1}`,
      slug: `unit-${i + 1}`,
      area: faker.number.int({ min: 50, max: 200 }),
      unitType: faker.helpers.arrayElement(unitTypes),
      roomCount: faker.number.int({ min: 1, max: 4 }),
      thumbnail: thumbnail,
      layoutImage: thumbnail,
    };
  });
};

const generateFloors = (count: number): Floor[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: faker.string.uuid(),
    name: `Floor ${i + 1}`,
    slug: `floor-${i + 1}`,
    number: i + 1,
    units: generateUnits(faker.number.int({ min: 3, max: 4 })),
  }));
};

const generateTowers = (): Tower[] => {
  const towerNamesAndSlugs = [
    { name: "The Grand Heights", slug: "the-grand-heights" },
    { name: "Skyline Residences", slug: "skyline-residences" },
    { name: "Ocean view Towers", slug: "ocean-view-towers" },
  ];

  return towerNamesAndSlugs.map(({ name, slug }) => ({
    id: faker.string.uuid(),
    name,
    slug,
    floors: generateFloors(faker.number.int({ min: 10, max: 15 })),
  }));
};

export const generateMockData = (): Tower[] => generateTowers();
