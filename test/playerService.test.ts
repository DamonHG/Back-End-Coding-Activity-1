// The service we want to test
import { playerPerformanceRating } from "../src/services/playerService";

describe("playerService tests", () => {
    it("should return player performance rating", () => {
    // Arrange
    const mockPlayer = {
        id: 1, name: "ShadowStrike", wins: 15, losses: 5, totalScore: 28500,
    }

    //act
    const response = playerPerformanceRating(mockPlayer);

    //assert
    expect(response).toBe(1500);
    });

    it("Should return 0 if player has 0 wins and 0 losses", () => {
        const mockPlayer = {
        id: 1, name: "ShadowStrike", wins: 0, losses: 0, totalScore: 28500,
    }

    //act
    const response = playerPerformanceRating(mockPlayer);

    //assert
    expect(response).toBe(0);
    });
});