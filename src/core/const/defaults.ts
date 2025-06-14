export const META_DATA: MetaDataType = {
  home: {
    title: "Property Visualizer - Explore Properties Easily",
    description:
      "Welcome to Property Visualizer. Browse towers, explore floors, and discover apartment layouts effortlessly.",
    path: "",
  },
  towerDetail: {
    title: "Tower View - Property Visualizer",
    description:
      "Explore detailed information about each tower, its floors, and available apartment layouts.",
    path: ":tower-slug",
  },
  floorDetail: {
    title: "Floor View - Property Visualizer",
    description:
      "Select floors and view available apartment layouts, areas, room counts, and more.",
    path: ":tower-slug/:floor-slug",
  },
  unitDetail: {
    title: "Unit Detail - Property Visualizer",
    description:
      "View full apartment layout, images, and complete unit metadata including area, type, and room count.",
    path: ":tower-slug/:floor-slug/:unit-slug",
  },
  notFound: {
    title: "Page Not Found - Property Visualizer",
    description:
      "The page you're looking for does not exist. Browse properties or return to the homepage.",
    path: "*",
  },
};
