from flask import Flask, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask_restful import Resource, Api
import conformaciones
import informacion_general
import informacion_estructural
import utils

app = Flask(__name__)

CORS(app)

# Configurar DB
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'tunquesino10'
app.config['MYSQL_DB'] = 'codnas-prs'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

api = Api(app)

class GetAll(Resource):
  def get(self):
    try:
      conn = mysql.connection
      cursor = conn.cursor()
      stmt = ("select pdb_id from info_general")
      cursor.execute(stmt)
      data = cursor.fetchall()
      return data
    except Exception as e:
      return { 'error': str(e) }

class GetInfoGeneral(Resource):
  def get(self, pdb_id):
    try:
      _pdbId = pdb_id
      conn = mysql.connection
      cursor = conn.cursor()
      stmt = ("select * from info_general where pdb_id = %(pdb_id)s")
      cursor.execute(stmt, { 'pdb_id': _pdbId })
      data = cursor.fetchall()
      r = {
        'StatusCode': '200',
        'Message': 'Success',
        'InfoGeneral': data
      }
      return r
    except Exception as e:
      return { 'error': str(e) }

class GetConformacion(Resource):
  def get(self, pdb_id):
    try:
      _pdbId = pdb_id
      conn = mysql.connection
      cursor = conn.cursor()
      stmt = ("select * from conformacion where conformero_1 = %(pdb_id)s or conformero_2 = %(pdb_id)s")
      cursor.execute(stmt, { 'pdb_id': _pdbId })
      data = cursor.fetchall()
      r = {
        'StatusCode': '200',
        'Message': 'Success',
        'Conformacion': data
      }
      return r
    except Exception as e:
      return { 'error': str(e) }

class GetInfoEstructural(Resource):
  def get(self, pdb_id):
    try:
      _pdbId = pdb_id
      conn = mysql.connection
      cursor = conn.cursor()
      stmt = ("select e.region, e.num_conformaciones, e.rmsd_min, e.rmsd_max, e.rmsd_avg from info_general g, info_estructural e where g.pdb_id = %(pdb_id)s and g.cluster = e.cluster")
      cursor.execute(stmt, { 'pdb_id': _pdbId })
      data = cursor.fetchall()
      r = {
        'StatusCode': '200',
        'Message': 'Success',
        'InfoEstructural': data
      }
      return r
    except Exception as e:
      return { 'error': str(e) }

class EstimarInfoGeneral(Resource):
  def get(self, pdb_id):
    try:
      _pdbId = pdb_id
      value = informacion_general.obtener(_pdbId)
      return value
    except Exception as e:
      return { 'error': str(e) }

class EstimarConformacion(Resource):
  def get(self, pdb_id):
    try:
      _pdbId = pdb_id[:6]
      conn = mysql.connection
      cursor = conn.cursor()
      stmt = ("select conformero_1, conformero_2 from conformacion where conformero_1 = %(pdb_id)s or conformero_2 = %(pdb_id)s")
      cursor.execute(stmt, { 'pdb_id': _pdbId })
      data = cursor.fetchall()
      lista = []
      for conformero in data:
        if (conformero['conformero_1'] == _pdbId):
          lista.append(conformero['conformero_2'])
        if (conformero['conformero_2'] == _pdbId):
          lista.append(conformero['conformero_1'])
      value = conformaciones.obtener(lista, pdb_id)
      return value
    except Exception as e:
      return { 'error': str(e) }

class EstimarInfoEstructural(Resource):
  def get(self, pdb_id):
    try:
      _pdbId = pdb_id
      value = informacion_estructural.obtener(_pdbId)
      return value
    except Exception as e:
      return { 'error': str(e) }

class Limpiar(Resource):
  def get(self):
    try:
      utils.clean()
      return 'CLEAN!'
    except Exception as e:
      return { 'error': str(e) }

api.add_resource(GetAll, '/api/GetAll')
api.add_resource(GetInfoGeneral, '/api/GetInfoGeneral/<pdb_id>')
api.add_resource(GetConformacion, '/api/GetConformacion/<pdb_id>')
api.add_resource(GetInfoEstructural, '/api/GetInfoEstructural/<pdb_id>')
api.add_resource(EstimarInfoGeneral, '/api/EstimarInfoGeneral/<pdb_id>')
api.add_resource(EstimarConformacion, '/api/EstimarConformacion/<pdb_id>')
api.add_resource(EstimarInfoEstructural, '/api/EstimarInfoEstructural/<pdb_id>')
api.add_resource(Limpiar, '/api/Limpiar/')