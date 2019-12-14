import { Reference, ListResult as IListResult } from "./storage";

export abstract class ListResult implements IListResult {
  constructor(public items: Array<Reference>,
              public prefixes: Array<Reference>,
              public nextPageToken?: string) {
  }
}