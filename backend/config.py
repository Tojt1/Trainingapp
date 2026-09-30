import os
from dotenv import load_dotenv

load_dotenv()

sql_path = os.getenv("SQL_URL")
secret_key = os.getenv("SECRET_KEY")
jwt_algorithm = os.getenv("JWT_ALGORHITM")