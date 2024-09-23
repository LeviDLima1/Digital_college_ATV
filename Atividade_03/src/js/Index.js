const bnt_close_privacy = document.getElementById('bnt')
const privacy_box = document.getElementById('Privacy_Policy')
const bnt_privacy = document.getElementById('bnt-privacy')
const bnt_term = document.getElementById('bnt-term')
const bnt_close_term = document.getElementById('bnt-close-term')
const term_box = document.getElementById('Termo-de-Uso')

bnt_close_privacy.addEventListener('click', function() {
    privacy_box.style.display = 'none';
});

bnt_privacy.addEventListener('click', function() {
    privacy_box.style.display = 'block'
})

bnt_close_term.addEventListener('click', function() {
    term_box.style.display = 'none'
})

bnt_term.addEventListener('click', function() {
    term_box.style.display = 'block'
})
