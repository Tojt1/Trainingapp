import sqlalchemy
from sqlalchemy. orm import Session, selectinload
from database import engine
from models import User, Exercise, WorkoutPlan, WorkoutPlanExercise, Workouts
import exceptions

def sign_up(user_inf, password):
    try:
        with Session(engine) as session:
            user = User(name=user_inf.name,
                        email=user_inf.email,
                        password=password,
                        age=user_inf.age)

            session.add(user)
            session.commit()
    except Exception as e:
        session.rollback()
        raise exceptions.RegisterError(str(e))

def get_user_password(email):
    with Session(engine) as session:
        query = sqlalchemy.select(User.password).where(User.email == email)
        return session.execute(query).scalar_one_or_none()

def login_user(email):
    with Session(engine) as session:
        query = sqlalchemy.select(User.id, User.name).where(User.email == email)
        return session.execute(query).mappings().one_or_none()

def get_user_inf(user_id):
    with Session(engine) as session:
        query = sqlalchemy.select(User).where(User.id == user_id)
        return session.execute(query).scalar_one_or_none()

def create_exercise(exercise_name):
    try:
        with Session(engine) as session:
            exercise = Exercise(name=exercise_name)
            session.add(exercise)
            session.commit()
    except Exception as e:
        session.rollback()
        raise exceptions.CreateExerciseError(str(e))

def download_exercises():
    try:
        with Session(engine) as session:
            return session.execute(sqlalchemy.select(Exercise)).scalars().all()
    except Exception as e:
        raise exceptions.GetExercisesError(str(e))

def add_workout_plan(data):
    try:
        with Session(engine) as session:
            workout = WorkoutPlan(name=data.name, exercises=[
                WorkoutPlanExercise(excercise_id=exercise.exercise_id,
                                    weight=exercise.weight,
                                    reps=exercise.reps)
                for exercise in data.exercises
            ])

            session.add(workout)
            session.commit()
    except exceptions.AddWorkoutError as e:
        raise exceptions.AddWorkoutError(str(e))

def get_all_user_workouts(user_id):
    with Session(engine) as session:
        query = sqlalchemy.select(Workouts).where(Workouts.user_id == user_id)
        return session.execute(query).mappings().all()

def get_all_workouts(user_id):
    with Session(engine) as session:
        query = sqlalchemy.select(WorkoutPlan).join(WorkoutPlan.workouts).where(Workouts.user_id==user_id)
        return session.scalars(query).all()

def get_workout_plan_by_id(workout_plan_id):
    with Session(engine) as session:
        query = sqlalchemy.select(WorkoutPlan).options(selectinload(WorkoutPlan.exercises).selectinload(WorkoutPlanExercise.excercise)).where(WorkoutPlan.id == workout_plan_id)
        return session.execute(query).scalar_one_or_none()

def add_workout(user_id, workout_plan, created):
    with Session(engine) as session:
        workout = Workouts(user_id=user_id, started=created, workout_plan_id=workout_plan.id)

        session.add(workout)
        session.commit()