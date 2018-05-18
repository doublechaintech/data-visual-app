import enUS from './en_US'
import zhCN from './zh_CN'

const defaultMessageSet = zhCN;
let   currentMessageSet = defaultMessageSet;

const localeSet = {
    "enUS":{ title: "English US",messages: enUS},
    "zhCN":{ title: "中文",messages: zhCN},
};
const switchLanguage =(selectLocale)=>{
    const locale = localeSet[selectLocale];
    if(locale){
        currentMessageSet = locale.messages
        return;
    }
}

const i18n =(messageKey)=>{
   
    const msg = currentMessageSet[messageKey];
    if(!msg){
        return messageKey;
    }
    return msg;

}

const Locale = {
    switchLanguage,i18n
};

export default Locale;