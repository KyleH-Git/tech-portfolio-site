console.log('js reached')
const profileFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const yearsOfExperience = document.querySelector('#yearsOfExperience').value.trim();
  const stack_type = document.querySelector('#stackType').value.trim();

document.location.replace(`/search/${name}`)

  console.log(name, yearsOfExperience, stack_type)

}

document
.querySelector('#search-form')
.addEventListener('submit', profileFormHandler);