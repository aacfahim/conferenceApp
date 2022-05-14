"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const express_1 = require("express");
const firestore_1 = require("../firestore");
const router = (0, express_1.Router)();
exports.EventController = router;
// CRUD
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const documentData = yield firestore_1.db.collection('events').get();
    const result = documentData.docs.map((d) => (Object.assign({ id: d.id }, d.data())));
    res.json(result);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const documentSnap = yield firestore_1.db.collection('events').doc(req.params.id).get();
    if (!documentSnap.exists) {
        return res.status(404).json({ error: 'Event Not Found' });
    }
    res.json(Object.assign({ id: documentSnap.id }, documentSnap.data()));
}));
