import React, { useState } from 'react';
import { ArrowLeft, Heart, Coins, Users, Star, Clock, TrendingUp, MessageCircle, Calendar, Camera, Scissors, Sparkles } from 'lucide-react';
import { Agent } from '../types';

const beautyAgents: Agent[] = [
  {
    id: '1',
    name: '高级面部护理师Elena',
    description: '专业面部深层护理，抗衰老管理，定制化面部SPA方案，解决各种肌肤老化问题',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '面部护理',
    likes: 456,
    price: 0.08,
    bossCount: 1250
  },
  {
    id: '2',
    name: '身体塑形顾问Sophia',
    description: '专业身体护理管理，塑形按摩技术指导，身体线条雕塑方案定制',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '身体护理',
    likes: 389,
    price: 0.09,
    bossCount: 890
  },
  {
    id: '3',
    name: '皮肤管理专家Victoria',
    description: '医美级皮肤管理，问题肌肤诊断治疗，光电美容项目规划和术后护理指导',
    avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '皮肤管理',
    likes: 523,
    price: 0.09,
    bossCount: 567
  },
  {
    id: '4',
    name: 'SPA理疗师Isabella',
    description: '高端SPA疗程设计，芳香疗法，深层放松按摩，为客户提供身心灵全方位护理体验',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: 'SPA理疗',
    likes: 445,
    price: 0.08,
    bossCount: 723
  },
  {
    id: '5',
    name: '抗衰老顾问Grace',
    description: '专业抗衰老方案定制，胶原蛋白管理，紧致提升项目规划，延缓肌肤衰老进程',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '抗衰管理',
    likes: 612,
    price: 0.09,
    bossCount: 1450
  },
  {
    id: '6',
    name: '美体塑形师Olivia',
    description: '专业美体塑形，淋巴排毒，纤体瘦身项目设计，打造完美身材曲线',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    category: '美体塑形',
    likes: 378,
    price: 0.09,
    bossCount: 456
  }
];

interface MyAgentsPageProps {
  onBack: () => void;
}

const MyAgentsPage: React.FC<MyAgentsPageProps> = ({ onBack }) => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '面部护理': return <Sparkles className="w-4 h-4" />;
      case '身体护理': return <Star className="w-4 h-4" />;
      case '皮肤管理': return <Camera className="w-4 h-4" />;
      case 'SPA理疗': return <MessageCircle className="w-4 h-4" />;
      case '抗衰管理': return <TrendingUp className="w-4 h-4" />;
      case '美体塑形': return <Scissors className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '面部护理': return 'bg-pink-100 text-pink-800';
      case '身体护理': return 'bg-purple-100 text-purple-800';
      case '皮肤管理': return 'bg-rose-100 text-rose-800';
      case 'SPA理疗': return 'bg-orange-100 text-orange-800';
      case '抗衰管理': return 'bg-blue-100 text-blue-800';
      case '美体塑形': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-200 mb-4"
        >
          <ArrowLeft size={20} />
          <span>返回</span>
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              我的美业团队
            </h1>
            <p className="text-gray-600 mt-2">专业美业AI员工，助力店铺运营</p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">{beautyAgents.length}</div>
              <div className="text-gray-500">团队成员</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-500">在线服务</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">98%</div>
              <div className="text-gray-500">客户满意度</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-pink-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">今日预约</div>
                  <div className="text-xl font-bold text-gray-900">23</div>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">客户咨询</div>
                  <div className="text-xl font-bold text-gray-900">156</div>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-rose-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-rose-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">本月营收</div>
                  <div className="text-xl font-bold text-gray-900">¥28.5K</div>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">服务时长</div>
                  <div className="text-xl font-bold text-gray-900">847h</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Employees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyAgents.map((agent) => (
              <div 
                key={agent.id} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAgent(agent)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{agent.name}</h3>
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(agent.category)}`}>
                      {getCategoryIcon(agent.category)}
                      <span>{agent.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {agent.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Heart className="w-4 h-4 mr-1 text-red-400" />
                      <span>{agent.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Coins className="w-4 h-4 mr-1 text-yellow-500" />
                      <span>¥{agent.price}/次</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{agent.bossCount}+老板在用</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200 text-sm">
                    立即使用
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
                    设置
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Employee Card */}
          <div className="mt-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-dashed border-pink-300 p-8 text-center hover:border-pink-400 hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-pink-600">+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">添加新员工</h3>
              <p className="text-gray-600 text-sm">从AI员工市场选择更多专业人才</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">员工详情</h3>
              <button
                onClick={() => setSelectedAgent(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="text-center mb-6">
              <img
                src={selectedAgent.avatar}
                alt={selectedAgent.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-pink-100"
              />
              <h4 className="text-lg font-semibold text-gray-900">{selectedAgent.name}</h4>
              <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium mt-2 ${getCategoryColor(selectedAgent.category)}`}>
                {getCategoryIcon(selectedAgent.category)}
                <span>{selectedAgent.category}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">{selectedAgent.description}</p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">服务价格</span>
                <span className="font-semibold text-green-600">¥{selectedAgent.price}/次</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">用户评价</span>
                <span className="font-semibold">{selectedAgent.likes} ❤️</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">使用老板</span>
                <span className="font-semibold">{selectedAgent.bossCount}+</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200">
                立即使用
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                管理
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAgentsPage;