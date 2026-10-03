from pydantic import BaseModel

class Register(BaseModel):
    name:str
    email:str
    password:str

class Login(BaseModel):
    email:str
    password:str

class AddExercise(BaseModel):
    name:str

class WorkoutPlanExercises(BaseModel):
    exercise_id:int
    weight:float
    reps:int

class WorkoutPlan(BaseModel):
    name: str
    exercises: list[WorkoutPlanExercises]

class Workout(BaseModel):
    id: int