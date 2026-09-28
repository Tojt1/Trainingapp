import repository

def valid_email(email):
    if "@" in email and "." in email:
        return True
    return False

def register(user):
    repository.sign_up(user, user.password)