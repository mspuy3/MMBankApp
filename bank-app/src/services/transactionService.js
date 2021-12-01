//  File that contains services that are related to transactions

import { getCurrentDate } from "../helpers";

export function createTransaction(type, amount, notes, ...partner) {
  const transaction = {
    id: null,
    type: type,
    amount: amount,
    date: getCurrentDate(),
    notes: notes,
    partner: { ...partner },
  };
  return transaction;
}
