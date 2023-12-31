import flask
import functools

application = flask.Flask(__name__)

application.secret_key = "bacon"

users = {'Berktug':'123'}

def login_required(method):
    @functools.wraps(method)
    def wrapper(*args, **kwargs):
        if 'username' in flask.session:
            return method(*args, **kwargs)
        else:
            flask.flash("A login is required to see the page!")
            return flask.redirect(flask.url_for('index'))
    return wrapper

@application.route("/", methods=('GET', 'POST'))
def index():
    if flask.request.method == "POST":
        print(flask.request.form)

        required = ['username', 'password']
        for r in required:
            if r not in flask.request.form:
                flask.flash("{0} is required.".format(r))
                return flask.redirect(flask.url_for('index'))
        username = flask.request.form['username']
        password = flask.request.form['password']

        if username in users and users[username] == password:
            flask.session['username'] = username
            return flask.redirect(flask.url_for("ai"))
        else:
            flask.flash("Username doesn't exist or incorrect password")
        return flask.redirect(flask.url_for('index'))

    return flask.render_template("index.html")

@application.route("/ai", methods=('GET', 'POST'))
@login_required
def ai():
    return flask.render_template("ai.html")

@application.route("/about", methods=('GET', 'POST'))
def about():
    return flask.render_template("about.html")

@application.route("/service", methods=('GET', 'POST'))
def service():
    return flask.render_template("service.html")

@application.route("/why", methods=('GET', 'POST'))
def why():
    return flask.render_template("why.html")

@application.route("/team", methods=('GET', 'POST'))
def team():
    return flask.render_template("team.html")

if __name__ == '__main__':
    application.run()