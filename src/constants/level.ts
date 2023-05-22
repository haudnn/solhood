interface Level { 
    id: number,
    name: string,
    textColor: string,
    borderColor: string,
    backgroudColor: string,
}

const levels: Array<Level> = [
  {
    id: 1,
    name: "A1",
    borderColor: "border-greendesign",
    textColor: "text-greendesign",
    backgroudColor: "#639b6d",
  },
  {
    id: 2,
    name: "A2",
    borderColor: "border-yellowdesign",
    textColor: "text-yellowdesign",
    backgroudColor: "#c4a24c",
  },
  {
    id: 3,
    name: "B1",
    borderColor: "border-orangedesign",
    textColor: "text-orangedesign",
    backgroudColor: "#cb5b43",
  },
  {
    id: 4,
    name: "B2",
    borderColor: "border-reddesign",
    textColor: "text-reddesign",
    backgroudColor: "#a95151",
  },
  {
    id: 5,
    name: "C1",
    borderColor: "border-pinkdesign",
    textColor: "text-pinkdesign",
    backgroudColor: "#a15993",
  },
  {
    id: 6,
    name: "C2",
    borderColor: "border-cyandesign",
    textColor: "text-cyandesign",
    backgroudColor: "#5996a5",
  },
];  

export default levels;