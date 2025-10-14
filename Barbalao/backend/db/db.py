import pyodbc

try:
    conexao = pyodbc.connect(
        'Driver={ODBC Driver 17 for SQL Server};'
        'Server=127.0.0.1;'
        'Database=barbalao;'
        'Trusted_Connection=yes;'
    )

    cur = conexao.cursor()





    conexao.commit()
    conexao.close()

except pyodbc.Error as e: 
    print(f"Erro não legal: {e}")