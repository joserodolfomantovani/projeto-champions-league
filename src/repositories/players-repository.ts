import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    club: 'Paris Saint-Germain',
    nationality: 'Argentina',
    position: 'Forward',
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    club: 'Al Nassr',
    nationality: 'Portugal',
    position: 'Forward',
    statistics: {
      Overall: 91,
      Pace: 87,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 77
    }
  },
  {
    id: 3,
    name: 'Neymar Jr',
    club: 'Paris Saint-Germain',
    nationality: 'Brazil',
    position: 'Forward',
    statistics: {
      Overall: 91,
      Pace: 91,
      Shooting: 85,
      Passing: 87,
      Dribbling: 94,
      Defending: 36,
      Physical: 62
    }
  },
  {
    id: 4,
    name: 'Kevin De Bruyne',
    club: 'Manchester City',
    nationality: 'Belgium',
    position: 'Midfielder',
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 88,
      Defending: 64,
      Physical: 78
    }
  },
  {
    id: 5,
    name: 'Robert Lewandowski',
    club: 'FC Barcelona',
    nationality: 'Poland',
    position: 'Forward',
    statistics: {
      Overall: 92,
      Pace: 78,
      Shooting: 93,
      Passing: 80,
      Dribbling: 86,
      Defending: 44,
      Physical: 82
    }
  },
  {
    id: 6,
    name: 'Kylian Mbappé',
    club: 'Paris Saint-Germain',
    nationality: 'France',
    position: 'Forward',
    statistics: {
      Overall: 92,
      Pace: 97,
      Shooting: 88,
      Passing: 80,
      Dribbling: 92,
      Defending: 39,
      Physical: 76
    }
  }
];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const player = database.find(player => player.id === id);
    return player 
}

export const insertPlayer = async (player: PlayerModel): Promise<void> => {
    database.push(player);
}

export const deletePlayer = async (id: number) : Promise<boolean> => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true
    } 

    return false
  }

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const playerIndex = database.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
         return database[playerIndex];
    }else{
        return {}
    }
    
    
}
