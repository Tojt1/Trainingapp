import sqlalchemy
from sqlalchemy. orm import Session
from database import engine
from models import User, Exercise
import exceptions

def sign_up(user_inf, password):
    try:
        with Session(engine) as session:
            user = User(name=user_inf.name,
                        email=user_inf.email,
                        password=password)

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
    with Session(engine) as session:
        return session.execute(sqlalchemy.select(Exercise)).scalars().all()