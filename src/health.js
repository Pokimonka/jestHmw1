export function CheckCharacterHealth(characterInfo) {
    if (characterInfo.health > 50) {
        return "healthy";
    } else if (characterInfo.health <= 50 && characterInfo.health >= 15) {
        return "wounded";
    }
    return "critical";
}