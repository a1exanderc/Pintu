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

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Pintu客服',
    description: '随时随地响应，解答各类问题',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '智能客服',
    likes: 134,
    featured: true,
    price: 0.02,
    bossCount: 1250
  },
  {
    id: '2',
    name: '文档翻译助手',
    description: '多语言文档翻译，一键完成各类语言文档翻译',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '智能客服',
    likes: 166,
    price: 0.08,
    bossCount: 890
  },
  {
    id: '3',
    name: '智能通话洞察分析助手',
    description: '精准识别通话内容，深度分析客户需求',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '智能客服',
    likes: 212,
    price: 0.09,
    bossCount: 567
  },
  {
    id: '4',
    name: '小红书文案助手',
    description: '专业小红书文案创作，提升内容吸引力',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '营销',
    likes: 89,
    price: 0.05,
    bossCount: 423
  },
  {
    id: '5',
    name: 'UI设计师',
    description: '专业UI界面设计，提供现代化设计方案',
    avatar: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '电商',
    likes: 156,
    featured: true,
    price: 0.09,
    bossCount: 234
  },
  {
    id: '6',
    name: '销售话术专家',
    description: '专业销售话术指导，提升成交率',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '销售',
    likes: 203,
    price: 0.07,
    bossCount: 678
  },
  {
    id: '7',
    name: '数据分析师',
    description: '专业数据分析，洞察业务趋势',
    avatar: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '营销',
    likes: 178,
    price: 0.08,
    bossCount: 345
  },
  {
    id: '8',
    name: 'HR招聘助手',
    description: '智能简历筛选，高效招聘管理',
    avatar: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: 'HR',
    likes: 145,
    featured: true,
    price: 0.09,
    bossCount: 456
  },
  {
    id: '9',
    name: '内容创作助手',
    description: '专业内容创作，多平台适配',
    avatar: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '营销',
    likes: 167,
    price: 0.06,
    bossCount: 789
  },
  {
    id: '10',
    name: '电商运营专家',
    description: '全方位电商运营策略，提升店铺业绩',
    avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '电商',
    likes: 234,
    price: 0.08,
    bossCount: 567
  },
  {
    id: '11',
    name: '美容顾问',
    description: '专业美容护肤建议，个性化美容方案',
    avatar: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '美业',
    likes: 98,
    price: 0.07,
    bossCount: 312
  },
  {
    id: '12',
    name: '健康顾问',
    description: '咨询健康问题，专业健康管理方案',
    avatar: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '美业',
    likes: 156,
    price: 0.06,
    bossCount: 234
  }
];

export const categories: Category[] = [
  { id: 'all', name: '全部', count: agents.length },
  { id: 'smart', name: '智能客服', count: agents.filter(a => a.category === '智能客服').length },
  { id: 'ecommerce', name: '电商', count: agents.filter(a => a.category === '电商').length },
  { id: 'sales', name: '销售', count: agents.filter(a => a.category === '销售').length },
  { id: 'marketing', name: '营销', count: agents.filter(a => a.category === '营销').length },
  { id: 'hr', name: 'HR', count: agents.filter(a => a.category === 'HR').length },
  { id: 'beauty', name: '美业', count: agents.filter(a => a.category === '美业').length }
];