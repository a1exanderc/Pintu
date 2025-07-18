export interface Agent {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: string;
  likes: number;
  featured?: boolean;
  price: number; // 每次工作的价格（元）
  bossCount: number; // 已使用该员工的老板数量
}

export interface Category {
  id: string;
  name: string;
  count?: number;
}