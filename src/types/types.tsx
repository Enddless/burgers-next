export type TBurgers = {
  basePrice: number;
  grams: number;
  image: string;
  price: number;
  text: string;
  title: string;
};

export interface IBurgersData {
  burgers: TBurgers[];
}
