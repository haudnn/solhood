interface Level { 
    id: number,
    name: string,
    textColor: string,
    borderColor: string
}

const levels: Array<Level> = [
  {
    id: 1,
    name: "A1",
    borderColor: "border-greendesign",
    textColor: "text-greendesign",
  },
  {
    id: 2,
    name: "A2",
    borderColor: "border-yellowdesign",
    textColor: "text-yellowdesign",
  },
  {
    id: 3,
    name: "B1",
    borderColor: "border-orangedesign",
    textColor: "text-orangedesign",
  },
  {
    id: 4,
    name: "B2",
    borderColor: "border-reddesign",
    textColor: "text-reddesign",
  },
  {
    id: 5,
    name: "C1",
    borderColor: "border-pinkdesign",
    textColor: "text-pinkdesign",
  },
  {
    id: 6,
    name: "C2",
    borderColor: "border-cyandesign",
    textColor: "text-cyandesign",
  },
];  

export default levels;