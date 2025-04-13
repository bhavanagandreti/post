from flask import Flask, render_template, request, redirect, url_for, flash
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI']='mongodb+srv://testuser:Test1234!@cluster0.mkcat7n.mongodb.net/test?authSource=admin'
mongo=PyMongo(app)

app.secret_key = "supersecret"

posts = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/create", methods=["GET", "POST"])
def create_post():
    if request.method == "POST":
        title = request.form.get("title")
        content = request.form.get("content")

        if title and content:
            posts.append({"title": title, "content": content})
            flash("Post created successfully!", "success")
            return redirect(url_for("view_posts"))
        else:
            flash("All fields are required.", "error")
    return render_template("create_post.html")

@app.route("/posts")
def view_posts():
    return render_template("view_posts.html", posts=posts)

if __name__ == "__main__":
    app.run(debug=True)
