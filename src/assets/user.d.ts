// 用户信息实体

type userType = {
    id: number;
    userName: string;
    userAccount: string;
    avatarUrl?: string;
    gender: number;
    // 在数据里定义的类型是Integer 这里是string why？
    userState: string;
    role: string;
    
    tag: string[];
    createTime: Date;
}