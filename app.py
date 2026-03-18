from flask import Flask, request, jsonify, send_file, render_template_string
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/templates'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

@app.route('/')
def index():
    return send_file('static/index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'htmlFile' not in request.files:
        return jsonify({'success': False, 'message': '没有文件上传'})
    
    file = request.files['htmlFile']
    route_key = request.form.get('routeKey')
    
    if file.filename == '':
        return jsonify({'success': False, 'message': '没有选择文件'})
    
    if not route_key:
        return jsonify({'success': False, 'message': '没有提供路由地址'})
    
    if file and (file.filename.endswith('.html') or file.mimetype == 'text/html'):
        filename = f"{route_key}.html"
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return jsonify({'success': True, 'message': '文件上传成功'})
    else:
        return jsonify({'success': False, 'message': '请上传HTML文件'})

@app.route('/pages/<route_key>')
def serve_page(route_key):
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], f"{route_key}.html")
    if os.path.exists(filepath):
        return send_file(filepath)
    else:
        return "页面不存在", 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')