import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Flower = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" width="50" height="50">
    {/* Center */}
    <circle cx="50" cy="50" r="10" fill="#FFD700" />
    {/* Petals */}
    <path d="M50 20 Q60 35 50 50 Q40 35 50 20" fill="#FFB6C6" />
    <path d="M50 80 Q60 65 50 50 Q40 65 50 80" fill="#FFB6C6" />
    <path d="M20 50 Q35 60 50 50 Q35 40 20 50" fill="#FFB6C6" />
    <path d="M80 50 Q65 60 50 50 Q65 40 80 50" fill="#FFB6C6" />
    <path d="M28 28 Q45 45 50 50 Q35 35 28 28" fill="#FFC0CB" />
    <path d="M72 28 Q55 45 50 50 Q65 35 72 28" fill="#FFC0CB" />
    <path d="M28 72 Q45 55 50 50 Q35 65 28 72" fill="#FFC0CB" />
    <path d="M72 72 Q55 55 50 50 Q65 65 72 72" fill="#FFC0CB" />
  </svg>
);

const NameGenerator = () => {
  const [generatedNames, setGeneratedNames] = useState([]);
  const [nameType, setNameType] = useState('fantasy');

  const firstNames = {
    fantasy: ['Aeris', 'Thorne', 'Lyra', 'Zephyr', 'Kai', 'Nova', 'Raven', 'Storm', 'Echo', 'Sage'],
    scifi: ['Neo', 'Zenith', 'Atlas', 'Nova', 'Vega', 'Orion', 'Aurora', 'Cyrus', 'Phoenix', 'Ceres'],
    medieval: ['Roland', 'Cedric', 'Galahad', 'Guinevere', 'Edmund', 'Aldwin', 'Rosalind', 'Millicent', 'Benedict', 'Eleanor']
  };

  const lastNames = {
    fantasy: ['Shadowweaver', 'Stormwind', 'Moonshadow', 'Brightstar', 'Winterborn', 'Flameheart', 'Nightwalker', 'Starweaver', 'Frostweave', 'Dawnseeker'],
    scifi: ['Quantum', 'Starling', 'Vector', 'Prime', 'Tesla', 'Binary', 'Matrix', 'Nexus', 'Circuit', 'Cipher'],
    medieval: ['Blackwood', 'Ironhand', 'Strongbow', 'Whitehall', 'Lancaster', 'Winchester', 'Sheffield', 'Canterbury', 'Westminster', 'Fairfax']
  };

  const generateName = () => {
    const firstName = firstNames[nameType][Math.floor(Math.random() * firstNames[nameType].length)];
    const lastName = lastNames[nameType][Math.floor(Math.random() * lastNames[nameType].length)];
    const newName = `${firstName} ${lastName}`;
    setGeneratedNames(prev => [newName, ...prev].slice(0, 5));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 to-yellow-200 p-6 relative overflow-hidden">
      {/* Decorative flowers */}
      <Flower className="absolute top-4 left-4 animate-pulse" />
      <Flower className="absolute top-4 right-4 animate-pulse" />
      <Flower className="absolute bottom-4 left-4 animate-pulse" />
      <Flower className="absolute bottom-4 right-4 animate-pulse" />
      <Flower className="absolute top-1/4 left-8 scale-75 animate-bounce" />
      <Flower className="absolute top-1/4 right-8 scale-75 animate-bounce" />
      <Flower className="absolute bottom-1/4 left-8 scale-75 animate-bounce" />
      <Flower className="absolute bottom-1/4 right-8 scale-75 animate-bounce" />
      
      <Card className="w-full max-w-md bg-white/90 backdrop-blur relative">
        <div className="absolute -top-6 -left-6">
          <Flower className="scale-75" />
        </div>
        <div className="absolute -top-6 -right-6">
          <Flower className="scale-75" />
        </div>
        
        <CardHeader className="relative">
          <CardTitle className="text-3xl text-center">Name Generator</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-2xl font-medium block">Name Type</label>
            <Select value={nameType} onValueChange={setNameType}>
              <SelectTrigger className="text-xl h-14">
                <SelectValue placeholder="Select name type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fantasy" className="text-xl">Fantasy</SelectItem>
                <SelectItem value="scifi" className="text-xl">Sci-Fi</SelectItem>
                <SelectItem value="medieval" className="text-xl">Medieval</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={generateName} 
            className="w-full text-2xl py-6 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
          >
            Generate Name
          </Button>

          {generatedNames.length > 0 && (
            <div className="mt-4 space-y-3">
              <h3 className="text-2xl font-medium">Recent Names:</h3>
              <ul className="space-y-2">
                {generatedNames.map((name, index) => (
                  <li 
                    key={index} 
                    className="text-2xl p-4 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-lg shadow-sm"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        
        <div className="absolute -bottom-6 -left-6">
          <Flower className="scale-75" />
        </div>
        <div className="absolute -bottom-6 -right-6">
          <Flower className="scale-75" />
        </div>
      </Card>
    </div>
  );
};

export default NameGenerator;
