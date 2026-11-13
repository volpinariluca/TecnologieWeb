import json

from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

DATA_FILE = "products.json"


def read_products():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def write_products(products):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(products, f, indent=2)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/products", methods=["GET"])
def get_products():
    pass


@app.route("/api/add_new_product", methods=["POST"])
def add_product():
    pass


if __name__ == "__main__":
    app.run(debug=True)
