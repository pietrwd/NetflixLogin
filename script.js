document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const togglePass = document.getElementById('togglePass');
  const signInBtn = document.getElementById('signInBtn');
  const toast = document.getElementById('toast');

  // Mostrar/ocultar senha
  togglePass.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePass.textContent = isPassword ? 'Ocultar' : 'Mostrar';
    togglePass.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
  });

  // Marca o campo como "tocado" ao sair dele, para só então mostrar erro
  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener('blur', () => {
      input.classList.add('touched');
      validateField(input);
    });
    input.addEventListener('input', () => {
      if (input.classList.contains('touched')) {
        validateField(input);
      }
    });
  });

  function validateField(input) {
    const errorEl = input.id === 'email' ? emailError : passwordError;

    if (input.validity.valueMissing) {
      errorEl.textContent = input.id === 'email'
        ? 'Informe um email ou número de telefone válido.'
        : 'Sua senha deve ter entre 4 e 60 caracteres.';
      return false;
    }

    if (input.id === 'email' && input.validity.typeMismatch) {
      errorEl.textContent = 'Informe um email válido.';
      return false;
    }

    if (input.id === 'password' && input.validity.tooShort) {
      errorEl.textContent = 'Sua senha deve ter entre 4 e 60 caracteres.';
      return false;
    }

    errorEl.textContent = '';
    return true;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailInput.classList.add('touched');
    passwordInput.classList.add('touched');

    const emailOk = validateField(emailInput);
    const passOk = validateField(passwordInput);

    if (!emailOk || !passOk) {
      showToast('Verifique os campos e tente novamente.');
      return;
    }

    // Simulação de chamada de autenticação
    signInBtn.disabled = true;
    signInBtn.textContent = 'Entrando...';

    setTimeout(() => {
      signInBtn.disabled = false;
      signInBtn.textContent = 'Entrar';
      showToast(`Bem-vindo(a), ${emailInput.value}! (simulação)`);
      form.reset();
      [emailInput, passwordInput].forEach((el) => el.classList.remove('touched'));
    }, 1200);
  });
});

