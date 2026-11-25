/* ── CONFIGURAÇÃO ── edite só estas duas linhas ── */
// WhatsApp: só números, no formato 55 + DDD + número (ex.: 5561 9XXXX XXXX, sem espaços)
const WHATSAPP = "556192003-9673";
const EMAIL    = "martinsdm08@gmail.com";


/* ── FUNÇÕES AUXILIARES ── */
function pegar(id) {
  return document.getElementById(id);
}

function limparErros() {
  var campos = ['nome', 'email', 'assunto', 'mensagem'];

  for (var i = 0; i < campos.length; i++) {
    pegar('campo-' + campos[i]).classList.remove('campo-invalido');
    pegar('erro-' + campos[i]).classList.add('d-none');
  }

  pegar('alerta-erro').classList.add('d-none');
}

function mostrarErro(campo) {
  pegar('campo-' + campo).classList.add('campo-invalido');
  pegar('erro-' + campo).classList.remove('d-none');
}


/* ── VALIDAÇÃO ── */
function validar() {
  var nome     = pegar('campo-nome').value.trim();
  var email    = pegar('campo-email').value.trim();
  var assunto  = pegar('campo-assunto').value.trim();
  var mensagem = pegar('campo-mensagem').value.trim();

  limparErros();

  var ok = true;

  // Nome, assunto e mensagem não podem estar vazios
  if (nome === '') {
    mostrarErro('nome');
    ok = false;
  }

  // E-mail precisa conter @
  if (email === '' || email.indexOf('@') === -1) {
    mostrarErro('email');
    ok = false;
  }

  if (assunto === '') {
    mostrarErro('assunto');
    ok = false;
  }

  // Mensagem precisa ter pelo menos 10 caracteres
  if (mensagem.length < 10) {
    mostrarErro('mensagem');
    ok = false;
  }

  // Alerta geral no topo do formulário
  if (!ok) {
    pegar('alerta-erro').classList.remove('d-none');
  }

  return ok;
}


/* ── ENVIO PELO WHATSAPP ── */
pegar('btn-whatsapp').addEventListener('click', function() {
  if (!validar()) return;

  var nome     = pegar('campo-nome').value.trim();
  var email    = pegar('campo-email').value.trim();
  var assunto  = pegar('campo-assunto').value.trim();
  var mensagem = pegar('campo-mensagem').value.trim();

  var texto = 'Olá! Meu nome é ' + nome + '.\n\nAssunto: ' + assunto + '\n\n' + mensagem + '\n\nRetorno: ' + email;

  window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank');
  pegar('form-contato').reset();
});


/* ── ENVIO POR E-MAIL ── */
pegar('btn-email').addEventListener('click', function() {
  if (!validar()) return;

  var nome     = pegar('campo-nome').value.trim();
  var email    = pegar('campo-email').value.trim();
  var assunto  = pegar('campo-assunto').value.trim();
  var mensagem = pegar('campo-mensagem').value.trim();

  var corpo = 'Olá!\n\nMeu nome é ' + nome + ' (' + email + ').\n\n' + mensagem;

  window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo);
});


/* ── FECHAR MENU MOBILE AO CLICAR NUM LINK ── */
document.querySelectorAll('#menu .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    var instancia = bootstrap.Collapse.getInstance(pegar('menu'));
    if (instancia) instancia.hide();
  });
});