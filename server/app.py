from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

import os
app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  
users = {}
issues = []
issue_id_counter = 1
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400
    if username in users:
        return jsonify({'error': 'User already exists'}), 409
    users[username] = password
    return jsonify({'message': 'Registered successfully'}), 201
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if users.get(username) == password:
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'error': 'Invalid credentials'}), 401
@app.route('/report', methods=['POST'])
def report_issue():
    global issue_id_counter
    title = request.form.get('title')
    description = request.form.get('description')
    category = request.form.get('category')
    anonymous = request.form.get('anonymous') == 'true'
    files = request.files.getlist('photos')
    if not title or not description or not category:
        return jsonify({'error': 'Missing fields'}), 400
    photo_paths = []
    for file in files[:3]:  
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        photo_paths.append(filepath)
    issue = {
        'id': issue_id_counter,
        'title': title,
        'description': description,
        'category': category,
        'anonymous': anonymous,
        'photos': photo_paths,
        'status': 'Reported'
    }
    issues.append(issue)
    issue_id_counter += 1
    return jsonify({'message': 'Issue reported', 'issue_id': issue['id']}), 201
@app.route('/issues', methods=['GET'])
def get_issues():
    status = request.args.get('status')
    category = request.args.get('category')
    filtered = issues
    if status:
        filtered = [i for i in filtered if i['status'].lower() == status.lower()]
    if category:
        filtered = [i for i in filtered if i['category'].lower() == category.lower()]
    return jsonify(filtered), 200
@app.route('/update-status/<int:issue_id>', methods=['PATCH'])
def update_status(issue_id):
    data = request.json
    new_status = data.get('status')
    for issue in issues:
        if issue['id'] == issue_id:
            issue['status'] = new_status
            return jsonify({'message': 'Status updated'}), 200
    return jsonify({'error': 'Issue not found'}), 404
@app.route('/analytics', methods=['GET'])
def analytics():
    stats = {}
    for issue in issues:
        cat = issue['category']
        stats[cat] = stats.get(cat, 0) + 1
    return jsonify(stats), 200
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])
if __name__ == '__main__':
    app.run(debug=True)
