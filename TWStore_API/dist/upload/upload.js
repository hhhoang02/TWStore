"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyAcP-f3nqlV5im7DZcTheVvoNj4t3SNKC8",
    authDomain: "twstore-f4ae5.firebaseapp.com",
    projectId: "twstore-f4ae5",
    storageBucket: "twstore-f4ae5.appspot.com",
    messagingSenderId: "329976951900",
    appId: "1:329976951900:web:d68ae90d239fe24ca66299"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const storage = (0, storage_1.getStorage)(app);
const uploadImage = async (files, cate) => {
    const storageRef = (0, storage_1.ref)(storage, `${cate}/` + files.originalname);
    const uploadTask = await (0, storage_1.uploadBytesResumable)(storageRef, files.buffer);
    let url = (0, storage_1.getDownloadURL)(uploadTask.ref).then((downloadURL) => {
        return downloadURL;
    });
    return url;
};
exports.default = uploadImage;
//# sourceMappingURL=upload.js.map