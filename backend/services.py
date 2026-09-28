import repository
from backend import auth
import exceptions

def valid_email(email):
    if "@" in email and "." in email:
        return True
    return False

def register(user):
    try:
        if not valid_email(user.email):
            raise exceptions.InvalidEmailError("Podany email jest nieprawidlowy")
        hashed_password = auth.hash_password(user.password)
        repository.sign_up(user, hashed_password)
    except Exception as e:
        raise exceptions.RegisterError(str(e))