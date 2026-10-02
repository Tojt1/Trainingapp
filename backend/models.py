import sqlalchemy
from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped, relationship
from sqlalchemy import Integer, String, DateTime, ForeignKey, Float
import datetime

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__="users"

    id:Mapped[int] = mapped_column(Integer, primary_key=True)
    name:Mapped[str] = mapped_column(String)
    age:Mapped[int] = mapped_column(Integer, nullable=True)
    email:Mapped[str] = mapped_column(String, nullable=False)
    password:Mapped[str] = mapped_column(String, nullable=False)
    created:Mapped[datetime.datetime] = mapped_column(DateTime, server_default=sqlalchemy.func.now())
    workouts: Mapped[list["Workouts"]] = relationship(
        back_populates="author"
    )

class Workouts(Base):
    __tablename__ = "workouts"

    id:Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id:Mapped[int] = mapped_column(ForeignKey("users.id"))
    started: Mapped[datetime.datetime] = mapped_column(DateTime)
    ended: Mapped[datetime.datetime] = mapped_column(DateTime, nullable=True)
    author:Mapped["User"] = relationship(
        back_populates="workouts"
    )
    workout_plan_id:Mapped[int] = mapped_column(
        ForeignKey("workout_plan.id")
    )
    workout_plan:Mapped["WorkoutPlan"] = relationship(
        back_populates="workouts"
    )

class Exercise(Base):
    __tablename__ = "excercise"
    id:Mapped[int] = mapped_column(primary_key=True)
    name:Mapped[str] = mapped_column(String)

class WorkoutPlan(Base):
    __tablename__ = "workout_plan"

    id:Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String)
    exercises: Mapped[list["WorkoutPlanExercise"]] = relationship(
        back_populates="workout_plan"
    )
    workouts:Mapped["Workouts"] = relationship(
        back_populates="workout_plan"
    )

class WorkoutPlanExercise(Base):
    __tablename__= "workoutplan_exercise"

    id: Mapped[int] = mapped_column(primary_key=True)

    workout_plan_id:Mapped[int] = mapped_column(
        ForeignKey("workout_plan.id")
    )
    excercise_id: Mapped[int] = mapped_column(
        ForeignKey("excercise.id")
    )

    workout_plan: Mapped["WorkoutPlan"] = relationship(
        back_populates="exercises"
    )
    excercise: Mapped["Exercise"] = relationship()
    weight:Mapped[float] = mapped_column(Float, nullable=True)
    reps:Mapped[int] = mapped_column(Integer)


