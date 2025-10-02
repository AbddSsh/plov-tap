import React, { useState, useEffect } from 'react';
import { ChevronLeft, Menu, User, Home, Trophy, Gift, CheckCircle, Clock, Star, Users, Moon, Sun } from 'lucide-react';

const PlovTapperMockup = () => {
  const [riceCount, setRiceCount] = useState(45250);
  const [isRecharging, setIsRecharging] = useState(false);
  const [rechargeTime, setRechargeTime] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Timer for recharging
  useEffect(() => {
    let interval;
    if (isRecharging && rechargeTime > 0) {
      interval = setInterval(() => {
        setRechargeTime(prev => {
          if (prev <= 1) {
            setIsRecharging(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecharging, rechargeTime]);

  const completeTask = (taskId, reward) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks(prev => [...prev, taskId]);
      setRiceCount(prev => prev + reward);
    }
  };

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    bgGradient: isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-gray-100',
    card: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    hover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
  };

  // Profile Page
  const ProfilePage = () => (
    <div className={`pt-20 pb-20 px-4 bg-gradient-to-b ${isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-cyan-100 to-teal-100'} min-h-screen`}>
      <div className="max-w-md mx-auto">
        <div className={`${themeClasses.card} rounded-2xl shadow-xl p-6 mb-6 text-center border ${themeClasses.border}`}>
          <div className="w-24 h-24 bg-gradient-to-b from-cyan-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <User size={32} className="text-white" />
          </div>
          <h2 className={`text-2xl font-bold ${themeClasses.text} mb-2`}>@username</h2>
          <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full px-4 py-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-lg">{riceCount.toLocaleString()} рисинок</span>
          </div>
        </div>

        <div className={`${themeClasses.card} rounded-2xl shadow-xl p-6 border ${themeClasses.border}`}>
          <h3 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>Статистика</h3>
          <div className="space-y-4">
            {[
              { label: 'Всего натапано', value: '125,430 рисинок', icon: '🍚' },
              { label: 'Друзей приглашено', value: '12 человек', icon: '👥' },
              { label: 'Заданий выполнено', value: `${completedTasks.length} из 10`, icon: '✅' },
              { label: 'Участие в розыгрышах', value: '3 билета', icon: '🎟️' }
            ].map(stat => (
              <div key={stat.label} className={`flex items-center justify-between p-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg border ${themeClasses.border}`}>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`font-medium ${themeClasses.textSecondary}`}>{stat.label}</span>
                </div>
                <span className={`font-bold ${themeClasses.text}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Tasks Page
  const TasksPage = () => (
    <div className={`pt-20 pb-20 px-4 bg-gradient-to-b ${isDarkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-teal-100 to-cyan-100'} min-h-screen`}>
      <div className="max-w-md mx-auto">
        <div className={`${themeClasses.card} rounded-2xl shadow-xl p-6 mb-6 border ${themeClasses.border}`}>
          <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6 text-center`}>Задания</h2>
          
          <div className="space-y-4">
            {[
              { id: 1, title: 'Подпишись на канал', reward: 100000, icon: '📢', type: 'social' },
              { id: 2, title: 'Пригласи друга', reward: 10000, icon: '👥', type: 'referral' },
              { id: 3, title: 'Ежедневный вход', reward: 1000, icon: '📅', type: 'daily' },
              { id: 4, title: 'Натапай 10,000 рисинок', reward: 5000, icon: '🍚', type: 'gaming' },
              { id: 5, title: 'Поделись в Story', reward: 5000, icon: '📱', type: 'social' }
            ].map(task => (
              <div key={task.id} className={`flex items-center justify-between p-4 bg-gradient-to-r ${isDarkMode ? 'from-cyan-900/20 to-teal-900/20' : 'from-cyan-50 to-teal-50'} rounded-lg border ${isDarkMode ? 'border-cyan-800' : 'border-cyan-200'}`}>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{task.icon}</span>
                  <div>
                    <h3 className={`font-semibold ${themeClasses.text}`}>{task.title}</h3>
                    <p className="text-sm text-green-600 font-bold">+{task.reward.toLocaleString()} рисинок</p>
                  </div>
                </div>
                <button
                  onClick={() => completeTask(task.id, task.reward)}
                  disabled={completedTasks.includes(task.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    completedTasks.includes(task.id)
                      ? 'bg-green-200 text-green-700 cursor-not-allowed dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white hover:from-cyan-600 hover:to-teal-700 shadow-lg'
                  }`}
                >
                  {completedTasks.includes(task.id) ? 'Выполнено' : 'Выполнить'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={`${themeClasses.card} rounded-2xl shadow-xl p-6 border ${themeClasses.border}`}>
          <h3 className={`text-xl font-bold mb-4 ${themeClasses.text} flex items-center`}>
            <Users className="mr-2 text-cyan-500" size={24} />
            Реферальная программа
          </h3>
          <div className={`${isDarkMode ? 'bg-cyan-900/20' : 'bg-cyan-50'} rounded-lg p-4 mb-4 border ${isDarkMode ? 'border-cyan-800' : 'border-cyan-200'}`}>
            <p className={`text-sm ${themeClasses.textSecondary} mb-2`}>Твоя реферальная ссылка:</p>
            <div className={`${themeClasses.card} rounded px-3 py-2 font-mono text-sm break-all border ${themeClasses.border}`}>
              https://t.me/plov_tapper_bot?start=ref_12345
            </div>
            <button className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all shadow-lg">
              Поделиться ссылкой
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className={`${themeClasses.textSecondary} font-medium`}>Приглашено друзей:</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent">12</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      <Header />
      <BurgerMenu />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'tasks' && <TasksPage />}
      {currentPage === 'lottery' && <LotteryPage />}
      
      <Footer />
    </div>
  );
};

export default PlovTapperMockup;