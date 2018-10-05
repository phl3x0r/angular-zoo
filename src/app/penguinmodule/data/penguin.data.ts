export const penguinData: PenguinData[] = [
  {
    species: 'Emperor'
  },
  {
    species: 'King'
  },
  {
    species: 'Adélie'
  },
  {
    species: 'Chinstrap'
  },
  {
    species: 'Gentoo'
  },
  {
    species: 'Little Blue'
  },
  {
    species: 'White-flippered'
  },
  {
    species: 'Magellanic'
  },
  {
    species: 'Humboldt'
  },
  {
    species: 'Galapagos'
  },
  {
    species: 'African'
  },
  {
    species: 'Yellow-eyed'
  },
  {
    species: 'Fiordland'
  },
  {
    species: 'Snares'
  },
  {
    species: 'Erect-crested'
  },
  {
    species: 'Rockhopper'
  },
  {
    species: 'Macaroni'
  },
  {
    species: 'Royal'
  }
];

export interface PenguinData {
  species: string;

  maleCount?: number;
  femaleCount?: number;
  eggCount?: number;
  growth?: number;
}

export const generatePenguinData = () =>
  penguinData.map(s => ({
    ...s,
    eggCount: randomNumber(1000),
    femaleCount: randomNumber(1000),
    maleCount: randomNumber(1000),
    growth: 1 - Math.random() * 2
  }));

export const randomNumber = (i: number) => Math.floor(Math.random() * i) + 1;
