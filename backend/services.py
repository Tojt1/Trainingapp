import repository
import auth
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

def login(user):
    valid_email(user.email)
    password= repository.get_user_password(user.email)
    if auth.check_password(user.password, password) is None:
        raise exceptions.InvalidPasswordError

    result = repository.login_user(user.email)
    if result is None:
        raise exceptions.InvalidPasswordError

    return result