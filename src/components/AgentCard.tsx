import React from 'react';
import { Heart, Coins, Users } from 'lucide-react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  featured?: boolean;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, featured = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${featured ? 'border-2 border-blue-500' : ''}`}>
      <div className="flex items-center mb-4">
        <img
          src={agent.avatar}
          alt={agent.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{agent.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {agent.category}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{agent.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-500">
            <Heart className="w-4 h-4 mr-1" />
            <span className="text-sm">{agent.likes}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Coins className="w-4 h-4 mr-1" />
            <span className="text-sm">¥{agent.price}/次</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          聘用
        </button>
      </div>
      
      <div className="mt-2 flex items-center text-gray-500">
        <Users className="w-4 h-4 mr-1" />
        <span className="text-sm">{agent.bossCount}位老板已用</span>
      </div>
    </div>
  );
};

export default AgentCard;