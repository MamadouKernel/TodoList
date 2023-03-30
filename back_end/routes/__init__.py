from fastapi import APIRouter

from controllers.tasks_controller import (
    create_task,
    read_task,
    read_tasks,
    update_task,
    delete_task
)

from models.task import Task

router = APIRouter()

@router.post("/tasks/")
async def create_task_route(task: Task):
    return create_task(task)

@router.get("/tasks/")
async def read_tasks_route():
    return read_tasks()

@router.get("/tasks/{task_id}")
async def read_task_route(task_id: int):
    return read_task(task_id)

@router.put("/tasks/{task_id}")
async def update_task_route(task_id: int, task: Task):
    return update_task(task_id, task)

@router.delete("/tasks/{task_id}")
async def delete_task_route(task_id: int):
    return delete_task(task_id)
