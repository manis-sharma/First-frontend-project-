const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const translateBtn = document.querySelector(".translate-btn");
const exchangeIcon = document.querySelector(".exchange");
const fromLanguage = document.querySelector(".from-language");
const toLanguage = document.querySelector(".to-language");
const speakFrom = document.querySelector(".speak-from");
const speakTo = document.querySelector(".speak-to");
const copyFrom = document.querySelector(".copy-from");
const copyTo = document.querySelector(".copy-to");

// Language options
const languages = {
    "en-US": "English",
    "hi-IN": "Hindi",
    "ne-NP": "Nepali",
    "es-ES": "Spanish",
    "fr-FR": "French",
    "zh-CN": "Chinese",
    "ar-SA": "Arabic",
    "de-DE": "German",
    "ru-RU": "Russian",
};

// Populate language dropdowns
Object.keys(languages).forEach((lang) => {
    const option = `<option value="${lang}">${languages[lang]}</option>`;
    fromLanguage.innerHTML += option;
    toLanguage.innerHTML += option;
});
fromLanguage.value = "en-US";
toLanguage.value = "hi-IN";

// Exchange languages
exchangeIcon.addEventListener("click", () => {
    const tempText = fromText.value;
    const tempLang = fromLanguage.value;
    fromText.value = toText.value;
    toText.value = tempText;
    fromLanguage.value = toLanguage.value;
    toLanguage.value = tempLang;
});

// Translate text
translateBtn.addEventListener("click", async () => {
    const text = fromText.value.trim();
    if (!text) return alert("Please enter text to translate.");
    const from = fromLanguage.value;
    const to = toLanguage.value;

    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`);
    const result = await response.json();
    toText.value = result.responseData.translatedText;
});

// Copy text
copyFrom.addEventListener("click", () => navigator.clipboard.writeText(fromText.value));
copyTo.addEventListener("click", () => navigator.clipboard.writeText(toText.value));

// Speak text
speakFrom.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(fromText.value);
    utterance.lang = fromLanguage.value;
    speechSynthesis.speak(utterance);
});

speakTo.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(toText.value);
    utterance.lang = toLanguage.value;
    speechSynthesis.speak(utterance);
});
