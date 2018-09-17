import {Nutritional} from './nutritional.model';

export class Ingredient {
  _id: string;
  Nummer: string;
  Namn: string;
  ViktGram: string;
  Huvudgrupp: string;
  Naringsvarden: {
    Naringsvarde: Nutritional[]
  };
}

