import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    //console.log(event.context);
    const response = await $fetch(`https://prello.paloma-sanchez.com/boards/${event.context.params.boardId}`);
    const shellBoardResponse = [];

    response.columns.forEach(column => {
        shellBoardResponse.push(
            {
                name: column.name,
                length: column.tasks.length
            }
        );
    });
    return shellBoardResponse;
    
});