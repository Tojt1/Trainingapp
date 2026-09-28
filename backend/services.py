import repository

def register(user):
    repository.sign_up(user, user.password)