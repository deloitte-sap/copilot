from fastapi.testclient import TestClient
from .main import app

client = TestClient(app)

# Test the root endpoint

def test_read_root():
    response = client.get('/')
    assert response.status_code == 200
    assert response.() == {'Hello': 'World'}

# Test the secure endpoint with a valid token

def test_secure_route_valid_token():
    response = client.get('/secure', headers={'Authorization': 'Bearer valid-token'})
    assert response.status_code == 200
    assert response.() == {'message': 'Secure Endpoint Accessed'}

# Test the secure endpoint with an invalid token

def test_secure_route_invalid_token():
    response = client.get('/secure', headers={'Authorization': 'Bearer invalid-token'})
    assert response.status_code == 401
    assert response.() == {'detail': 'Invalid or expired token'}

# Test the predict endpoint

def test_predict():
    response = client.post('/predict', ={'input_data': {'key': 'value'}}, headers={'Authorization': 'Bearer valid-token'})
    assert response.status_code == 200
    # Note: Adjust the expected response based on actual SAP AI Core integration response
    assert 'prediction' in response.()
