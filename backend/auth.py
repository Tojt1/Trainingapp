import bcrypt
import exceptions
import jwt
from config import jwt_algorithm, secret_key

def hash_password(password):
    try:
        return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    except Exception as e:
        raise exceptions.HashingPasswordError(str(e))

def check_password(password, hashed_password):
    try:
        return bcrypt.checkpw(password.encode("utf-8"), hashed_password.encode("utf-8"))
    except Exception as e:
        raise exceptions.CheckingPasswordError(str(e))

def create_jwt_token(user, email):
    return jwt.encode({
        "id":user["id"],
        "email":email,
        "name":user["name"]
    }, secret_key, jwt_algorithm)

def decode_jwt_token(token):
    return jwt.decode(token, secret_key, jwt_algorithm)

