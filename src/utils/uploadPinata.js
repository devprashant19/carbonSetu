const uploadToPinata = async ({uid,name,type}) => {
    const jsonData = {
    uid,
    name,
    type,
    date: new Date().toISOString()
  };
    try {
      const response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiZmIxZjExZS1mODgwLTRlZTktYTM3YS03MzU3NjkyNTEwZjgiLCJlbWFpbCI6InByYXNoYW50MTAxMDA3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MDk0ZjAyMzFjODc5NTExZjJkYSIsInNjb3BlZEtleVNlY3JldCI6ImFmZWM3ZGI4MjlhOWEzZDg0ZjhhOWZkZGNmODgzZGU0NzgzYWEzMWE1NzgxODIzZTA0ZmE4NzFkMGE2NzU1NDQiLCJleHAiOjE3ODk4MzY4MDF9.oLpGpIEw4yTz7Lx6LF8rqvR-nTmWk5AhNTdjmY4vsvg` // 🔑 Replace with your JWT
        },
        body: JSON.stringify(jsonData)
      });

      const data = await response.json();
      if (data.IpfsHash) {
        alert("Uploaded! CID: " + data.IpfsHash);
        console.log("Pinata Response:", data);
      } else {
        alert("Upload failed: " + JSON.stringify(data));
      }
    } catch (err) {
      console.error("Error uploading:", err);
      alert("Error uploading");
    }
  };
  export default uploadToPinata;