import axios from 'axios'

const Get = (url: string) => {
    return (target, key, descriptor: PropertyDescriptor) => {
        const func = descriptor.value
        axios.get(url).then(res => {
            func(res, {
                status: 200,
                success: true
            })
        }).catch(e => {
            func(e, {
                status: 500,
                success: false
            })
        })
    }
}

class Controller {
    constructor() {

    }

    @Get('https://v.api.aa1.cn/api/yiyan/index.php')
    getList(res, status) {
        console.log(res.data, status)
    }
}