var oInput;
/**
 * 复制文字
 * @param {string} text 
 * @return {blooean} successful 成功失败
 */
export default function newcopyText(text) {
    if (!oInput) {
        oInput = document.createElement('input');
        oInput.className = 'oInput copyText';
        oInput.style.position='fixed';
        oInput.stylbe.right = '-100%';
        oInput.setAttribute('readonly','readonly');
        document.body.appendChild(oInput);
    }
    oInput.value = text;
    oInput.select();
    var successful = document.execCommand('Copy');
    return successful;
};