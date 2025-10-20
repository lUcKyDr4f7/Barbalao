from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os


app = Flask(__name__)
CORS(app) 

# função para abrir e fechar a conexão com o banco, ao inves de ficar aberto toda hora tava dando DB is locked
def get_conn():
    caminhoBanco = os.path.join(os.path.dirname(__file__), '..', 'db', 'barbalao.db')
    conn = sqlite3.connect(caminhoBanco)
    conn.row_factory = sqlite3.Row
    return conn


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

            conn = get_conn()
            cursor = conn.cursor()

            cursor.execute('SELECT * FROM users WHERE nome = ?', (nome,))
            usuario = cursor.fetchone()

            conn.close()
        
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

@app.route('/api/products', methods=['POST'])
def create_product():
    try:
        data = request.get_json()

        if data is None:
            return jsonify({"message": "JSON inválido ou ausente"}), 400
    
        name = data.get('nome')
        image = data.get('imagem')
        price = data.get('preco')

        if not name or price is None:
            return jsonify({"message": "Campos obrigatórios: name e price"}), 400

        conn = get_conn()
        cursor = conn.cursor()

        cursor.execute(
            '''
             INSERT INTO products(name, price, image)
             VALUES (?, ?, ?)
            ''', (name, price, image))
        
        conn.commit()
        new_id = cursor.lastrowid

        conn.close()

        return jsonify({"message": "Produto Criado", "id": new_id}), 201


    except TypeError as e:
        print(f"Erro ao criar produto: {e}")
    return jsonify({"message": "Erro interno"}), 500

@app.route('/api/products', methods=['GET'])
def list_products():
    try:
        conn = get_conn()
        cursor = conn.cursor()
        cursor.execute('''SELECT idprod, image, name, price FROM products''')
        rows = cursor.fetchall()

        conn.close()

        products = [dict(row) for row in rows]

        return jsonify(products), 200
    
    except TypeError as e:
        print(f"Erro ao criar produto: {e}")
    return jsonify({"message": "Erro Interno"}), 500

@app.route('/api/products/remove/<int:product_id>', methods=['POST'])
def remove_product(product_id):
    try:
        conn = get_conn()
        cursor = conn.cursor()
        cursor.execute('DELETE FROM products WHERE idprod = ?', (product_id,))
        conn.commit()
        conn.close()

        if cursor.rowcount == 0:
            return jsonify({"message": "Produto não encontrado"}), 404

        return jsonify({"message": "Produto removido com sucesso"}), 200

    except Exception as e:
        print(f"Erro ao remover produto: {e}")
        return jsonify({"message": "Erro interno"}), 500


if __name__ == '__main__':
    app.run(port=3001)