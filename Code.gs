/**
 * Backend Google Apps Script untuk Love Logic Quiz.
 * Ganti SPREADSHEET_ID dengan ID dari URL Google Spreadsheet Anda.
 */
const SPREADSHEET_ID = 'PASTE_ID_GOOGLE_SHEET_DI_SINI';
const SHEET_NAME = 'Hasil Kuis';

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents);
    const sheet = getResultsSheet_();
    sheet.appendRow([
      new Date(),
      clean_(data.username, 28),
      Number(data.score),
      Number(data.correctAnswers),
      Number(data.totalQuestions),
      clean_(data.completedAt, 40),
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getResultsSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['Waktu server', 'Username', 'Persentase', 'Jawaban sehat', 'Total soal', 'Waktu dari game']);
    sheet.setFrozenRows(1);
    sheet.getRange('A1:F1').setFontWeight('bold').setBackground('#f9b4c9');
    sheet.autoResizeColumns(1, 6);
  }
  return sheet;
}

function clean_(value, maxLength) {
  return String(value || '').replace(/[<>]/g, '').slice(0, maxLength);
}
