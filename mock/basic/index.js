const {mock} = require('mockjs');

function wrapper(data) {
    return mock({
        code: 0,
        message: '查询成功',
        data,
    });
}

function pageWrapper(list) {
    return wrapper({
        page_num: 1,
        page_size: 10,
        total: 100,
        ...list,
    });
}

module.exports = {
    wrapper,
    pageWrapper,
}