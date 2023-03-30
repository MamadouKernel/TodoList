from typing import Dict

from models.task import Task

# Dictionnaire pour stocker les tâches
tasks_db: Dict[int, Task] = {}
task_id = 0

def create_task(task: Task):
    global task_id
    task_id += 1
    tasks_db[task_id] = task
    return {"task_id": task_id}

def read_tasks():
    return tasks_db

def read_task(task_id: int):
    if task_id not in tasks_db:
        return {"error": "Tâche non trouvée"}
    return tasks_db[task_id]

def update_task(task_id: int, task: Task):
    if task_id not in tasks_db:
        return {"error": "Tâche non trouvée"}
    tasks_db[task_id] = task
    return {"message": "Tâche mise à jour avec succès"}

def delete_task(task_id: int):
    if task_id not in tasks_db:
        return {"error": "Tâche non trouvée"}
    del tasks_db[task_id]
    return {"message": "Tâche supprimée avec succès"}
