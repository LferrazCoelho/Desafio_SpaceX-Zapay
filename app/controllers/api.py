from app import app
from flask import jsonify
from flask import request
from flask import json
from flask import render_template
import requests



api_token = 'seu_api_token'
api_url_launches = 'https://api.spacexdata.com/v3/launches/'
api_url_rockets = 'https://api.spacexdata.com/v3/rockets/'



def acess_launches():
    headers = {'Content-Type': 'application/json'}
    api_url = f"{api_url_launches}"
    response = requests.get(api_url, headers=headers)
    launches = response.json()
    return launches



def acess_rockets():
    headers = {'Content-Type': 'application/json'}
    api_url = f"{api_url_rockets}"
    response = requests.get(api_url, headers=headers)
    rockets = response.json()
    return rockets



@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.route('/launches', methods=['GET'])
@app.route('/launches/', methods=['GET'])
def get_launches():
    launches = acess_launches()

    if launches:
        return jsonify({'launches' : launches})
    else:
        return "Erro"



@app.route('/rockets', methods=['GET'])
@app.route('/rockets/', methods=['GET'])
def get_rockets():
    rockets = acess_rockets()

    if rockets:
        return jsonify({'rockets' : rockets})
    else:
        return "Erro"













