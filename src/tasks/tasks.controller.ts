import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }
    @Post()
    createTask(
        // @Body() body // return the entire request body as an object.
        @Body('title') title: string, // specifically extract the body parameters. (keys in general).
        @Body('description') description: string,
    ) {
        // console.log('title', title);
        return this.tasksService.createTask(title, description); // return the result back to client.
    }
}
