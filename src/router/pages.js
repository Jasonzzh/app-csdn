export default {
    homeIndex: () => import('../pages/index'),
    index: () => import('../pages/index/index'),
    mine: () => import('../pages/mine/mine'),
    questionDetails: () => import('../pages/questionDetails/questionDetails'),
    writeAnswer: () => import('../pages/writeAnswer/writeAnswer'),
    login: () => import('../pages/login/login'),
    find: () => import('../pages/find/find'),
    message: () => import('../pages/message/message')
}