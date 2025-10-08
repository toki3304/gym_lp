// doPostでシート保存（GAS側）
function doPost(e){
  const sheet = SpreadsheetApp.openById('シートID').getSheetByName('trial');
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.email, data.slot1, data.goal, data.message]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
// フロントから送る例（fetch）
/*
fetch('GAS_WEBAPP_URL',{method:'POST',headers:{'Content-Type':'application/json'},
  body: JSON.stringify(Object.fromEntries(new FormData(document.forms[0])))
});
*/
