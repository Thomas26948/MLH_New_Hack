import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
activity = [
  {
    'name': 'Musée Dupuytren',
    'adress': "15 Rue de l'École de Médecine, Paris",
    'duration': 2
  },
  {
    'name': "Musée d'Orsay",
    'adress': "1 Rue de la Légion d'Honneur, Paris",
    'duration': 2
  }
]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Test</h1>
<p>A prototype API .</p>'''


# A route to return all of the available entries in our catalog.
@app.route('/api/', methods=['GET'])
def api_all(activity):
    return jsonify(activity)

app.run()
