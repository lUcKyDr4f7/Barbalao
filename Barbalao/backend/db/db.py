import sqlite3

try:
    conn = sqlite3.connect('barbalao.db')

    cursor = conn.cursor()
    cursor.execute('''
                        CREATE TABLE IF NOT EXISTS users(
                        iduser INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                        nome TEXT NOT NULL UNIQUE,
                        senha TEXT NOT NULL
                   );
                    ''')
    
    cursor.execute('''
                        INSERT INTO users(nome, senha)
                        VALUES(?, ?);
                  ''', ('Eduardo', 'Sete45082526'))
    conn.commit()
    conn.close()

except sqlite3.Error as e: 
    print(f"Erro não legal: {e}")