import repository
import auth
import exceptions
import datetime

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

def user_settings(jwt):
    try:
        user = auth.decode_jwt_token(jwt)
        return repository.get_user_inf(user["id"])
    except Exception as e:
        raise exceptions.UserSettingsError(str(e))

def add_exercise(exercise):
    try:
        repository.create_exercise(exercise.exercises)
    except Exception as e:
        raise exceptions.CreateExerciseError(str(e))

def get_exercises():
    try:
        return repository.download_exercises()
    except Exception as e:
        raise exceptions.GetExercisesError(str(e))

def create_workout(data):
    try:
        return repository.add_workout_plan(data)
    except exceptions.AddWorkoutError as e:
        raise exceptions.AddWorkoutError(str(e))

def workout(jwt, workout_plan):
    try:
        user = auth.decode_jwt_token(jwt)
        repository.add_workout(user["id"], workout_plan, datetime.datetime.now())
    except Exception as e:
        raise exceptions.StartWorkoutError(str(e))

def get_all_workouts(jwt):
    try:
        user = auth.decode_jwt_token(jwt)
        result = repository.get_all_planworkouts(user["id"])
        return result
    except Exception as e:
        raise exceptions.GetWorkoutsError(str(e))

def get_workout_plan_byid(workout_plan_id, user_id, jwt):
    user = auth.decode_jwt_token(jwt)
    if user["id"] != user_id:
        raise exceptions.InvalidUserError("Id użytkownika nie zgadza się")
    return repository.get_workout_plan_by_id(workout_plan_id)

def dashboard(jwt):
    user = auth.decode_jwt_token(jwt)
    workouts = repository.get_all_user_workouts(user["id"])
    number_workouts = len(workouts)
    last_workout = get_workout_plan_byid(workouts[number_workouts-1]["Workouts"].workout_plan_id)
    return {"name":user["name"],
            "number_workouts":number_workouts,
            "started":workouts[number_workouts-1]["Workouts"].started,
            "finished":workouts[number_workouts-1]["Workouts"].ended,
            "workout":[last_workout]}
