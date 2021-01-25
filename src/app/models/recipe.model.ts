import { custom, JSONObject, required } from 'ts-json-object';

export class Recipe extends JSONObject {
  @required
  id!: string;

  @required
  user!: string;

  @required
  name!: string;

  @required
  category!: number;

  @required
  description!: string;
}