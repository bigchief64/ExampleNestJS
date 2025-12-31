import { Query } from '@nestjs/common';

export class ListAllScore extends Query {
  names: Array<string>;
}
