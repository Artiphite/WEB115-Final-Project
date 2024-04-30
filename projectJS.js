// Created by Artemio Madrigal Cortez
// Course: WEB115 Section 6

var daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
var meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];

function generateMealPlan() {
    var name = document.getElementById('name').value;
    var goal = document.getElementById('goal').value;

    // Validate email
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // Generate new webpage content
    var newPageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Weekly Meal Plan</h1>
        <h2>Name: ${name}</h2>
        <h2>Email: ${email}</h2>
        <h2>Goal for the Week: ${goal}</h2>
    `;
    daysOfWeek.forEach(function(day) {
        var capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

        newPageContent += `
        <h3>${capitalizedDay}</h3>
        `;
    meals.forEach(function(meal) {
        var elementId = day.toLowerCase() + meal;
        newPageContent += `
        <p>${meal}: ${document.getElementById(elementId).value}</p>
        `;
        });
    });

    newPageContent += `
    </body>
    </html>
    `;
    var newWindow = window.open();
    newWindow.document.write(newPageContent);
}

function clearMealPlan() {
    daysOfWeek.forEach(function(day) {
        meals.forEach(function(meal) {
            var elementId = day + meal;
            document.getElementById(elementId).value = '';
        });
    });
    // Clear other fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
}
