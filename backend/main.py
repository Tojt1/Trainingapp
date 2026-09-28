from fastapi import FastAPI
import services
from schemas import Register
app = FastAPI()

@app.get("/")
def hello_world():
    return {"inf":"hello world"}

@app.post("/register")
def register_user(user:Register):
    return services.register(user)