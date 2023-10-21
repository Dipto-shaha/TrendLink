function saveThemeLocal(val){
    localStorage.removeItem('themeTrend');
    localStorage.setItem('themeTrend',JSON.stringify(val));
}
function getThemeLocal()
{
    if(localStorage.getItem('themeTrend'))
        return JSON.parse(localStorage.getItem('themeTrend'));
    return true;
}
export {saveThemeLocal,getThemeLocal} 