const HOMEAD = "/api/homead";

export function getHomeAD(successCallback) {
    fetch(HOMEAD).then((data) => {
        data.json().then((rsp) => {
            successCallback(rsp);
        })
    })
}

export function getHomeList(city, page, successCallback) {
    fetch("/api/homelist/" + encodeURIComponent(city) + "/" + page).then((data) => {
        data.json().then((rsp) => {
            successCallback(rsp);
        })
    })
}

export function getInfoData(id, successCallback) {
    fetch('/api/detail/info/' + id).then((data) => {
        data.json().then((rsp) => {
            successCallback(rsp);
        })
    })
}

export function getCommentData(id, successCallback) {
    fetch('/api/detail/comment/0/' + id).then((data) => {
        data.json().then((rsp) => {
            successCallback(rsp);
        })
    })
}

export function getOrderList(username, successCallback) {
    fetch('/api/orderlist/' + username).then((data) => {
        data.json().then((rsp) => {
            successCallback(rsp);
        })
    })
}
