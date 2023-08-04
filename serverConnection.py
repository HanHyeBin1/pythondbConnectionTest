from flask import Flask, render_template, request, redirect, url_for
import pymysql

app = Flask(__name__)

@app.route('/')
def index():
    db_conn = pymysql.connect(host='127.0.0.1', user='root',
            password='1234', database='mywebsite',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_conn:
        db_cursor = db_conn.cursor()
        db_cursor.execute("SELECT * FROM users")
        users = db_cursor.fetchall()
    # db_conn.close()

    return render_template('index.html', users=users)

@app.route('/joinus', methods=['GET', 'POST'])
def signup():
    error = None
    if request.method == 'POST':
        email = request.form['email']
        name = request.form['name']
        passwd = request.form['passwd']

        db_conn = pymysql.connect(host='127.0.0.1', user='root',
            password='1234', database='mywebsite',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
        cursor = db_conn.cursor()
        sql = "INSERT INTO users (email, name, password) VALUES (%s, %s, %s)"
        cursor.execute(sql, (email, name, passwd))
        
        print(db_conn)

        data = cursor.fetchall()
 
        if not data:
            db_conn.commit()
            return redirect(url_for('index'))
        else:
            db_conn.rollback()
            return "Register Failed"

    return render_template('joinus.html', error=error)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # 로그인 로직 추가
        return redirect(url_for('index'))
    return render_template('login.html')


if __name__ == "__main__":
    app.run(debug=True)