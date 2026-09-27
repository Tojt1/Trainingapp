import sqlalchemy
from config import sql_path

engine = sqlalchemy.create_engine(sql_path)