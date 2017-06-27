/**
 * 新用户
 */
class User {
    constructor(
        // 用户账号
        public account: string,
        // 用户密码
        public password: string,
        // 手机号码
        public mobile: string,
        // 电子邮箱
        public email: string,
        // 用户性别(可省略)
        public sex?: string,
        // 用户的省份(可省略)
        public province?: string,
        // 用户的城市(可省略)
        public city?: string,
        // 用户的生日(可省略)
        public birthday?: Date
    ) { }
}

export { User };
