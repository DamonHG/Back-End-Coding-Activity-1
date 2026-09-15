/**
 * This module is responsible for managing player data.
 */

import { Player } from "../app";

export function playerPerformanceRating(player: Player): number {
    const totalGames = player.wins + player.losses;

    if (totalGames === 0) {
        return 0;
    }
    const rating = (player.wins / totalGames) * 100 + (player.totalScore / totalGames);

    return parseFloat(rating.toFixed(2));
}