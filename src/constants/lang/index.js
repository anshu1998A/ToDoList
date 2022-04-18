import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalizedStrings from "react-native-localization";
import en from "./en";
import fr from "./frr";


let strings = new LocalizedStrings({
    en: en,
    fr: fr,
});


export const changeLanguage = async (langKey) => {
    await AsyncStorage.setItem('language', langKey)
    strings.setLanguage(langKey)
}

export default strings;