import sendResponse from "../utils/sendResponse.js";


function getOrder(req, res) {
    return sendResponse({
        data:{ order: "ok" },
        status:404,
        message: 'tidak ditemukan'
    }, res)
}

export { getOrder };
