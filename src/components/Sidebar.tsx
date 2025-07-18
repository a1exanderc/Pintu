import React from 'react';
import { Plus, Compass, Bot, Briefcase, Plug, Database, User, BarChart3 } from 'lucide-react';

interface SidebarProps {
  onPageChange?: (page: 'discover' | 'myagents' | 'workflow' | 'plugins' | 'knowledge' | 'analytics' | 'profile') => void;
  currentPage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onPageChange, currentPage = 'discover' }) => {
  const handleMenuClick = (page: 'discover' | 'myagents' | 'workflow' | 'plugins' | 'knowledge' | 'analytics' | 'profile') => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const menuItems = [
    { icon: Compass, label: '发现人才', page: 'discover' as const },
    { icon: Bot, label: '我的AI员工', page: 'myagents' as const },
    { icon: Briefcase, label: '工作步骤', page: 'workflow' as const },
    { icon: Plug, label: '附加技能', page: 'plugins' as const },
    { icon: Database, label: '企业知识', page: 'knowledge' as const },
    { icon: BarChart3, label: '工作数据', page: 'analytics' as const },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-semibold text-gray-900">Pintu</span>
        </div>
        
        <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2.5 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
          <Plus size={16} />
          <span>直聘AI员工</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => item.page ? handleMenuClick(item.page) : undefined}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } w-full text-left`}
              >
                <item.icon size={18} />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => handleMenuClick('profile')}
          className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 w-full text-left ${
            currentPage === 'profile'
              ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-500'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
            alt="用户头像"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span className="font-medium">个人中心</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;