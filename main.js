var button1 = document.getElementById('button1');
var educationDiv = document.getElementById('education');
button1.addEventListener('click', function () {
    if (educationDiv.style.display === 'none') {
        educationDiv.style.display = 'block';
        button1.textContent = 'Hide Education';
    }
    else {
        educationDiv.style.display = 'none';
        button1.textContent = 'Show Education';
    }
});
var button2 = document.getElementById('button2');
var skillsDiv = document.getElementById('skills');
button2.addEventListener('click', function () {
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'block';
        button2.textContent = 'Hide Skills';
    }
    else {
        skillsDiv.style.display = 'none';
        button2.textContent = 'Show Skills';
    }
});
var button3 = document.getElementById('button3');
var workexperienceDiv = document.getElementById('workexperience');
button3.addEventListener('click', function () {
    if (workexperienceDiv.style.display === 'none') {
        workexperienceDiv.style.display = 'block';
        button3.textContent = 'Hide Experience';
    }
    else {
        workexperienceDiv.style.display = 'none';
        button3.textContent = 'Show Experience';
    }
});
