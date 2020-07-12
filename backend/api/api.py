import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
activity = {
    'activity': 'museum',
    'location': "Paris",
    'time': 8,
    'price':4
  }

HTTP_METHODS = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH']

@app.route('/', methods=HTTP_METHODS)
def home():
    return '''<h1>Test</h1>
<p>A prototype API .</p>'''


# A route to return all of the available entries in our catalog.
@app.route('/api/', methods=['GET'])
def api_all():
    return jsonify(activity)

app.run()
