const button1 = document.getElementById('button1') as HTMLButtonElement;
const educationDiv = document.getElementById('education') as HTMLDivElement;

button1.addEventListener('click', () => {
    if (educationDiv.style.display === 'none') {
        educationDiv.style.display = 'block';
      button1.textContent = 'Hide Education';
    } else {
        educationDiv.style.display = 'none';
      button1.textContent = 'Show Education';
    }
  });

  const button2 = document.getElementById('button2') as HTMLButtonElement;
const skillsDiv = document.getElementById('skills') as HTMLDivElement;

button2.addEventListener('click', () => {
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'block';
      button2.textContent = 'Hide Skills';
    } else {
        skillsDiv.style.display = 'none';
      button2.textContent = 'Show Skills';
    }
  });

  const button3 = document.getElementById('button3') as HTMLButtonElement;
const workexperienceDiv = document.getElementById('workexperience') as HTMLDivElement;

button3.addEventListener('click', () => {
    if (workexperienceDiv.style.display === 'none') {
        workexperienceDiv.style.display = 'block';
      button3.textContent = 'Hide Experience';
    } else {
        workexperienceDiv.style.display = 'none';
      button3.textContent = 'Show Experience';
    }
  });