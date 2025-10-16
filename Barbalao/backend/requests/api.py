from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os


app = Flask(__name__)
CORS(app) 

caminhoBanco = os.path.join(os.path.dirname(__file__), '..', 'db', 'barbalao.db')
conn = sqlite3.connect(caminhoBanco)
cursor = conn.cursor()

@app.route('/api/login', methods=['POST'])
def api_server():
        try:
            
            data = request.get_json()

            if data == None:
                return jsonify({
                "route": "/login",
                "message": "JSON inválido ou ausente na requisição"
            }), 400

            nome = data.get('nome')
            senha = data.get('senha')

            cursor.execute('SELECT * FROM users WHERE nome = ?', (nome,))
            usuario = cursor.fetchone()
        
            if usuario != None:
                if usuario[2] == senha:
                        result = {
                            "route": "/form", 
                            "message": "OK"
                        }
                        print(result)
                        return jsonify(result), 200
                
                return jsonify({
                "route": "/login",
                "message": "Usuário ou senha incorretos"
            }), 400

        except TypeError as e:
             print(f"Erro usuário não encontrado: {e}")        
        return jsonify({"route": "/login", "status": 500})
                           
if __name__ == '__main__':
    app.run(port=3001)