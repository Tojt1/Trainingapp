import bcrypt
import exceptions

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