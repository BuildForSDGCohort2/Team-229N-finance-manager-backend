"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_1 = require("../controller/transaction");
const helpers_1 = require("../helpers/helpers");
const router = express_1.Router();
router.route('/buyasset').post(helpers_1.auth, transaction_1.buyAsset);
router.route('/sellasset').post(helpers_1.auth, transaction_1.sellAsset);
router.route('/buystock').post(helpers_1.auth, transaction_1.buyStock);
router.route('/sellstock').post(helpers_1.auth, transaction_1.sellStock);
router.route('/getInitialData/:id').get(helpers_1.auth, transaction_1.getInitialData);
router.route('/payexpense').post(helpers_1.auth, transaction_1.payExpense);
exports.default = router;
