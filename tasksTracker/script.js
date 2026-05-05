const UNCHECKED ='unchecked.png';
const CHECKED   ='checked.png';                     //the image with the star as 'checked'

document.querySelectorAll('.status-icon').forEach(icon => {
  icon.addEventListener('click', () => {            //change the icon when clicked
    const taskLine = icon.closest('.task-line');
    const isChecked = taskLine.classList.toggle('checked');

    icon.src = isChecked ? CHECKED :UNCHECKED;          
    icon.alt = isChecked ? 'checked' :'unchecked';
  });
});

document.querySelectorAll('.task-text').forEach(span => {
  span.addEventListener('keydown', e => {
    if (e.key === 'Enter') e.preventDefault();      //disabling the 'Enter' keyboard button
  });
});