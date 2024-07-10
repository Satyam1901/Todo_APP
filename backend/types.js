const zod = require('zod');

 const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
 })

 const updateTodo = zod.object({
_id: zod.string(),
 })

 const completeTodo = zod.object({
    title: zod.string(),
    description: zod.string()
 })

 module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
 }