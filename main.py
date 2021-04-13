from flask import Flask, render_template, request, url_for

app = Flask(__name__)

def parse(request):
    return 0

@app.route("/", methods=["POST", "GET"])
def primary():
    if request.method == "POST":
        ans = parse(request)
        return render_template("index.html", answer=ans)
    else:  
        return render_template("index.html", answer="")


if __name__ == "__main__":
    app.run(debug=True)