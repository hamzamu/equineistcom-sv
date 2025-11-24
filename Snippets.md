


## Export to CSV from Minimongo

```js
    // TODO: fix Edits
    function edit_event(event_id){

    }
    // Download the Sheet

    async function download_horse_sheet() {
    // Use Paparse to transform JSON to CSV

    const csv = Papa.unparse(events);

    // Create a Blob (binary object) from the CSV string
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'horse_records.csv');
    link.style.visibility = 'hidden'; // hide the link

    document.body.appendChild(link);
    link.click(); // trigger download
    document.body.removeChild(link); // clean up

    // Optional: revoke URL to free memory
    URL.revokeObjectURL(url);
  }

```