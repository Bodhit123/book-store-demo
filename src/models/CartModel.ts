import { BookModel } from "./BookModel";

export class CartModel {
 Id?: number;
 userId!: number;
 bookId!: number;

 quantity!: number;
}

export class CartList {
 Id!: number;
 userId!: number;
 book!: BookModel;

 quantity!: number;
}

export class GetCart {
 records!: CartList[];
 totalRecords!: number;
}
