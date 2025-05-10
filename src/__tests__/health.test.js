import { CheckCharacterHealth } from '../health.js';

const dataList = [
    [
        {name: 'Маг', health: 90}, "healthy"
    ],
    [
        {name: 'Kim', health: 30}, "wounded"
    ],
    [
        {name: 'Jak', health: 8}, "critical"
    ],
    [
        {name: 'Georgy', health: 100}, "healthy"
    ],
    [
        {name: 'Mark', health: 50}, "wounded"
    ],
    [
        {name: 'Jak', health: 15}, "wounded"
    ],
]

test.each(dataList)('character health', (data, expected) => {
    const result = CheckCharacterHealth(data);
    expect(result).toBe(expected);
});