import { Timestamp } from "rxjs";

export interface transaction {
    user_id: number;
    transaction_type: string;
    balance: number;
    transaction_date: Date;
    //transaction_date2: Timestamp;
}
