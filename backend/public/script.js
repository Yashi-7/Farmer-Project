const translations = { 
  en: { 
    nav_home: "Home", 
    nav_features: "Features", 
    nav_about: "About", 
    nav_contact: "Contact", 
    login: "Login", 
    register_here: "Register here", 
    already_account: "Already have an account?", 
    dont_have_account: "Don't have an account?", 
    email_label: "Email:", 
    password_label: "Password:", 
    confirm_password_label: "Confirm Password:", 
    hero_title: "Welcome to Krishi Setu", 
    hero_subtitle: "Your Agri-Tech Knowledge Partner", 
    hero_description: "AI-powered farming solution at your fingertips. Get instant crop advice, disease detection, and weather updates in your local language.", 
    ask_question: "Ask your Question", 
    upload_image: "Upload Image", 
    chat_placeholder: "Type your message..." 
  }, 
  hi: { 
    nav_home: "होम", 
    nav_features: "विशेषताएँ",  
    nav_about: "हमारे बारे में", 
    nav_contact: "संपर्क र्रें", 
    login: "लॉविन", 
    register_here: "यहाँ पंजीर्रण र्रें", 
    already_account: "क्या आपर्े पास पहले से खाता है?", 
    dont_have_account: "खाता नहीं है?", 
    email_label: "ईमेल:", 
    password_label: "पासिर्क:", 
    confirm_password_label: "पासिर्क पुवि र्रें:", 
    hero_title: "र्ृ वष सेतु में आपर्ा स्वाित है", 
    hero_subtitle: "आपर्ा र्ृ वष-टेर् ज्ञान साथी", 
    hero_description: "एआई-संचावलत खेती समाधान आपर्ी उंिवलयों पर। तुरंत फसल सलाह, रोि पहचान, और मौसम अपर्ेट अपनी स्थानीय भाषा में प्राप्त र्रें।", 
    ask_question: "अपना प्रश्न पूछें", 
    upload_image: "छवि अपलोर् र्रें", 
    chat_placeholder: "अपना संदेश टाइप र्रें..." 
  }, 
  ml: { 
    nav_home: "ഹ  ോം", 
    nav_features: "സവിഹേഷതകൾ", 
    nav_about: "ഞങ്ങളെക്കുറിച്ച്", 
    nav_contact: "ബന്ധളെടുക", 
    login: "ഹ  ഗിൻ", 
    register_here: "ഇവിളട രജിസ്റ്റർ ളെയ്യുക", 
    already_account: "ഇതിനകോം അക്കൗണ്ട് ഉഹണ്ട ?", 
    dont_have_account: "അക്കൗണ്ട് ഇഹേ?", 
    email_label: "ഇളെയിൽ:", 
    password_label: "പ ഹസേഡ്:", 
    confirm_password_label: "പ ഹസേഡ് സ്ഥിരീകരിക്കുക:", 
    hero_title: "കൃഷി ഹസതുവിഹ ക്ക് സേ ഗതോം", 
    hero_subtitle: "നിങ്ങെുളട അഗ്ഗി-ളടക് ഹന െജ് പ ർട്ണർ", 
    hero_description: "എഐ-പവർഡ് ഫ െിോംഗ് ളസ  യൂഷൻ നിങ്ങെുളട വിര ടികെിൽ. ഉടൻ വിെളവടുെ് ഉപഹേേോം, ഹര ഗോം കളണ്ടത്തൽ, ക   വസ്ഥ അപ്്‌ഹഡറ്റുകൾ നിങ്ങെുളട ഗ്പ ഹേേിക ഭ ഷയിൽ.", 
    ask_question: "നിങ്ങെുളട ഹെ േയോം ഹെ േിക്കുക", 
    upload_image: "െിഗ്തോം അപ്്‌ഹ  ഡ് ളെയ്യുക", 
    chat_placeholder: "നിങ്ങെുളട സഹേേോം ടടെ് ളെയ്യുക..." 
  } 
}; 
 
// =========================== 
// Function to update all translatable elements 
// =========================== 
function setLanguage(lang) { 
  if (!translations[lang]) { 
    console.warn(`Language '${lang}' not found. Falling back to English.`); 
    lang = 'en'; 
  } 
 
  // Update all elements with data-i18n attribute 
  document.querySelectorAll("[data-i18n]").forEach(el => { 
    const key = el.getAttribute("data-i18n"); 
    if (translations[lang][key]) { 
      el.textContent = translations[lang][key]; 
    } 
  }); 
 
  // Update placeholders separately (for inputs) 
  const placeholdersMap = { 
    'login-email': 'email_label', 
    'login-password': 'password_label', 
    'register-email': 'email_label', 
    'register-password': 'password_label', 
    'register-password-confirm': 'confirm_password_label' 
  }; 
 
  Object.entries(placeholdersMap).forEach(([id, key]) => { 
    const input = document.getElementById(id); 
    if (input && translations[lang][key]) { 
      input.placeholder = translations[lang][key]; 
    } 
  }); 
 
  // Update chat input placeholder if exists 
  const chatInput = document.querySelector(".chat-input input[type='text']"); 
  if (chatInput && translations[lang].chat_placeholder) { 
    chatInput.placeholder = translations[lang].chat_placeholder; 
  } 
 
  // Update current language label in dropdown 
  const currentLangSpan = document.getElementById('current-lang'); 
  if (currentLangSpan) { 
    const langNames = { en: "English", hi: "Hindi", ml: "Malayalam" }; 
    currentLangSpan.textContent = langNames[lang] || "English"; 
} 
} 
// =========================== 
// Language Dropdown Event Listeners 
// =========================== 
document.querySelectorAll('.dropdown-content a').forEach(link => { 
link.addEventListener('click', e => { 
e.preventDefault(); 
const selectedLangText = link.textContent.trim().toLowerCase(); 
let selectedLang = 'en'; // default 
if (selectedLangText === 'hindi') selectedLang = 'hi'; 
else if (selectedLangText === 'malayalam') selectedLang = 'ml'; 
setLanguage(selectedLang); 
}); 
}); 
// =========================== 
// Modal Open/Close Logic 
// =========================== 
const authModal = document.getElementById('auth-modal'); 
const loginForm = document.getElementById('login-form'); 
const registerForm = document.getElementById('register-form'); 
const navLoginBtn = document.querySelector('button.nav-item');
const modalCloseBtn = authModal ? authModal.querySelector('.modal-close') : null; 
function openModal() { 
if (!authModal || !loginForm || !registerForm) return; 
authModal.classList.add('show'); 
authModal.setAttribute('aria-hidden', 'false'); 
loginForm.classList.add('active'); 
registerForm.classList.remove('active'); 
const firstInput = loginForm.querySelector('input'); 
if (firstInput) firstInput.focus(); 
} 
// function closeModal() { 
// if (!authModal) return; 
// authModal.classList.remove('show'); 
// authModal.setAttribute('aria-hidden', 'true'); 
// } 
if (navLoginBtn) { 
navLoginBtn.addEventListener('click', openModal); 
} 
if (modalCloseBtn) { 
modalCloseBtn.addEventListener('click', closeModal); 
} 
if (authModal) { 
  authModal.addEventListener('click', e => { 
    if (e.target === authModal) closeModal(); 
  }); 
} 
 
document.addEventListener('keydown', e => { 
  if (e.key === 'Escape' && authModal && authModal.classList.contains('show')) { 
    closeModal(); 
  } 
}); 
 
// Switch between login and register forms 
document.addEventListener('click', e => { 
  if (!loginForm || !registerForm) return; 
 
  if (e.target && e.target.id === 'show-register') { 
    loginForm.classList.remove('active'); 
    registerForm.classList.add('active'); 
    const firstInput = registerForm.querySelector('input'); 
    if (firstInput) firstInput.focus(); 
  } 
 
  if (e.target && e.target.id === 'show-login') { 
    registerForm.classList.remove('active'); 
    loginForm.classList.add('active'); 
    const firstInput = loginForm.querySelector('input'); 
    if (firstInput) firstInput.focus(); 
  } 
}); 
// =========================== 
// Initialize default language 
// =========================== 
document.addEventListener('DOMContentLoaded', () => { 
setLanguage('en'); 
}); 
function closeLogin() { 
const loginBox = document.getElementById("loginBox"); 
loginBox.style.display = "none"; 
} 
// ===========================
// Success Stories Join Button
// ===========================
const loginModal = document.getElementById("loginModal");
    const loginFormModal = document.getElementById("loginFormModal");

    document.getElementById("openModalBtn").addEventListener("click", () => {
      loginModal.style.display = "block";
    });

    document.getElementById("okBtn").addEventListener("click", () => {
      loginModal.style.display = "none";
      window.location.href = "index2.html"; // ✅ Redirect to second page
    });

    document.getElementById("changeBtn").addEventListener("click", () => {
      loginModal.style.display = "none";
      loginFormModal.style.display = "block";
    });

    document.getElementById("joinCommunityBtn").addEventListener("click", () => {
      loginFormModal.style.display = "none";
      window.location.href = "index2.html"; // ✅ Redirect to second page
    });

    window.onclick = function(event) {
      if (event.target === loginModal) loginModal.style.display = "none";
      if (event.target === loginFormModal) loginFormModal.style.display = "none";
    };