function generateMealPlan() {
    // Validate email
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get user input
    var name = document.getElementById('name').value;
    var goal = document.getElementById('goal').value;
    var mondayBreakfast = document.getElementById('mondayBreakfast').value;

    // Generate new webpage content
    var newPageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan</title>
        <style>
            /* Add styling here */
        </style>
    </head>
    <body>
        <h1>Weekly Meal Plan</h1>
        <h2>Name: ${name}</h2>
        <h2>Email: ${email}</h2>
        <h2>Goal for the Week: ${goal}</h2>
        <h3>Monday</h3>
        <p>Breakfast: ${mondayBreakfast}</p>
        <!-- Similar for other meals and days -->
    </body>
    </html>
    `;
    var newWindow = window.open();
    newWindow.document.write(newPageContent);
}

function clearMealPlan() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
    document.getElementById('mondayBreakfast').value = '';
    // Similar for other meals and days
}
