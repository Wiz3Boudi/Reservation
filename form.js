document.addEventListener('DOMContentLoaded', () => {
      // create container 

      const formContainer = document.createElement('div');
      document.body.appendChild(formContainer)
      formContainer.className = 'formContainer'

      // create header 
      const header = document.createElement('div')
      header.className ='header';
      formContainer.appendChild(header)

      // craete h1
      


      // create form
      const form = document.createElement('form')
      formContainer.appendChild(form);

      // create Label
      function createLabel(){
            const label = document.createElement('label');
            form.appendChild(label)
            

      }

      createLabel();
})
