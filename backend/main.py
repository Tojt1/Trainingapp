from fastapi import FastAPI, HTTPException
import services
from schemas import Register, Login
import exceptions


app = FastAPI()

@app.get("/")
def hello_world():
    return {"inf":"hello world"}

@app.post("/register")
def register_user(user:Register):
    try:
        return services.register(user)
    except exceptions.InvalidEmailError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.HashingPasswordError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.CheckingPasswordError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.RegisterError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

@app.post("/login")
def login_user(user:Login):
    try:
        return services.login(user)

    except exceptions.InvalidEmailError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.InvalidPasswordError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except exceptions.LoginError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )