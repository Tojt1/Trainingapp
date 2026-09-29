import sqlalchemy
from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped, relationship
from sqlalchemy import Integer, String, DateTime, ForeignKey
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
        back_populates="user"
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