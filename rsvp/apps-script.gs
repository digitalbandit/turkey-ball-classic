/**
 * Turkey Ball Classic — RSVP receiver (Google Apps Script web app).
 *
 * Setup (once):
 *   1. Make a Google Sheet (any name, e.g. "Turkey Ball Classic RSVPs").
 *   2. In the sheet: Extensions → Apps Script. Replace everything with this file. Save.
 *   3. Deploy → New deployment → type "Web app".
 *        Execute as: Me
 *        Who has access: Anyone
 *      Authorize when Google asks.
 *   4. Copy the Web app URL (ends in /exec) into `rsvp.endpoint` in src/data/event.ts.
 *
 * After editing this script later: Deploy → Manage deployments → edit → Version: New version.
 * (Same URL keeps working.)
 *
 * One row per email. Re-submitting with the same email updates that row.
 */

const SHEET_NAME = 'RSVPs'
const NOTIFY_EMAIL = '' // optional: put your email here to get a note on every RSVP
const HEADERS = ['Updated', 'First RSVP', 'Name', 'Email', 'Adults', 'Kids / Thrashers', 'Role', 'Notes']

function doGet() {
  return json({ ok: true, service: 'tbc-rsvp' })
}

function doPost(e) {
  let data
  try {
    data = JSON.parse(e.postData.contents)
  } catch (err) {
    return json({ ok: false, error: 'bad_request' })
  }

  // Honeypot: real people never fill this hidden field.
  if (data.website) return json({ ok: true })

  const name = clean(data.name, 80)
  const email = clean(data.email, 120).toLowerCase()
  const adults = count(data.adults)
  const kids = count(data.kids)
  const role = data.role === 'sideline' ? 'Sideline' : 'Playing'
  const notes = clean(data.notes, 500)

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || adults === null || kids === null) {
    return json({ ok: false, error: 'invalid' })
  }

  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  let updated = false
  try {
    const sheet = getSheet()
    const now = new Date()
    const last = sheet.getLastRow()
    let row = -1
    if (last > 1) {
      const emails = sheet.getRange(2, 4, last - 1, 1).getValues()
      for (let i = 0; i < emails.length; i++) {
        if (String(emails[i][0]).toLowerCase() === email) {
          row = i + 2
          break
        }
      }
    }
    const firstAt = row > 0 ? sheet.getRange(row, 2).getValue() || now : now
    const values = [now, firstAt, safe(name), safe(email), adults, kids, role, safe(notes)]
    if (row > 0) {
      sheet.getRange(row, 1, 1, values.length).setValues([values])
      updated = true
    } else {
      sheet.appendRow(values)
    }
  } finally {
    lock.releaseLock()
  }

  if (NOTIFY_EMAIL) {
    try {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        (updated ? 'RSVP updated: ' : 'New RSVP: ') + name,
        [name, email, adults + ' adults, ' + kids + ' kids', role, notes].filter(Boolean).join('\n'),
      )
    } catch (err) {
      // Email is a nice-to-have; the row is already saved.
    }
  }

  return json({ ok: true, updated: updated })
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
  }
  return sheet
}

function clean(v, max) {
  return String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, max)
}

function count(v) {
  const n = Number(String(v == null ? '' : v).trim())
  return Number.isInteger(n) && n >= 0 && n <= 20 ? n : null
}

// Keep spreadsheet from treating input as a formula.
function safe(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
