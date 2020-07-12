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

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Test</h1>
<p>A prototype API .</p>'''


# A route to return all of the available entries in our catalog.
@app.route('/api/', methods=['GET'])
def api_all():
    return jsonify(activity)

app.run()
