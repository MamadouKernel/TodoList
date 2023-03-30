from pydantic import BaseModel

class Task(BaseModel):
    title: str
    description: str
    completed: bool = False
