from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')

# Serve any static file (css, js, images, html)
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(os.getcwd(), path)

@app.route('/')
def home():
    return send_from_directory(os.getcwd(), 'index.html')

@app.route('/about')
def about():
    return send_from_directory(os.getcwd(), 'about.html')

@app.route('/services')
def services():
    return send_from_directory(os.getcwd(), 'services.html')

@app.route('/contact')
def contact():
    return send_from_directory(os.getcwd(), 'contact.html')

if __name__ == '__main__':
    app.run(debug=True)
