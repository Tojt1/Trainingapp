from requests import session

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
    try:
        if not valid_email(user.email):
            raise exceptions.InvalidEmailError("podany email jest nieprawidłowy")
        password= repository.get_user_password(user.email)
        if auth.check_password(user.password, password) is None:
            raise exceptions.InvalidPasswordError("Podane hasło jest niepoprawne")

        result = repository.login_user(user.email)
        if result is None:
            raise exceptions.LoginError("Email lub hasło jest nieprawidłowe")
        print("res", result)
        return auth.create_jwt_token(result, user.email)

    except Exception as e:
        raise Exception(str(e))

def add_exercise(exercise):
    try:
        repository.create_exercise(exercise.name)
    except Exception as e:
        raise exceptions.CreateExerciseError(str(e))