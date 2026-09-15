/**
 * This module is responsible for managing player data.
 */

export function playerPerformanceRating(player: Player | undefined): number {
    if (player === undefined){
        return 0;
    }
    
    const totalGames = player.wins + player.losses;

    if (totalGames === 0) {
        return 0;
    }
    const rating = (player.wins / totalGames) * 100 + (player.totalScore / totalGames);

    return parseFloat(rating.toFixed(2));
}

export function findPlayer(playerId: string): Player | undefined {
    const idResult: Player | undefined = samplePlayers.find(player => player.id === parseInt(playerId))

    return idResult
}

export interface Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;
}

let samplePlayers =
    [
    {
        id: 1, name: "ShadowStrike", wins: 15, losses: 5, totalScore: 28500,
    },
    {
        id: 2, name: "NoobMaster", wins: 3, losses: 12, totalScore: 4200,
    },
    {
        id: 3, name: "ProGamer99", wins: 0, losses: 0, totalScore: 0
    }
    ];

export {samplePlayers };