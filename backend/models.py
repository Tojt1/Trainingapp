import sqlalchemy
from sqlalchemy.orm import declarative_base, mapped_column, Mapped
from sqlalchemy import Integer, String, DateTime
import datetime

Base = declarative_base()

class User(Base):
    __tablename__="users"

    id:Mapped[int] = mapped_column(Integer, primary_key=True)
    name:Mapped[str] = mapped_column(String)
    email:Mapped[str] = mapped_column(String, nullable=False)
    password:Mapped[str] = mapped_column(String, nullable=False)
    created:Mapped[datetime.datetime] = mapped_column(DateTime, function=sqlalchemy.func.now())
