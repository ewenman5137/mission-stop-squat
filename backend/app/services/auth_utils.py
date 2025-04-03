import bcrypt
from config import ADMIN_PASSWORD_HASH

def verify_password(input_password: str) -> bool:
    return bcrypt.checkpw(input_password.encode(), ADMIN_PASSWORD_HASH.encode())
