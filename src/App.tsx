import { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import FeaturedSection from './components/FeaturedSection';
import AgentGrid from './components/AgentGrid';
import ComingSoonPage from './components/ComingSoonPage';
import MyAgentsPage from './components/MyAgentsPage';
import ProfilePage from './components/ProfilePage';
import { agents, categories } from './data/agents';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState<'discover' | 'myagents' | 'workflow' | 'plugins' | 'knowledge' | 'analytics' | 'profile'>('discover');

  const filteredAgents = useMemo(() => {
    let filtered = agents;

    // Filter by category
    if (activeCategory !== 'all') {
      const categoryMap: { [key: string]: string } = {
        'smart': '智能客服',
        'ecommerce': '电商',
        'sales': '销售',
        'marketing': '营销',
        'hr': 'HR',
        'beauty': '美业'
      };
      
      const categoryName = categoryMap[activeCategory];
      if (categoryName) {
        filtered = filtered.filter(agent => agent.category === categoryName);
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  const regularAgents = filteredAgents.filter(agent => !agent.featured);

  const handlePageChange = (page: 'discover' | 'myagents' | 'workflow' | 'plugins' | 'knowledge' | 'analytics' | 'profile') => {
    setCurrentPage(page);
  };

  const handleBackToDiscover = () => {
    setCurrentPage('discover');
  };

  if (currentPage === 'myagents') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
        <MyAgentsPage onBack={handleBackToDiscover} />
      </div>
    );
  }

  if (currentPage === 'profile') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
        <ProfilePage onBack={handleBackToDiscover} />
      </div>
    );
  }

  if (currentPage !== 'discover') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
        <ComingSoonPage feature={currentPage} onBack={handleBackToDiscover} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="flex-1 overflow-y-auto">
          {!searchTerm && activeCategory === 'all' && (
            <FeaturedSection agents={agents} />
          )}
          
          <AgentGrid
            agents={regularAgents}
            title={activeCategory === 'all' ? '更多AI员工' : `${categories.find(c => c.id === activeCategory)?.name} AI员工`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;