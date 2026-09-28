from sqlalchemy. orm import Session
from database import engine
from models import User

def sign_up(user_inf, password):
    with Session(engine) as session:
        user = User(name=user_inf.name,
                    email=user_inf.email,
                    password=password)

        session.add(user)
        session.commit()