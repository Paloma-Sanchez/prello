import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    const response = await $fetch('https://prello.paloma-sanchez.com/boards');
    let userId = getCookie(event, 'userId') || 0
    const finalResponse = [];
    response.forEach(board => {
        finalResponse.push(
            {
                name: board.name,
                id:board.id,
                url:board.url,
                starred: board.starred
            }
        );
    });
    return finalResponse;
});