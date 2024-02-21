import { PaymentDetail, listProduct } from './order.schema';
import { Users } from 'src/user/user.schema';
export declare class Order {
    orderCode: string;
    status: number;
    listProduct: listProduct[];
    bookingDate: Date;
    deliveryDate: string;
    userID: Users;
    voucher: string;
    phoneReceiver: string;
    nameReceiver: string;
    addressDelivery: string;
    payment: PaymentDetail;
    totalPrice: number;
}
