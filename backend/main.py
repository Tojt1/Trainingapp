from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import services
from schemas import Register, Login, AddExercise, WorkoutPlan, Workout
import exceptions


app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],)

@app.get("/hi")
def hello_world():
    return {"inf":"hello world"}

@app.post("/register")
def register_user(user:Register):
    try:
        return services.register(user)
    except exceptions.InvalidEmailError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.HashingPasswordError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.CheckingPasswordError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.RegisterError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@app.post("/login")
def login_user(user:Login):
    try:
        return services.login(user)

    except exceptions.InvalidEmailError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.InvalidPasswordError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.LoginError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@app.post("/exercises")
def add_new_exercise(exercise:AddExercise):
    try:
        return {"information": "pomyslnie utworzono"}
    except exceptions.CreateExerciseError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@app.get("/exercises")
def get_all_exercises():
    try:
        return services.get_exercises()
    except exceptions.GetExercisesError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@app.post("/workoutplan")
def create_workout_plan(data:WorkoutPlan):
    try:
        return services.create_workout(data)
    except exceptions.AddWorkoutError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
@app.get("/workoutplan/{id}")
def get_workout_plan(workout_plan_id):
    return services.get_workout_plan_byid(workout_plan_id)

@app.post("/workout")
def start_workout(jwt, workout_plan:Workout):
    print(workout_plan.id, "tttttt")
    services.workout(jwt, workout_plan)
@app.post("/dashboard")
def shows_dashboard(jwt):
    return services.dashboard(jwt)