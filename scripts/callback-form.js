const spreadsheetId = "1egKGDKioYN2VLWzDpVWtcDbgJ12cmUgd3d4DxsY6E9E";
const sheetId = "Callback requests";

document
  .querySelector(".callback-form form")
  .addEventListener("submit", async (event) => {
    const name = document.querySelector(".callback-form input#name").value;
    const contact = document.querySelector(
      ".callback-form input#contact"
    ).value;

    const data = {
      range: sheetId,
      majorDimension: "ROWS",
      values: [[name, contact]],
    };

    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
        sheetId
      )}:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(
            "google-api-access-token"
          )}`,
        },
        body: JSON.stringify(data),
      }
    );

    const form = event.target;
    form.reset();

    const thanks = document.querySelector(".callback-form .thanks");
    thanks.classList.add("activate");
  });
