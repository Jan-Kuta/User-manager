import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Language": "Language",
            "Note list": "Note list",
            "New note": "New note",
            "Note detail": "Note detail",
            "Title": "Title",
            "Delete": "Delete",
            "Edit": "Edit",
            "Dialog title": "Do you realy want to delete this item?",
            "Dialog description": "It can't be undone.",
            "Cancel": "Cancel",
            "OK": "OK",
            "Note edit": "Note edit",
            "Submit": "Submit",
            "User list": "User list",
            "User detail": "User detail",
            "Create user": "New user",
            "STATE_NEW": "New",
            "STATE_VALIDATED": "Validated",
            "STATE_VIP": "VIP",
            "Add user": "Add user",
            "Firstname": "Firstname",
            "Lastname": "Lastname",
            "Username": "Username",
            "State": "State",
            "Actions": "Actions"
        }
    },
    cs: {
        translation: {
            "Language": "Jazyk",
            "Note list": "Poznámky",
            "New note": "Nová poznámka",
            "Note detail": "Detail poznámky",
            "Title": "Popisek",
            "Delete": "Smazat",
            "Edit": "Upravit",
            "Dialog title": "Opravdu si přejete smazat tuto položku?",
            "Dialog description": "Tato akce nelze vrátit zpět.",
            "Cancel": "Zrušit",
            "OK": "Potvrdit",
            "Note edit": "Úprava poznámky",
            "Submit": "Uložit",
            "User list": "Seznam uživatelů",
            "User detail": "Další údaje",
            "Create user": "Nový uživatel",
            "Edit user": "Editace uživatele",
            "STATE_NEW": "Nový",
            "STATE_VALIDATED": "Ověřený",
            "STATE_VIP": "VIP",
            "Add user": "Přidat uživatele",
            "Basic info": "Základní údaje",
            "Firstname": "Jméno",
            "Lastname": "Příjmení",
            "Username": "Uživatelské jméno",
            "State": "Stav",
            "Actions": "Akce",
            "Email": "E-mail",
            "Phone": "Telefonní číslo",
            "Street": "Ulice",
            "City": "Město",
            "Zip": "Směrovací číslo",
            "Permanent address": "Adresa",
            "Contact address": "Kontaktní adresa",
            "Field is required": "Toto pole je povinné",
            "Addresses differ": "Zadat jinou kontaktní adresu",
            "Back": "Předchozí",
            "Next": "Následující",
            "Rows per page": "Počet záznamů na stránce",
            "Of": "z",
            "Delete confirmation": "Opravdu si přejete záznam smazat?",
            "Delete confirmation text": "Uživatel {{fullName}} bude smazán trvale. Akce nemůže být vrácen zpět.",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,

        fallbackLng: ['en', 'cs'],

        lng: 'cs',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
