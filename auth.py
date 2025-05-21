# utils/auth.py
import firebase_admin
from firebase_admin import auth, credentials
from fastapi import HTTPException, Header

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

def get_current_user(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid auth header")
    token = authorization.split(" ")[1]
    decoded = auth.verify_id_token(token)
    return {
        "uid": decoded["uid"],
        "email": decoded["email"],
        "tenant_id": decoded.get("tenant_id", "default"),
        "is_super_admin": decoded.get("is_super_admin", False)
    }
