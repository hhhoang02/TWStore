"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./order.schema");
const mongoose_2 = require("mongoose");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async addOrder(requestDTO) {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        try {
            const { orderCode = Math.floor(Math.random() * (999999 - 100000)) + 100000, status = 1, listProduct, bookingDate = date, deliveryDate = `${day + 5}/${month}/${year}`, userID, voucher, phoneReceiver, nameReceiver, addressDelivery, payment, totalPrice } = requestDTO;
            const newOrder = new this.orderModel({
                orderCode,
                status,
                listProduct,
                bookingDate,
                deliveryDate,
                userID,
                voucher,
                phoneReceiver,
                nameReceiver,
                addressDelivery,
                payment,
                totalPrice,
            });
            await newOrder.save();
            return {
                status: true,
                message: 'Add order successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add order failed',
            };
        }
    }
    async getAllOrder() {
        try {
            const order = await this.orderModel
                .find()
                .populate([
                { path: 'listProduct', populate: { path: 'productID' } },
                { path: 'userID' },
            ]).sort([['orderCode', 'desc']]);
            return order;
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Get all banner failed',
            };
        }
    }
    async getOrderbyID(requestDTO) {
        try {
            const _id = requestDTO;
            const order = await this.orderModel.findById(_id).populate([
                {
                    path: 'listProduct',
                    populate: [
                        {
                            path: 'productID',
                            model: 'Product',
                            select: ['productName', 'price', 'name', 'image'],
                        },
                        { path: 'colorID', model: 'Color', select: 'name' },
                        { path: 'sizeID', model: 'Size', select: 'name' },
                    ],
                },
            ]);
            return order;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getOrderbyIDUser(requestDTO) {
        try {
            const _id = requestDTO;
            const order = await this.orderModel.find({ userID: _id }).populate([
                {
                    path: 'listProduct',
                    populate: [{
                            path: 'productID',
                            model: 'Product',
                            select: ['productName', 'price']
                        },
                    ],
                },
                { path: 'userID' },
            ]);
            return order;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateStatusOrder(requestDTO) {
        try {
            const { id } = requestDTO;
            const { status } = requestDTO.body;
            const order = await this.orderModel.findById(id);
            if (!order) {
                throw new common_1.NotFoundException('Order not found');
            }
            order.status = status;
            await order.save();
            return {
                status: true,
                message: 'Update status for Order successfully',
                userID: order.userID,
                statusOrder: order.status,
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Update status for Order failed',
            };
        }
    }
    async getOrderByIdUser(requestDTO) {
        try {
            const { _id } = requestDTO;
            const order = await this.orderModel.find({ userID: _id }).populate([
                {
                    path: 'listProduct',
                    populate: [
                        {
                            path: 'productID',
                            model: 'Product',
                            select: ['productName', 'price'],
                        },
                        { path: 'colorID', model: 'Color', select: 'name' },
                        { path: 'sizeID', model: 'Size', select: 'name' },
                    ],
                },
            ]);
            return order;
        }
        catch (error) {
            return;
        }
    }
    async getMonthlyRevenue(year, month) {
        const startOfMonth = new Date(year, month - 1, 1);
        const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);
        const result = await this.orderModel.aggregate([
            {
                $match: {
                    bookingDate: {
                        $gte: startOfMonth,
                        $lte: endOfMonth,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalPrice' },
                },
            },
        ]);
        return result.length > 0 ? result[0].totalRevenue : 0;
    }
    async getAnnualRevenue(year) {
        const monthlyRevenues = [];
        for (let month = 1; month <= 12; month++) {
            const totalRevenue = await this.getMonthlyRevenue(year, month);
            monthlyRevenues.push(totalRevenue);
        }
        return monthlyRevenues;
    }
    async top10ProductBestSaler() {
        const orders = await this.orderModel.find().populate([
            {
                path: 'listProduct',
                populate: [
                    {
                        path: 'productID',
                        model: 'Product',
                        select: ['productName', 'price'],
                    },
                ],
            }
        ]);
        const listTopProduct = [];
        orders.map((item) => {
            item.listProduct.map((item) => {
                const listID = listTopProduct.map((itemList) => {
                    return itemList.id;
                });
                if (!listID.includes(item.productID._id)) {
                    listTopProduct.push({
                        id: item.productID._id,
                        productName: item.productID.productName,
                        quantity: item.quantityProduct
                    });
                }
                else {
                    listTopProduct.map((itemList) => {
                        if (itemList.id == item.productID._id) {
                            itemList.quantity += item.quantityProduct;
                        }
                    });
                }
            });
        });
        return listTopProduct.sort((a, b) => b.quantity - a.quantity).slice(0, 10);
        ;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
//# sourceMappingURL=order.service.js.map