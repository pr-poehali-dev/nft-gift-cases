import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [openingCase, setOpeningCase] = useState(false);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [revealedItem, setRevealedItem] = useState<any>(null);
  const [showReward, setShowReward] = useState(false);

  const caseTypes = [
    {
      id: 'basic',
      name: 'Базовый кейс',
      price: 100,
      rarity: 'common',
      color: 'bg-gradient-to-br from-gaming-blue-600 to-gaming-blue-700',
      glowColor: 'shadow-gaming-blue-500/50',
      icon: 'Package'
    },
    {
      id: 'rare',
      name: 'Редкий кейс',
      price: 500,
      rarity: 'rare',
      color: 'bg-gradient-to-br from-gaming-purple-500 to-gaming-purple-600',
      glowColor: 'shadow-gaming-purple-500/50',
      icon: 'Gift'
    },
    {
      id: 'legendary',
      name: 'Легендарный кейс',
      price: 1000,
      rarity: 'legendary',
      color: 'bg-gradient-to-br from-gaming-gold-500 to-gaming-gold-600',
      glowColor: 'shadow-gaming-gold-500/50',
      icon: 'Crown'
    }
  ];

  const nftItems = [
    {
      id: 1,
      name: 'Космический меч',
      rarity: 'legendary',
      image: '/img/85e3e806-c9ff-48ab-9896-963acee3b2a5.jpg',
      price: 2500
    },
    {
      id: 2,
      name: 'Кристалл силы',
      rarity: 'rare',
      image: '/img/85e3e806-c9ff-48ab-9896-963acee3b2a5.jpg',
      price: 800
    },
    {
      id: 3,
      name: 'Энергетический щит',
      rarity: 'common',
      image: '/img/85e3e806-c9ff-48ab-9896-963acee3b2a5.jpg',
      price: 150
    }
  ];

  const playerStats = {
    level: 42,
    experience: 75,
    balance: 5420,
    casesOpened: 127,
    rareItems: 23
  };

  const handleOpenCase = (caseId: string) => {
    setSelectedCase(caseId);
    setOpeningCase(true);
    
    setTimeout(() => {
      const randomItem = nftItems[Math.floor(Math.random() * nftItems.length)];
      setRevealedItem(randomItem);
      setShowReward(true);
      setOpeningCase(false);
      
      setTimeout(() => {
        setShowReward(false);
        setRevealedItem(null);
        setSelectedCase(null);
      }, 4000);
    }, 2000);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-gaming-gold-500 bg-gaming-gold-500/10';
      case 'rare': return 'border-gaming-purple-500 bg-gaming-purple-500/10';
      default: return 'border-gaming-blue-500 bg-gaming-blue-500/10';
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-gaming-gold-500 text-white';
      case 'rare': return 'bg-gaming-purple-500 text-white';
      default: return 'bg-gaming-blue-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark-900 via-gaming-blue-900 to-gaming-dark-800">
      {/* Header */}
      <header className="relative z-10 bg-gaming-dark-800/80 backdrop-blur-sm border-b border-gaming-blue-600/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-gaming-cyan-400 to-gaming-blue-400 bg-clip-text text-transparent">
                NFT Cases
              </div>
              <Badge variant="outline" className="border-gaming-cyan-500 text-gaming-cyan-400">
                BETA
              </Badge>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gaming-cyan-400">
                <Icon name="Coins" size={20} />
                <span className="font-semibold">{playerStats.balance.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-gaming-gold-400">
                <Icon name="Star" size={20} />
                <span className="font-semibold">Уровень {playerStats.level}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gaming-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gaming-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gaming-cyan-400 via-gaming-blue-400 to-gaming-purple-400 bg-clip-text animate-shimmer text-blue-400">Открой прямо сейчас</h1>
          <p className="text-xl text-gaming-blue-200 mb-8 max-w-2xl mx-auto font-semibold">Открывай и выигрывай свой первый NFT - подарок</p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-cyan-400">{playerStats.casesOpened}</div>
              <div className="text-gaming-blue-300">Кейсов открыто</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-purple-400">{playerStats.rareItems}</div>
              <div className="text-gaming-blue-300">Редких предметов</div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-gaming-blue-300 mb-2">
              <span>Опыт до следующего уровня</span>
              <span>{playerStats.experience}%</span>
            </div>
            <Progress value={playerStats.experience} className="h-2 bg-gaming-dark-800" />
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 text-gaming-cyan-400 font-bold">Кейсы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {caseTypes.map((caseType) => (
              <motion.div
                key={caseType.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card 
                  className={`relative overflow-hidden border-2 ${getRarityColor(caseType.rarity)} bg-gaming-dark-800/50 backdrop-blur-sm transition-all duration-300`}
                >
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-24 h-24 mx-auto mb-4 ${caseType.color} rounded-full flex items-center justify-center shadow-2xl ${caseType.glowColor}`}
                      animate={{ 
                        y: [0, -10, 0],
                        rotateY: openingCase && selectedCase === caseType.id ? [0, 360] : 0
                      }}
                      transition={{ 
                        y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                        rotateY: { duration: 2, ease: "easeInOut" }
                      }}
                    >
                      <Icon name={caseType.icon as any} size={40} className="text-white" />
                    </motion.div>
                    <CardTitle className="text-gaming-cyan-400">{caseType.name}</CardTitle>
                    <CardDescription className="text-gaming-blue-300">
                      {caseType.price.toLocaleString()} монет
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className={`mb-4 ${getRarityBadge(caseType.rarity)}`}>
                      {caseType.rarity === 'legendary' ? 'Легендарный' : 
                       caseType.rarity === 'rare' ? 'Редкий' : 'Обычный'}
                    </Badge>
                    <Button 
                      onClick={() => handleOpenCase(caseType.id)}
                      disabled={openingCase}
                      className={`w-full ${caseType.color} hover:opacity-90 transition-opacity shadow-lg`}
                    >
                      {openingCase && selectedCase === caseType.id ? (
                        <>
                          <Icon name="Loader2" size={20} className="animate-spin mr-2" />
                          Открываю...
                        </>
                      ) : (
                        <>
                          <Icon name="Package" size={20} className="mr-2" />
                          Открыть кейс
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Collection Preview */}
      <section className="py-16 bg-gaming-dark-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gaming-cyan-400 mb-4">
              Коллекция NFT
            </h2>
            <p className="text-gaming-blue-300 max-w-2xl mx-auto">
              Редкие цифровые артефакты ждут своих владельцев. Каждый предмет уникален и может стать частью вашей коллекции.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nftItems.map((item) => (
              <Card 
                key={item.id} 
                className={`relative overflow-hidden border-2 ${getRarityColor(item.rarity)} bg-gaming-dark-800/50 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark-900/50 to-transparent"></div>
                  <Badge className={`absolute top-4 right-4 ${getRarityBadge(item.rarity)}`}>
                    {item.rarity === 'legendary' ? 'Легендарный' : 
                     item.rarity === 'rare' ? 'Редкий' : 'Обычный'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-gaming-cyan-400">{item.name}</CardTitle>
                  <CardDescription className="text-gaming-blue-300">
                    {item.price.toLocaleString()} монет
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 border-gaming-cyan-500 text-gaming-cyan-400 hover:bg-gaming-cyan-500/10">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Просмотр
                    </Button>
                    <Button size="sm" className="flex-1 bg-gaming-blue-600 hover:bg-gaming-blue-700">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gaming-dark-800/50 border-gaming-blue-600/30 hover:border-gaming-cyan-500/50 transition-colors">
              <CardHeader className="text-center">
                <Icon name="Package" size={32} className="text-gaming-cyan-400 mx-auto mb-2" />
                <CardTitle className="text-gaming-cyan-400">Инвентарь</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gaming-cyan-500 text-gaming-cyan-400 hover:bg-gaming-cyan-500/10">
                  Открыть
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gaming-dark-800/50 border-gaming-blue-600/30 hover:border-gaming-purple-500/50 transition-colors">
              <CardHeader className="text-center">
                <Icon name="ArrowUpCircle" size={32} className="text-gaming-purple-400 mx-auto mb-2" />
                <CardTitle className="text-gaming-purple-400">Апгрейд</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gaming-purple-500 text-gaming-purple-400 hover:bg-gaming-purple-500/10">
                  Улучшить
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gaming-dark-800/50 border-gaming-blue-600/30 hover:border-gaming-gold-500/50 transition-colors">
              <CardHeader className="text-center">
                <Icon name="Store" size={32} className="text-gaming-gold-400 mx-auto mb-2" />
                <CardTitle className="text-gaming-gold-400">Торговля</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gaming-gold-500 text-gaming-gold-400 hover:bg-gaming-gold-500/10">
                  Торговать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gaming-dark-800/50 border-gaming-blue-600/30 hover:border-gaming-cyan-500/50 transition-colors">
              <CardHeader className="text-center">
                <Icon name="Users" size={32} className="text-gaming-cyan-400 mx-auto mb-2" />
                <CardTitle className="text-gaming-cyan-400">Обмен</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gaming-cyan-500 text-gaming-cyan-400 hover:bg-gaming-cyan-500/10">
                  Обменять
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Opening Modal */}
      <AnimatePresence>
        {showReward && revealedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gaming-dark-900/90 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gaming-dark-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full mx-4 text-center border-2 border-gaming-cyan-500/50"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <div className="text-2xl font-bold text-gaming-cyan-400 mb-2">
                  🎉 Поздравляем!
                </div>
                <div className="text-gaming-blue-300">
                  Вы получили редкий предмет:
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className={`w-32 h-32 mx-auto mb-4 ${getRarityColor(revealedItem.rarity)} rounded-2xl overflow-hidden shadow-2xl`}>
                  <img 
                    src={revealedItem.image} 
                    alt={revealedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl font-bold text-gaming-cyan-400 mb-2">
                  {revealedItem.name}
                </div>
                <Badge className={`${getRarityBadge(revealedItem.rarity)}`}>
                  {revealedItem.rarity === 'legendary' ? 'Легендарный' : 
                   revealedItem.rarity === 'rare' ? 'Редкий' : 'Обычный'}
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gaming-gold-400 font-semibold"
              >
                Стоимость: {revealedItem.price.toLocaleString()} монет
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gaming-dark-800/80 border-t border-gaming-blue-600/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gaming-blue-300">
            © 2024 NFT Cases. Исследуй космос цифровых артефактов.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;