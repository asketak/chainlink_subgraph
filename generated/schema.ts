// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class updatedAnswer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save updatedAnswer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save updatedAnswer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("updatedAnswer", id.toString(), this);
  }

  static load(id: string): updatedAnswer | null {
    return store.get("updatedAnswer", id) as updatedAnswer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get current(): BigInt {
    let value = this.get("current");
    return value.toBigInt();
  }

  set current(value: BigInt) {
    this.set("current", Value.fromBigInt(value));
  }

  get answerId(): BigInt {
    let value = this.get("answerId");
    return value.toBigInt();
  }

  set answerId(value: BigInt) {
    this.set("answerId", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }
}
