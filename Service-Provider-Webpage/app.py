from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def display_form_submissions():
    if request.method == 'POST':
        # Get form data from the request
        full_name = request.form.get('Name')
        email = request.form.get('E-mail')
        address = request.form.get('Address')
        phone_number = request.form.get('Phone No.')
        service_date = request.form.get('Service-Date')
        city = request.form.get('City')
        service_type = request.form.get('Service-Type')
        note = request.form.get('Note')
        
        # Display the form data
        return render_template('display_form.html', full_name=full_name, email=email, address=address, phone_number=phone_number, service_date=service_date, city=city, service_type=service_type, note=note)
    else:
        return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
